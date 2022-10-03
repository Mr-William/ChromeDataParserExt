const storageCache = {};

const initStorageCache = getAllStorageSyncData().then(items => {
  Object.assign(storageCache,items);
});

chrome.action.onClicked.addListener(async (tab) =>{
  try{
    await initStorageCache;
    console.log('Success in intiStorageCahce');
  } catch (e){
    alert(e);
  }
});

function getAllStorageSyncData() {
  return new Promise((resolve, reject) => {
    chrome.storage.sync.get(null, (items) => {
      if(chrome.runtime.lastError){
        return reject(chrome.runtime.lastError);
      }
      resolve(items);
    });
  });
}
