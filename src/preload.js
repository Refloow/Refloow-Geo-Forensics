// src/preload.js
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
    triggerUpdateCheck: (isAutoUpdateEnabled) => ipcRenderer.send('check-updates', isAutoUpdateEnabled),
    getAppVersion: () => ipcRenderer.invoke('get-app-version')
});
