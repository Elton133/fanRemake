import iceCream from "./images/ice-cream.png";
import videoFile from "./images/logo5.mp4";

export default function FirstCover(){
    return(
        <>
        <section className="container-fluid pt-2 ">
    <div className="row align-items-center content">
      <div className="col-lg-6">
        <div id="heading" className="container text-white text-center d-none d-lg-block">
          <h1>FanYogo</h1>
          <h2>So cool, so goodddd</h2>
          
          <img id="icon" className="img-fluid text-center my-3" src={iceCream} alt="ice-cream" />
        </div>
      </div>
      <div className="col-lg-6">
        <video id="logoImage"height="600" width="600" autoPlay loop muted>
            <source src={videoFile} type="video/mp4" />
        </video>
      </div>
    </div>
  </section>
        </>
    )
}