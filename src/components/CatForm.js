const CatForm = ({catTag}) => {

    const tagOptions = catTag.map((tag, index) => 
        <option key={index} value={tag}> {tag} </option>
    )
    console.log(tagOptions);

    return ( <>
        <h2>Click here for your cat!</h2>
        </>
     );
}
 
export default CatForm