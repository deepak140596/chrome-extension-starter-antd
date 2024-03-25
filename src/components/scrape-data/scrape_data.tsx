import { useEffect } from 'react';
import { useChromeStorageLocalGet, useChromeStorageLocalSet } from '../../api/storage/local-storage-hook';
import { StorageKeys } from '../../api/storage/keys';

 export default function ScrapeData() {
    const useSetLocalData = useChromeStorageLocalSet(StorageKeys.SAMPLE_KEY);

    const scrapeData = () => {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            const activeTab = tabs[0];
            if (activeTab) {
                chrome.tabs.sendMessage(activeTab?.id!, { action: "scrape" }, (response) => {
                    if (response && response.success) {
                    const x = JSON.parse(response.data);
                    const _data = { ...x["field1"], ...x["field3"], ...x["field4"], ...x["field5"] , ...x["field6"], ...x["field7"] }
                    console.log('Response:', _data);
                    useSetLocalData(_data);
                    } else {
                      console.error('Failed to scrape data.', response);
                    }
                });
            }
        })
    };

    useEffect(() => {
        const fetchData = async () => {
            scrapeData(); 
            const interval = setInterval(() => {
                scrapeData();
            }, 4000);
            return () => {
                clearInterval(interval);
            };
        };

        fetchData();
    }, [useSetLocalData]);

    return null;
};

