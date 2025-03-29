document.getElementById('copy-btn').addEventListener('click', function() {
  const upcCode = document.getElementById('upc').innerText;

  if (upcCode) {
    navigator.clipboard.writeText(upcCode).then(function() {
      alert('UPC copied to clipboard!');
    }).catch(function(err) {
      console.error('Error copying text: ', err);
    });
  }
});

chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  chrome.scripting.executeScript({
    target: { tabId: tabs[0].id },
    func: extractUPC
  }, (result) => {
    const upcCode = result[0].result;
    document.getElementById('upc').innerText = upcCode || 'UPC not found';
  });
});

function extractUPC() {
  let upc = null;
  
  // Example: Search for UPC in Walmart's product page
  const upcMeta = document.querySelector('meta[itemprop="gtin13"]');
  if (upcMeta) {
    upc = upcMeta.content;
  }

  return upc;
}
