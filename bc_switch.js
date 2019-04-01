"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Diego Sandoval
   Date:   March 28, 2019 (03/28/19)

   Filename: bc_switch.js
   
   setupStyles()
   Function to set up the style sheet switcher and insert
   form buttons to allow the user to switch between web
   view and page view
   
*/
// DDOES: Function for onload
window.addEventListener('load', setupStyles);
// DFUNC: setupStyles
function setupStyles() {
    // DDOES: Create a link element for the page view styles
    var pageStyle = document.createElement('link');
    pageStyle.setAttribute('href', "bc_page.css");
    pageStyle.setAttribute('rel', "stylesheet");
    pageStyle.setAttribute('disabled', "disabled")
    // DDOES:
    document.head.appendChild(pageStyle);
    pageStyle.disabled = true;
    // DDOES: Insert buttons for the style switcher
    var buttonDIV = document.createElement('div'),
        webButton = document.createElement('input'),
        pageButton = document.createElement('input');
    buttonDIV.setAttribute('id', "styleButtons")
    webButton.setAttribute("type", "button");
    webButton.setAttribute("value", "Web View");
    pageButton.setAttribute("type", "button");
    pageButton.setAttribute("value", "Page View");
    buttonDIV.appendChild(webButton);
    buttonDIV.appendChild(pageButton);
    document.body.insertBefore(buttonDIV, document.body.firstChild);
    // DDOES: Append an embedded styles sheet to the document head
    var buttonStyles = document.createElement('style');
    document.head.appendChild(buttonStyles);
    // DDOES: Add styles rules to the embedded style sheet
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#styleButtons { \
            position: fixed \
        }", 0);
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "div#styleButtons input { \
            background-color: rgba(68, 94, 186, 0.6); \
            border: 3px solid rgba(0, 24, 123, 0.6); \
            border-radius: 50%; \
            cursor: pointer; \
            color: white; \
            display: inline-block; \
            font-size: 1.2em; \
            height: 60px; \
            margin 5px 10px; \
            width: 100px; \
        }", 1);
    document.styleSheets[document.styleSheets.length - 1].insertRule(
        "@media print { \
            div#styleButtons { \
                display: none; \
            } \
        }", 2);
    // DDOES: Turn the Page View style off and on
    webButton.onclick = function () {
        pageStyle.disabled = true;
    };
    pageButton.onclick = function () {
        pageStyle.disabled = false;
    };
};