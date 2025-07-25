```


!macro customUnInstall
  DetailPrint "正在执行卸载清理..."
  ExecWait 'cmd /c schtasks /delete /tn "ElectronDoorDailyStart_8PM" /f'
  DeleteRegKey HKLM "Software\\YourAppName"
!macroend
```