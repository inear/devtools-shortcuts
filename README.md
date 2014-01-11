DevTools element shortcuts
===

This is a simple devtools extension that adds a shortcuts-tab to the elements sidebar-pane. By adding a attribute to the elements in the DOM, the item is showing up in the list.

Installation
===

 * Open [chrome://extensions](chrome://extensions)
 * Enable 'Developer Mode' checkbox
 * Click 'Load unpacked extensions...'
 * Select the folder where you cloned this repo

Usage
===

Add data-inspect="true" to all elements that you want to add to the list. Saves a lot of time reaching elements if it's nested deep in the DOM. You can then right-click the items and select "Reveal in Elements panel" to inspect them.

Screenshot
====
![screenshot](https://raw.github.com/inear/devtools-shortcuts/master/screenshot.png)
