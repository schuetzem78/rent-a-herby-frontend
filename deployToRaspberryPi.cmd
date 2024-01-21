@ECHO OFF

ECHO Alte Dateien werde geloescht...
DEL /S /Q \\rent-a-herby\nginx-herby\*

ECHO Neue Dateien werden bereitgestellt...
XCOPY dist\rent-a-herby-frontend\browser \\rent-a-herby\nginx-herby /S /Y

ECHO fertig
