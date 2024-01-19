
  
  
  
const Footer = (props) => {
  const { image1, image2, image3, image4, image5 } = props;

  return (
    <div className="container-fluid fixed-bottom bg-dark ms-5" style={{ position: 'fixed', zIndex: 1000 }}>
      <div className="row justify-content-center align-items-center ms-5">
        <a href="#" className="col-auto m-3">
          <img src={image3} alt="play3" />
        </a>
        <a href="#" className="col-auto ms-5">
          <img src={image2} alt="play2" />
        </a>
        <a href="#" className="col-auto ms-5">
          <img src={image1} alt="play1" />
        </a>
        <a href="#" className="col-auto ms-5">
          <img src={image4} alt="play4" />
        </a>
        <a href="#" className="col-auto ms-5">
          <img src={image5} alt="play5" />
        </a>
      </div>
      <div className="row justify-content-center playBar py-3">
        <div className="col-8 col-md-6">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;