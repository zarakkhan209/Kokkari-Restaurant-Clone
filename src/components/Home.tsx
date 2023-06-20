import home_img from "../uploads/home_img.jpg";

const Home = () => {
  return (
    <>
      <div className="bd-color">
        <div className="container">
          <hr />
          <hr />
        </div>
        <div className="pt-4">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h1>OPEN FOR INDOOR DINING</h1>
                <div className="desc">
                  <h5 className="text-uppercase pt-3 mb-5">
                    please call{" "}
                    <span className="home_desc_col"> 415.981.0983 </span> for
                    reservations <br />
                    or online through{" "}
                    <span className="home_desc_col">opentable </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div className="">
            <div className="row">
              <div className="col-12 text-center">
                <figure>
                  <img src={home_img} alt="Dinners" className="home_img" />
                </figure>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 text-center">
                <h4 className="py-4">
                  PLEASE SEE OUR PUBLISHED <br />
                  <span className="home_desc_col">
                    HEALTH AND SAFETY PROTOCOLS
                  </span>{" "}
                  <br />
                  AND BE AWARE OF LOCAL GUIDELINES <br />
                  RELATED TO INDOOR DINING AT RESTAURANTS. <br />
                  KALI OREXI!
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
