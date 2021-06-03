const electron = require("electron");

const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

function createWindow(){
    const mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences:true
    })
    mainWindow.loadFile("index.html").then(function(){
        mainWIndow.webContens.openDevTools();
        mainWindow.maximize();
    })
}

app.whenReady().then(function(){
    createWindow()
});