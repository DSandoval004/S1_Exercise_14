"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Tutorial Case

   Author: Diego Sandoval
   Date:   March 28, 2019 (03/28/19)

   Filename: bc_outline.js


   Function List
   =============

   makeOutline()
      Generates the text of the table of contents
      as a nested list

   createList(source, TOCList, headings)
      Creates an outline based on the source document,
      list items are appended to TOCList,
      the list items are based on the element names
      specified in the headings array


*/

// DDOES: Generate an outline based on h1 through h6 headings in the source document
window.onload = makeOutline;

function makeOutline() {
      // DVARO: Location of the document outline 
      var outline = document.getElementById("outline");
      // DVARO: Source document for the outline 
      var source = document.getElementById("doc");
      // DVARL:
      var mainHeading = document.createElement('h1'),
            outlineList = document.createElement('ol'),
            headingText = document.createTextNode('Outline');
      // DDOES:
      mainHeading.appendChild(headingText);
      outline.appendChild(mainHeading);
      outline.appendChild(outlineList);
}