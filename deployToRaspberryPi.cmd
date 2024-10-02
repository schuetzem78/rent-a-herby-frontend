@ECHO OFF

ECHO Alte Dateien werde geloescht...
DEL /S /Q \\rasp5-1\rent-a-herby-frontend\*

ECHO Neue Dateien werden bereitgestellt...
XCOPY dist\rent-a-herby-frontend\browser \\rasp5-1\rent-a-herby-frontend /S /Y

ECHO fertig
