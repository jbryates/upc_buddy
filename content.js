// Example logic for extracting UPC
function getUPC() {
  let upc = null;

  // Check for common meta tag for UPC or GTIN
  const upcMeta = document.querySelector('meta[itemprop="gtin13"]');
  if (upcMeta) {
    upc = upcMeta.content;
  }

  return upc;
}

// Send the UPC to the popup for display
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.action === "getUPC") {
    sendResponse({ upc: getUPC() });
  }
});
