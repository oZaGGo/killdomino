const { app, BrowserWindow, Menu, ipcMain, globalShortcut } = require('electron')
let mainWindow;
const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 1920,
    height: 1080,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    },
    fullscreen: true,
    frame: false
    //resizable: false
    //fullscreen: true
  })

  mainWindow.loadFile('index.html')
  // Quitar la barra de menú
  //Menu.setApplicationMenu(null);

  //Eventos de teclado:

  globalShortcut.register('Escape', () => {
    // Abrir el menú de pausa
    mainWindow.webContents.send('trigger-pause');
    
  });

  // Escuchar el mensaje 'close-app' para cerrar la aplicación
  ipcMain.on('close-app', () => {
    app.quit();
  });
}

//AL cargar la ventana principal, se carga el index.html y se comprueban los estados que cmabian escenas
app.whenReady().then(() => {
  createWindow()

  //Comprobacion de la escena de juego de ganar
  ipcMain.on('win', () => {
    mainWindow.loadFile('win.html');
  });

  //Comprobacion de la escena de juego de perder
  ipcMain.on('lose', () => {
    mainWindow.loadFile('lose.html');
  });

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

