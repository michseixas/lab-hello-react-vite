import './Icons.css';
import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";

function Icons() {
    return(
    <div className="icons">
        
        <div className="icon"><img src={icon1} alt="icon1" /> <br/> 
        <h2>Declarative</h2>
        <p>React makes it painless to create interactive UIs.</p>
        </div>
        <div className="icon"><img src={icon2} alt="icon2" /> <br/>
        <h2>Components</h2>
        <p>Build encapsulated components that manage their state.</p>
        </div>
        <div className="icon"><img src={icon3} alt="icon3" /> <br/>
        <h2>Single-Way</h2>
        <p>A set of inmutable values are passed to the component's.</p>
        </div>
        <div className="icon"><img src={icon4} alt="icon4" /> <br/>
        <h2>JSX</h2>
        <p>Statically-typed, designed to run on modern browsers.</p>
        </div>
    </div>);
}

export default Icons;