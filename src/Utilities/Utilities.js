import { toast } from "react-toastify";

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

const removeFromStoreDB = (id) => {
    const storedBookData = getStoredId();

    if (!storedBookData.includes(id)) {
        toast("id not found");
        return;
    }

    const updatedData = storedBookData.filter(storedId => storedId !== id);
    localStorage.setItem("Installed", JSON.stringify(updatedData));
};
const addToStoreDB = (id) =>{
    const storedBookData = getStoredId();

    if(storedBookData.includes(id))
    {
        toast("Already Installed")
    }
    else{
        storedBookData.push(id);
        const data = JSON.stringify(storedBookData)
        localStorage.setItem("Installed",data)
    }
}

export {addToStoreDB,getStoredId ,removeFromStoreDB}