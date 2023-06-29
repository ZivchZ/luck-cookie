
const UserLucky = ( props ) => {
    const {data} = props
    return(
        <header>
            <img src="./assets" alt="" className="image"/>
        <div className="first-div">
            <h1 className="lucky-title">GALLETAS DE LA FORTUNA</h1>
            <div className="lucky-text">
            <p>{data.phrase}</p>
            <h2 className="lucky-author"><em>{data.author}</em></h2>
            </div>
            
        </div>
        </header>
    )

}
export default UserLucky