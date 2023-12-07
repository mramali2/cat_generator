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
        const loadCatImage = async () => {


            if (tag){

            const response = await fetch(`https://cataas.com/cat/${tag}`);
            const data = await response.json();
            console.log("Response:", data);
            // setUrl(data)
            
            }
        }
        loadCatImage();

    }, [tag])

  
    return ( <>
        <h1>Cat Adoption Website</h1>
        {tag ? <CatGenerator tag={url}/>: <CatGenerator tag="https://cataas.com/cat"/>}
        <CatForm availableTags={catTags} setUrl={setUrl} setTag={setTag}/>
        console.log(url);
        
        </>

     );
}
 
export default CatContainer;