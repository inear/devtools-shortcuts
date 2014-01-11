// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area

var page_getShortcuts = function() {
  var data = document.querySelectorAll('[data-inspect=\"true\"]');
  return data;
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