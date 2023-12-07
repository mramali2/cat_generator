import { useState, useEffect } from "react";
import CatGenerator from "../components/CatGenerator";
import CatForm from "../components/CatForm";
const CatContainer = () => {

    const [catTag, setCatTag] = useState([]);

    const loadingCatPic = async () => {
        const response = await fetch("https://cataas.com/api/tags");
        const data = await response.json();
        setCatTag(data);
    }

    useEffect( () => {
        loadingCatPic();
    }, []);


    return ( <>
        <h1>Cat Adoption Website</h1>
        <CatGenerator tag="cute"/>
        <CatForm catTag={catTag}/>

        </>
   

     );
}
 
export default CatContainer;