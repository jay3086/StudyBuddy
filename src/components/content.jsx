import "../styleComponents/content.css";
import Pic from "../mybg.png"
import Footer from "./footer";
import Navbarr from "./navbar"
import Button from "./button";

const Content = () => {
    return (
      <>
        {/* <Navbarr /> */}
        <div className="container">
          <div className="text-content">
            <div className="main-text">
              <h1>Welcome to </h1>
              <h1> The Study Buddy</h1>
            </div>
            <p>
              A place where you can solve all of your study related queries,  have an access to prebuilt
              assignment, journals made by scholers.  Hangout with new friends and much more!
            </p>
            <button className="btn">get started</button>
          </div>
          <div className="image-content">
          <img className="img" src={Pic} alt="img" />
          </div>
        </div>
        
        {/* <Footer className="fixed-bottom" /> */}
      </>
    );
}

export default Content;