const CatGenerator = ({tag}) => {

    return ( 
        <>
        <h2>Loading cat...</h2>

        <img src={tag} alt="A cat"/>
        <p>{tag}</p>
        </>
     );
}
 
export default CatGenerator;