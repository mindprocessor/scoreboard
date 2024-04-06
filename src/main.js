const { app, BrowserWindow, Menu } = require('electron/main')
const path = require('node:path')

function createWindow () {
  const win = new BrowserWindow({
    minWidth: 1280,
    minHeight: 800,
    webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
  });

  //Menu.setApplicationMenu(null);

  win.loadFile(path.join(__dirname, 'index.html'));
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})