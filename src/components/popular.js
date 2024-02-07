import two from '../images/p-1.jpg'
import three from '../images/p-1.jpg'
import four from '../images/p-1.jpg'
import five from '../images/p-1.jpg'

function Popular() {
    return (
        <div className="popular">
            <div className="popular__title">most popular</div>
            <div className="popular__subtitle">pick the best fit</div>
            <div className="popular__container">
                <div className="course-card">
                    <img src={two} alt="no" />
                    <h3>2023 python programming language</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
                <div className="course-card">
                    <img src={three} alt="no" />
                    <h3>2023 web developement bootcamp</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>999 <del>1399</del></p>
                </div>
                <div className="course-card">
                    <img src={four} alt="no" />
                    <h3>2023 basic to advance programming with emc</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>1299 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={five} alt="no" />
                    <h3>2023 artifical intelligence</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>449 <del>2399</del></p>
                </div>
                <div className="course-card">
                    <img src={four} alt="no" />
                    <h3>2023 basic to advance programming with emc</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>1299 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={four} alt="no" />
                    <h3>2023 basic to advance programming with emc</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>1299 <del>1999</del></p>
                </div>
                <div className="course-card">
                    <img src={three} alt="no" />
                    <h3>2023 web developement bootcamp</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>999 <del>1399</del></p>
                </div>
                <div className="course-card">
                    <img src={five} alt="no" />
                    <h3>2023 artifical intelligence</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>449 <del>2399</del></p>
                </div>
                <div className="course-card">
                    <img src={three} alt="no" />
                    <h3>2023 web developement bootcamp</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐⭐</p>
                    <p>999 <del>1399</del></p>
                </div>
                <div className="course-card">
                    <img src={two} alt="no" />
                    <h3>2023 python programming language</h3>
                    <p>col steele</p>
                    <p>4.9 ⭐⭐⭐</p>
                    <p>449 <del>999</del></p>
                </div>
            </div>
        </div>

    )
}
export default Popular