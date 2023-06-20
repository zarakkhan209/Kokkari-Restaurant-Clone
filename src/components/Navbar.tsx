import logoimg from "../uploads/kindpng.png";
const Navbar = () => {
  return (
    <div className="container bd-color nav-height pt-3">
      <nav className="navbar navbar-expand-lg bg-body-tertiary bd-color p-0">
        <div className="container-fluid bd-color">
          <a className="navbar-brand" href="/">
            <figure>
              <img src={logoimg} className="img-fluid" alt="Kookari" />
            </figure>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-end bd-color"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/cuisins"
                >
                  CUISINS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="menus">
                  MENUS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/reservations"
                >
                  RESERVATIONS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/dining"
                >
                  PRIVATE DINING
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
