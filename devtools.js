// Can use
// chrome.devtools.*
// chrome.extension.*

// Create a tab in the devtools area

var page_getShortcuts = function() {

  var data = document.querySelectorAll('[inspect],[data-inspect]');
  var matchingElements = [];

  for (var i = data.length - 1; i >= 0; i--) {

    if( data[i].hasAttribute('inspect') ) {
      var value = data[i].getAttribute('inspect') + "";
      if( value === 'true' || value === '' )  {
        matchingElements.unshift(data[i]);
      }
    }
    else if( data[i].dataset['inspect'] ) {
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