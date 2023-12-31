import { useState, useEffect } from "react";
import CatGenerator from "../components/CatGenerator";
import CatForm from "../components/CatForm";
const CatContainer = () => {

    const [catTags, setCatTags] = useState([]);
    const [url, setUrl] = useState("https://cataas.com/cat");

    const [tag, setTag] = useState("");


    useEffect( () => {
        const loadingCatTags = async () => {
            const response = await fetch("https://cataas.com/api/tags");
            const data = await response.json();
            setCatTags(data);
        }

        loadingCatTags();
    }, []);

    useEffect(() => {
        let updatedTag = tag;
        setTag(updatedTag)

    }, [tag]);
  
    return ( <>
        <h1>PurrFectAdoptions 🐾</h1>
        {tag ? <CatGenerator tag={tag}/>: <CatGenerator tag="cute"/>}
        <CatForm availableTags={catTags} setTag={setTag}/>
    
        
        </>

     );
}
 
export default CatContainer;