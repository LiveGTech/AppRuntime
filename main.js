/*
    LiveG App Runtime

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.tech
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

const electron = require("electron");
const minimist = require("minimist");
const path = require("path");

var ipc = require("./ipc");

global.arguments = minimist(process.argv);
global.mainWindow = null;

console.log(global.arguments);

global.newWindow = function(url) {
    global.mainWindow = new electron.BrowserWindow({
        width: 1200,
        height: 800,
        fullscreenable: true,
        webPreferences: {
            title: "",
            devTools: true,
            webviewTag: true,
            preload: path.join(__dirname, "preload.js")
        }
    });

    global.mainWindow.removeMenu();
    global.mainWindow.setMenuBarVisibility(false);

    global.mainWindow.loadFile("index.html");

    if (global.arguments["debug"]) {
        global.mainWindow.webContents.openDevTools();
    }

    global.mainWindow.on("closed", function() {
        global.mainWindow = null;
    });
};

electron.app.on("ready", global.newWindow);

electron.app.on("window-all-closed", function() {
    electron.app.quit();
});

electron.app.on("activate", function() {
    if (global.mainWindow == null) {
        global.mainWindow();
    }
});