//localstorage
//it can save upto 10mb and save for lifetime as it has no expiration date
//it can manually be deleted by localstorage.removeItem()

//sessionstorage
//it can hardly save upto 5mb and it can save data on reloading
//it will loose data if we cut or close the webpage

// localStorage.setItem("key","value")
// localStorage.getItem("key")
// localStorage.clear(); it will clean the whole localstorage
//localStorage.removeItem("key"); it cleans only the selected key
//These are the methods to use localstorage

//localstorage stores only strings so when we add data in lclstrg 
//if it's Object we do JSON.stringify before doing setItem
