class StorageService{

    static getURL = () =>{
        return toPromise((resolve, reject) =>{
            chrome.storage.local.get(['sheetsURL'],(result) =>{
                if(chrome.runtime.lastError)
                    reject(chrome.runtime.lastError);
                const researches = result.sheetsURL ?? [];
                resolve(researches);
            });
        });
    }

    static saveURL = async (title, url) => {
        const sheetsURL = await this.getURL();
        const updatedURL = [...sheetsURL, { title, url }];

        return toPromise((resolve, reject) => {
            
            chrome.storage.local.set({ ['sheetsURL']: updatedURL}, () =>{
                if(chrome.runtime.lastError)
                    reject(chrome.runtime.lastError);
                resolve(updatedURL);
            });
        });
    }

    
}