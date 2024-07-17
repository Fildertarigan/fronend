import Dune from "../assets/images/trending/dune.jpg";
import Joker from "../assets/images/trending/joker.jpg";
import Morbius from "../assets/images/trending/morbius.jpg";
import Everything from "../assets/images/trending/everything.jpg";
import Infinite from "../assets/images/trending/infinite.jpg";
import Lightyear from "../assets/images/trending/lightyear.jpg";
function Trending() {
  return (
    <div className="conatiner-fluid trending"id="Trending">
      <div className="container text-light  ">
        <h1>Trending</h1>
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={Dune} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-light">Dune</h5>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={Joker} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-light">Joker</h5>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={Morbius} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-light">Morbius</h5>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>{" "}
        <br />
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" style={{ height: "200px;" }}>
              <img
                src={Everything}
                class="card-img-top"
                style={{ hight: "540px" }}
              />
              <div class="card-body">
                <h5 class="card-title text-light">Everthing</h5>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card">
              <img
                src={Infinite}
                class="card-img-top"
                style={{ hight: "5400px" }}
              />
              <div class="card-body">
                <h5 class="card-title text-light">Infinite</h5>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" z>
              <img src={Lightyear} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title text-light">Lightyear</h5>
                <p class="card-text text-light">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trending;
