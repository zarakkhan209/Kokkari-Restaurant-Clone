import reservation1 from "../uploads/reservation1.jpg";
const Reservations = () => {
  return (
    <div>
      <div className="container">
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="row">
                <div className="col-12">
                  <h2>Reservations</h2>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="container-fluid py-4">
                  <hr />
                  <hr />
                </div>
                <br />
                <br />
                <p>
                  Reservations KOKKARI ESTIATORIO accepts reservations up to two
                  months in advance to the calendar date.
                  <br />
                  <br />
                  To reserve a table, please call 415.981.0983.
                  <br />
                  Online reservations are 30 days in advance only. Make an
                  online reservation through OpenTable
                  <br />
                  <br />
                  We do not take reservations via email.
                  <br />
                  <h3>Hours of Operation</h3> <br />
                  <b>Lunch</b> <br />
                  Mon-Fri 11:30am to 2:30pm <br />
                  <br />
                  <b>Dinner</b>
                  Mon-Thu 5:00pm – 10:00pm <br />
                  Fri 5:00pm – 11:00pm <br />
                  Sat 5:00pm – 11:00pm <br />
                  Sun 5:00pm – 10:00pm <br />
                  <b>Corkage</b>
                  $30 per 750ml bottle for up to 2 bottles, $50 per additional
                  bottle
                </p>
              </div>
              <div className="col-12 col-md-6">
                <figure className="py-4">
                  <img src={reservation1} alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
            <div className="map">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lahore+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="450"
                loading="lazy"
              ></iframe>

              <br />
              <div className="map_loc text-center py-4">
                <h2 className="py-3 text-uppercase">Directions</h2>
                <h5>Click here for mobile map</h5>
              </div>
            </div>
            <br />
            <hr />
            <hr />
            <div className="map_details">
              <div className="row">
                <div className="col-12">
                  <h2>From North Bay:</h2>
                  <ul>
                    <li> Take US-101 South towards San Francisco</li>
                    <li>Go across the Golden Gate Bridge</li>
                    <li>
                      Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.
                    </li>
                    <li>Stay on LOMBARD ST. until VAN NESS AVE</li>
                    <li>Turn RIGHT on VAN NESS AVE.</li>
                    <li>Turn LEFT on BROADWAY ST.</li>
                    <li>Take BROADWAY thru the BROADWAY TUNNEL.</li>
                    <li>
                      Proceed thru the major intersection of COLUMBUS and
                      BROADWAY.
                    </li>
                    <li>Turn RIGHT on BATTERY ST.</li>
                    <li>Turn LEFT on JACKSON ST.</li>
                    <li>KOKKARI is at the corner of JACKSON ST. & FRONT S</li>
                  </ul>
                </div>
                <div className="col-12">
                  <h2>From East Bay:</h2>
                  <ul>
                    <li> Go Westbound on the BAY BRIDGE (I-80)</li>
                    <li>Take the FREMONT ST. exit.</li>
                    <li>
                      At the bottom of the exit ramp turn LEFT on FREMONT ST.
                    </li>
                    <li>Go ACROSS Market St.</li>
                    <li>Turn LEFT on PINE ST.</li>
                    <li>Turn RIGHT on SANSOME ST.</li>
                    <li>Turn RIGHT on JACKSON</li>
                    <li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li>
                  </ul>
                </div>
                <div className="col-12">
                  <h2>From South Bay:</h2>
                  <ul>
                    <li> Go Westbound on the BAY BRIDGE (I-80)</li>
                    <li>Take the FREMONT ST. exit.</li>
                    <li>
                      At the bottom of the exit ramp turn LEFT on FREMONT ST.
                    </li>
                    <li>Go ACROSS Market St.</li>
                    <li>Turn LEFT on PINE ST.</li>
                    <li>Turn RIGHT on SANSOME ST.</li>
                    <li>Turn RIGHT on JACKSON</li>
                    <li>KOKKARI is at the corner of JACKSON ST. & FRONT ST.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
