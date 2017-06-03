chrome.runtime.sendMessage(
  document.body.getElementsByTagName("pre")[0].innerText,
  function(json){
    document.write("<pre>" + json + "</pre>");
  }
);
