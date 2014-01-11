// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area

var page_getShortcuts = function() {
  return document.querySelectorAll('[inspect="true"],[data-inspect]');
};

chrome.devtools.panels.elements.createSidebarPane(
  "Shortcuts",
  function(sidebar) {
    function updateElementProperties() {
      sidebar.setExpression("(" + page_getShortcuts.toString() + ")()");
    }
    updateElementProperties();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
  }
);