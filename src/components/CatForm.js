const CatForm = ({catTag}) => {

    const tagOptions = catTag.map((tag, index) => 
        <option key={index} value={tag}> {tag} </option>
    )
    console.log(tagOptions);

    return ( 
        <form id="cat-form" >
            <h3>Select type of cat</h3>
            <label htmlFor="catTag">Choose Tag:</label>
            <select 
                id="catTag"
                name="tag"
                defaultValue="select-tag"
            >
                <option disabled value="select-tag">Choose a tag</option>
                {tagOptions}
            </select>
        </form>
     );
}
 
export default CatForm