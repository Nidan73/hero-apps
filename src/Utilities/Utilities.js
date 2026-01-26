const getStoredId = () =>
{
    const storeStr = localStorage.getItem("Installed");
    
    if(storeStr) {
        const storedBookData = JSON.parse(storeStr);
        return storedBookData;
    }
    else
    {
        return [];
    }
}

const addToStoreDB = (id) =>{
    const storedBookData = getStoredId();

    if(storedBookData.includes(id))
    {
        alert("id is already here")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("Installed",data)
    }
}

export {addToStoreDB,getStoredId}