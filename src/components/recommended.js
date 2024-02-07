import two from '../images/p-1.jpg'
import three from '../images/p-2.jpg'
import four from '../images/p-3.jpg'
import five from '../images/p-4.jpg'

function Recommend(){
    return(
<div className="recommended">
        <div  className="recommended__title">
            <h2> recommended for you</h2>
            <p>pick the best fit</p>
            <div  className="recommended__container">
                <div  className="course-card">
                    <img src={two} alt="no"/>
                    <h3>2023 python programming language</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div  className="course-card">
                    <img src={three} alt="no"/>
                    <h3>2023 web developement bootcamp</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>999 <del>1399</del></p>
                </div>
                <div  className="course-card">
                    <img src={four} alt="no"/>
                    <h3>2023 basic to advance programming with emc</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>1299 <del>1999</del></p>
                </div>
                <div  className="course-card">
                    <img src={five} alt="no"/>
                    <h3>2023 artifical intelligence</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>449 <del>2399</del></p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Recommend