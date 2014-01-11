// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area

var page_getShortcuts = function() {

  var data = document.querySelectorAll('[inspect]');
  var matchingElements = [];

  for (var i = data.length - 1; i >= 0; i--) {
    var value = data[i].getAttribute('inspect').toString();
    if( value === 'true' || value === '' )  {
      matchingElements.unshift(data[i]);
    }
  }

  return matchingElements;
};

chrome.devtools.panels.elements.createSidebarPane(
  "Shortcuts",
  function(sidebar) {
    function updateElementProperties() {
      sidebar.setExpression("(" + page_getShortcuts + ")()");
    }
    updateElementProperties();
    chrome.devtools.panels.elements.onSelectionChanged.addListener(updateElementProperties);
  }
);