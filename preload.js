const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
    host: () => process.env.HOST_URL,
    socket: () => process.env.SOCKET_URL
})