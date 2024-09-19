

export default function ImageFirst({title, paragraph, iceCreamImage, productImage}){
    return(
        <section className="container-fluid px-0">
    <div className="row align-items-center content">
      <div className="col-md-6 order-2 order-md-1">
        <div>
          <img id="anImage"className="img-fluid" src={productImage} alt="fanyogo" />
        </div>
      </div>
      <div className="col-md-6 text-center order-1 order-md-2">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 mb-5 mb-md-0">
            <h2 className="text-center pt-5">{title}</h2>
            <img id="icon" className="img-fluid text-center my-3" src={iceCreamImage} alt="ice-cream" />
            <p className="lead">
              {paragraph}
            </p>
        </div>
      </div>
    </div>
    </div>
  </section>
    )
}