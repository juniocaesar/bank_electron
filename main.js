const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;

// Listen for app to be ready
app.on('ready', function() {
    // Create new window
    mainWindow = new BrowserWindow({});
    mainWindow.setMenu(null);
    mainWindow.maximize();
    mainWindow.removeMenu();
    Menu.setApplicationMenu(null);
    // Load HTML inti window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, '/admin/dist/customer.html'),
        protocol: 'file',
        slashes: true
    }));

});