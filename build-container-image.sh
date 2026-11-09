#!/bin/bash
set -e

# ---------------------------
# 0️⃣ Variablen
# ---------------------------
IMAGE_NAME_FRONTEND="localhost/rent-a-herby-frontend"
IMAGE_NAME_FRONTEND_REGISTRY="rasp-5-1:5000/rent-a-herby-frontend"
BUILD_DIR="dist/rent-a-herby-frontend/browser"  # Angular Build Ordner
NGINX_CONF="nginx.conf"                         # Pfad zur nginx.conf

# ---------------------------
# 0️⃣ Alte Images löschen
# ---------------------------
echo "Bereinige alte Frontend-Images..."
podman image rm -f ${IMAGE_NAME_FRONTEND}-amd64:latest 2>/dev/null || true
podman image rm -f ${IMAGE_NAME_FRONTEND}-arm64:latest 2>/dev/null || true
podman image rm -f ${IMAGE_NAME_FRONTEND}:latest 2>/dev/null || true

# ---------------------------
# 1️⃣ AMD64 Build lokal
# ---------------------------
echo "🔹 Build AMD64"
podman build \
  --platform linux/amd64 \
  -t ${IMAGE_NAME_FRONTEND}-amd64:latest \
  --build-arg BUILD_DIR=${BUILD_DIR} \
  --build-arg NGINX_CONF=${NGINX_CONF} \
  --file Dockerfile .

# ---------------------------
# 2️⃣ ARM64 Build remote (Raspberry Pi)
# ---------------------------
echo "🔹 Build ARM64 auf Raspberry Pi"
# Verbindung zum Pi herstellen (wie bei Backend-Skript)
podman system connection default arm
podman-remote build \
  --platform linux/arm64 \
  -t ${IMAGE_NAME_FRONTEND}-arm64:latest \
  --build-arg BUILD_DIR=${BUILD_DIR} \
  --build-arg NGINX_CONF=${NGINX_CONF} \
  --file Dockerfile.nginx .

# ---------------------------
# 3️⃣ ARM64 zurückholen
# ---------------------------
echo "🔹 Hole ARM64-Image vom Raspberry Pi"
podman-remote save ${IMAGE_NAME_FRONTEND}-arm64:latest | podman load

# ---------------------------
# 4️⃣ Multi-Arch Manifest erstellen
# ---------------------------
echo "🔹 Erstelle Multi-Arch-Image"
podman manifest create ${IMAGE_NAME_FRONTEND}:latest

echo "Füge AMD64-Image hinzu"
podman manifest add --arch amd64 --os linux ${IMAGE_NAME_FRONTEND}:latest containers-storage:${IMAGE_NAME_FRONTEND}-amd64:latest

echo "Füge ARM64-Image hinzu"
podman manifest add --arch arm64 --os linux ${IMAGE_NAME_FRONTEND}:latest containers-storage:${IMAGE_NAME_FRONTEND}-arm64:latest

# ---------------------------
# 5️⃣ Push in lokale Registry (optional)
# ---------------------------
echo "🔹 Push Multi-Arch Image in Registry"
podman manifest push --all ${IMAGE_NAME_FRONTEND}:latest ${IMAGE_NAME_FRONTEND_REGISTRY}:latest

echo "✅ Fertig! Multi-Arch Frontend-Image erstellt und gepusht."
