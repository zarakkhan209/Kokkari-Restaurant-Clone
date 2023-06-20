import dining1 from "../uploads/dining1.jpg";
import dining2 from "../uploads/dining2.jpg";
import dining3 from "../uploads/dining3.jpg";
const PrivateDining = () => {
  return (
    <div>
      <div className="container">
        <div className="container-fluid">
          <div className="container p-5">
            <div className="row">
              <div className="col-12 py-5">
                <h1>Private Dining and Special Events</h1>
              </div>
            </div>
            <div className="row">
              <div className="row">
                <div className="col-12">
                  <h2>Chef’s Table</h2>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="container-fluid">
                  <hr />
                  <hr />
                </div>
                <br />
                <br />
                <p>
                  The focal point of the Kouzina is the Chef’s Table. It is a
                  beautiful 20 foot long hand-carved wooden table that can
                  accommodate up to 20 people. This space is ideal for
                  celebrations, special family events and casual business
                  functions that do not require a completely private space.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <figure className="py-4">
                  <img src={dining1} alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>

          <div className="container p-5">
            <div className="row"></div>
            <div className="row">
              <div className="row">
                <div className="col-12">
                  <h2>OENOS ROOM</h2>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="container-fluid">
                  <hr />
                  <hr />
                </div>
                <br />
                <br />
                <p>
                  Adjacent to the Kouzina is the Oenos or “wine” room. This is
                  one of Kokkari’s two private dining rooms. This room features
                  large windows that look out on to Jackson Street and a
                  dramatic wall of wine racks that spans floor to ceiling. The
                  large, wood-framed, sliding glass doors that separate the
                  Oenos Room from the main dining area allow guests to feel part
                  of the restaurant while still being in a private space. This
                  room can accommodate 30 people.
                </p>
              </div>
              <div className="col-12 col-md-6">
                <figure className="py-4">
                  <img src={dining2} alt="" className="img-fluid" />
                </figure>
              </div>
            </div>
          </div>
        </div>

        <div className="container p-5">
          <div className="row"></div>
          <div className="row">
            <div className="row">
              <div className="col-12">
                <h2>HANIA</h2>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="container-fluid">
                <hr />
                <hr />
              </div>
              <br />
              <br />
              <p>
                This unique private dining room is located downstairs and is
                completely separate from the main dining area. The room has the
                feel of a wine cellar with warm wood accents and rich, tapestry
                carpets. It features a rectangular polished wood table that
                accommodates up to 10 people comfortably. The Hania Room is
                ideal for small business meetings and intimate family functions.
              </p>
            </div>
            <div className="col-12 col-md-6">
              <figure className="py-4">
                <img src={dining3} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivateDining;
