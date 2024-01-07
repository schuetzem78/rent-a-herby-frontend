@ECHO OFF

ECHO Alte Dateien werde geloescht...
DEL /S /Q \\DS1815-1\Daten\rent-a-herby\static-website\*

ECHO Neue Dateien werden bereitgestellt...
XCOPY dist\rent-a-herby-frontend\browser \\DS1815-1\Daten\rent-a-herby\static-website /S /Y

ECHO fertig
