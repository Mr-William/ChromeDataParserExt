// background.js
const storageCache = {};
const initStorageCache = getAllStorageSyncData().then(items=>{
  Object.assign(storageCache,items);
});
   
chrome.action.onClicked.addListener(function() {

  chrome.dialoge.create({url: 'popup.html'});
});