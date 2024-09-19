
export default function TextFirst({title, iceCreamImage, paragraph,productImage}){
    return (
<>
<section className="container-fluid px-0">
    <div className="row align-items-center content">
      <div className="col-md-6 text-center">
        <div className="row justify-content-center">
          <div className="col-10 col-lg-8 mb-5 mb-md-0">
            <h2 className="text-center pt-5">{title}</h2>
            <img id="icon" className="img-fluid text-center my-3" src={iceCreamImage} alt="ice-cream" />
            <p className="lead">
              {/* The all-new Punchie Peach delivers a smooth and vibrant peach
              flavor. Cool down with this creamy, fruity delight and savor a
              taste of summer. */}
              {paragraph}
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div>
          <img id="anImage1" className="img-fluid" src={productImage} alt="punchie" />
        </div>
      </div>
    </div>
  </section>
</>

    )
}