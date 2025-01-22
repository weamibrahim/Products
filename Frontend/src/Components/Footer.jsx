import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Font Awesome import

function Footer() {
  return (
    <div>
      <footer className="bg-body-tertiary text-center">
        <div className="container">
          <section className="mb-4">
            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating mx-2 mt-3"
              style={{ backgroundColor: "#3b5998" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-facebook-f"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating mx-2 mt-3"
              style={{ backgroundColor: "#55acee" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-twitter"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating mx-2 mt-3"
              style={{ backgroundColor: "#dd4b39" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-google"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating mx-2 mt-3"
              style={{ backgroundColor: "#ac2bac" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-instagram"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating mx-2 mt-3"
              style={{ backgroundColor: "#0082ca" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>

            <a
              data-mdb-ripple-init
              className="btn text-white btn-floating mx-2 mt-3"
              style={{ backgroundColor: "#333333" }}
              href="#!"
              role="button"
            >
              <i className="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div className="text-center p-3" style={{ backgroundColor: "rgba(0,0,0, 0.5)" }}>
          © 2024 Copyright:
        </div>
      </footer>
    </div>
  );
}

export default Footer;
