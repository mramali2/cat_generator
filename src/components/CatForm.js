import {useState} from "react"
const CatForm = ({availableTags, setUrl, setTag}) => {



    const tagOptions = availableTags.map((tag, index) => 
        <option key={index} value={tag}> {tag} </option>
    )
    console.log(tagOptions);

  

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const tag = event.target["catTag"].value
        setTag(tag)
        // setUrl(`https://cataas.com/cat/${tag}`);
        event.target.reset();
        
    }


    return ( 
        <form id="cat-form" onSubmit={handleFormSubmit}>
            <h3>Select type of cat</h3>
            <label htmlFor="catTag">Choose Tag:</label>
            <select 
                id="catTag"
                defaultValue="select-tag"
            >
                <option disabled value="select-tag">Choose a tag</option>
                {tagOptions}
            </select>

            <input type="submit" value="Submit cat to adopt" />

        
        </form>
     );
}
 
export default CatForm