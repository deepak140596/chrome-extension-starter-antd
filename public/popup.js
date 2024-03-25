// popup.js

document.getElementById("scrapeButton").addEventListener("click", function() {
    // Send a message to the content script to scrape data
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, { message: "scrape_data" });
    });
  });
  
  // Listen for the scraped data
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "scraped_data") {
        console.log("Scraped Data:", request.data);
        // Do something with the scraped data
      }
    }
  );