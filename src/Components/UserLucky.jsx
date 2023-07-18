
const UserLucky = ({data, button}) => {
    

    return(
        <>
            <h1>GALLETAS DE LA FORTUNA</h1>

            <div className="lucky-main">
            <p>{data.phrase}</p>
            <h2><em>{data.author}</em></h2>
            </div>

            <button onClick={button}>Ver otro</button>
        </>
    )

}
export default UserLucky