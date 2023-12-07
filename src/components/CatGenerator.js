const CatGenerator = ({tag}) => {

    return ( 
        <>
        <img src={`https://cataas.com/cat/${tag}/says/Adopt%20Me?fontSize=50&fontColor=yellow`} alt="A cat"/>
        <p>{`This ${tag} cat loves ${tag} walks and ${tag} treats!`}</p>
        </>
     );
}
 
export default CatGenerator;