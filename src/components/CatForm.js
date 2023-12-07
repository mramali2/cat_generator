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
            <h3>Find your furry feline friend!</h3>
            <label htmlFor="catTag">Choose your favourite cat:</label>
            <select 
                id="catTag"
                defaultValue="select-tag"
            >
                <option disabled value="select-tag">Select an option</option>
                {tagOptions}
            </select>

            <input type="submit" value="Adopt now!" />

        
        </form>
     );
}
 
export default CatForm