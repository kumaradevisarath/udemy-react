import one from '../images/one.jpg'

function Categories() {
    return (
        <div>
            <div className="categories">
                <p>developement</p>
                <p>business</p>
                <p>IT & softaware</p>
                <p>peronal developement</p>
                <p>design</p>
                <p>marketing</p>
            </div>
            <div className="sale-img">
                <img src={one} alt="no"/>
                <div className="sale-img__offer">
                    <h2>Udemy flash sale! 24 hours to save</h2>
                    <p>Get the top courses for just rs 499.just bone day to save but a lifetime to learn.</p>
                </div>
            </div>
        </div>
    )
}
export default Categories