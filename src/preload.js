// src/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    triggerUpdateCheck: (isAutoUpdateEnabled) => ipcRenderer.send('check-updates', isAutoUpdateEnabled),
    getAppVersion: () => ipcRenderer.invoke('get-app-version'),
    getPlatform: () => process.platform,
    selectFolder: () => ipcRenderer.invoke('dialog:openDirectory'),
    estimateFolder: (folderPath) => ipcRenderer.invoke('scan:estimate', folderPath),
    scanFolder: (folderPath) => ipcRenderer.invoke('scan:directory', folderPath),
    getOfflineWorldMap: () => ipcRenderer.invoke('map:getOfflineWorld')
});
