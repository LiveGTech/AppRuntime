/*
    LiveG App Runtime

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.tech
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

const electron = require("electron");

electron.ipcMain.handle("getArguments", function(event) {
    return Promise.resolve(global["arguments"]);
});