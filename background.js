function update_button(tabid, changeInfo, tab)
{
  console.log(tab.url);
  if(tab.url.indexOf("json") != -1)
  {
    chrome.pageAction.show(tabid);
  }
}

chrome.tabs.onUpdated.addListener(update_button)

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse){
    json = JSON.parse(request);
    json = JSON.stringify(json, null, "     ");
    sendResponse(json);
  }
);
