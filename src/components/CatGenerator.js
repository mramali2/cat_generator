const CatGenerator = ({tag}) => {

    return ( 
        <>
        <h2>Loading cat...</h2>

        <img src="https://cataas.com/cat/cute" alt="A cat"/>
        <p>{tag}</p>
        </>
     );
}
 
export default CatGenerator;