const { app, BrowserWindow,Menu } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1920,
    height: 1080
    //resizable: false
    //fullscreen: true
  })

  win.loadFile('index.html')
  // Quitar la barra de menú
  //Menu.setApplicationMenu(null);    para cando teña que compilar a app que se quiten os menus de navegador
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
