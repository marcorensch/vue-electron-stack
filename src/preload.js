import { contextBridge, ipcRenderer } from 'electron'

// White-listed channels.
const ipc = {
    'render': {
        // From render to main.
        'send': [],
        // From main to render.
        'receive': [],
        // From render to main and back again.
        'sendReceive': ['getPlayers']
    }
};

const exposedAPI = {
    // From render to main.             >>> send Should not been used anymore.
    send: (channel, args) => {
        let validChannels = ipc.render.send;
        if (validChannels.includes(channel)) {
            ipcRenderer.send(channel, args);
        }
    },
    // From main to render.             >>> receive Should not been used anymore.
    receive: (channel, listener) => {
        let validChannels = ipc.render.receive;
        if (validChannels.includes(channel)) {
            // Deliberately strip event as it includes `sender`.
            ipcRenderer.on(channel, (event, ...args) => listener(...args));
        }
    },
    // From render to main and back again.       >>> sendReceive Should be used whenever possible.
    invoke: (channel, args) => {
        let validChannels = ipc.render.sendReceive;
        if (validChannels.includes(channel)) {
            return ipcRenderer.invoke(channel, args);
        }
    },
    removeAllListeners: () => {
        ipcRenderer.removeAllListeners()
    },
    removeAllChannelListener: (channel) => {
        ipcRenderer.removeAllListeners(channel)
    }
}

contextBridge.exposeInMainWorld('ipcRenderer', exposedAPI)