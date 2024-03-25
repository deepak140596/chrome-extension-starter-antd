// Listen for messages from the popup
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if (request.message === "scrape_data") {
        // Your scraping logic here
        const data = {
          // Scrape data from the webpage
        };
  
        // Send the scraped data back to the popup
        chrome.runtime.sendMessage({ message: "scraped_data", data });
      }
    }
  );