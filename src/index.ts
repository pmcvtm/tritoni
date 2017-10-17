import {app, BrowserWindow} from 'electron';

import * as Path from 'path';
import * as Url from 'url';

import './index.html';

let mainWindow:BrowserWindow;

let createWindow = () => {
  mainWindow = new BrowserWindow({width: 800, height: 600})

  mainWindow.loadURL(Url.format({
    pathname: Path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  // mainWindow.webContents.openDevTools()

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
