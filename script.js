/*
    LiveG App Runtime

    Copyright (C) LiveG. All Rights Reserved.

    https://liveg.tech
    Licensed by the LiveG Open-Source Licence, which can be found at LICENCE.md.
*/

window.addEventListener("load", function() {
    runtime.getArguments().then(function(args) {
        document.querySelector("webview").src = args.url;
    });
});