import {app, BrowserWindow} from 'electron';
import { format as formatUrl } from 'url'
import * as Path from 'path';

const isDevelopment = process.env.NODE_ENV !== 'production'

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow:BrowserWindow | null

let createWindow = () => {
  mainWindow = new BrowserWindow()

  if (isDevelopment) {
    mainWindow.webContents.openDevTools()
  }

  if (isDevelopment) {
    mainWindow.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}`)
  }
  else {
    mainWindow.loadURL(formatUrl({
      pathname: Path.join(__dirname, 'index.html'),
      protocol: 'file',
      slashes: true
    }))
  }

  mainWindow.on('closed', () => {
    mainWindow = null;
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
})
