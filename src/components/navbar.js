function Navbar(){
    return(
        <div className="nav">
        <div className="nav__sec1">
            <div className="nav__sec1__title">udemy</div>
        </div>
        <div className="nav__sec2">

            <i className="fa-solid fa-magnifying-glass"></i>

            <input type="text" placeholder="search for anything here.tech,business,art..."/>
        </div>
        <div className="nav__sec3">
            <p>trending courses</p>
            <div className="mylearning">
                my learning
                <div className="mylearning__popup">
                    you did not purchase anything yet
                </div>
            </div>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-sharp fa-solid fa-bell"></i>
            <i className="fa-solid fa-user"></i>

        </div>
        <div className="bars">
            <i className="fa-solid fa-bars"></i>
        </div>


    </div>
    )
}
export default Navbar