import iceCream from "./images/ice-cream.png";
import logo2 from "./images/logo2.jpg";

export default function FirstCover(){
    return(
        <>
        <section className="container-fluid px-0">
    <div className="row align-items-center content">
      <div className="col-lg-6">
        <div id="heading" className="container text-white text-center d-none d-lg-block">
          <h1>FanYogo</h1>
          <h2>So cool, so goodddd</h2>
          <img id="icon" className="img-fluid text-center my-3" src={iceCream} alt="ice-cream" />
        </div>
      </div>
      <div className="col-lg-6">
        <img className="img-fluid" src={logo2} alt="glovedhand" />
      </div>
    </div>
  </section>
        </>
    )
}