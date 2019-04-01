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
window.addEventListener('load', makeOutline);
// DFUNC:
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
      // DDOES:
      createList(source, outlineList);
};
// DFUNC:
function createList(source, outlineList) {
      // DVARA:
      var headings = ["H1", "H2", "H3", "H4", "H5", "H6"];
      // DVARN:
      var prevLevel = 0;
      // DVARN: Running total of the article headings 
      var headNum = 0;
      // DDOES: Loop through all of the child nodes of source article until no child nodes are left
      for (var n = source.firstChild; n !== null; n = n.nextSibling) {
            // DVARA:
            var headLevel = headings.indexOf(n.nodeName);
            // DIFDO:  Examine only article headings
            if (headLevel !== -1) {
                  // DIFDO: Add an id to the heading if it is missing
                  headNum++;
                  if (n.hasAttribute('id') === false) {
                        n.setAttribute('id', 'head' + headNum);
                  }
                  // DVARO:
                  var listElem = document.createElement('li');
                  // DDOES: Create hypertext links to the document headings
                  var linkElem = document.createElement('a');
                  linkElem.innerHTML = n.innerHTML;
                  linkElem.setAttribute('href', '#' + n.id);
                  // DDOES: Append the hypertext link to the list item
                  listElem.appendChild(linkElem);
                  // DIFDO:
                  if (headLevel === prevLevel) {
                        // DDOES: Append the list item to the current list
                        outlineList.appendChild(listElem);
                  } else if (headLevel > prevLevel) {
                        // DDOES: Start a new nested list
                        var nestedList = document.createElement('ol');
                        nestedList.appendChild(listElem);
                        // DDOES:  Append nested list to last item in the current list
                        console.log(outlineList.lastChild)
                        outlineList.lastChild.appendChild(nestedList);
                        // DDOES: Change the current list to the nested list
                        outlineList = nestedList;
                  } else {
                        // DDOES: Append the list item to a higher list
                        // DVARN: Calculate the difference between the current and previous level
                        var levelup = prevLevel - headLevel;
                        // DLOOP: Go up to the higher level
                        for (var i = 1; i <= levelup; i++) {
                              outlineList = outlineList.parentNode.parentNode;
                        }
                        // DDOES:
                        outlineList.appendChild(listElem);
                  }

                  // DDOES: Update the value of prevLevel
                  prevLevel = headLevel;
            };
      };
};