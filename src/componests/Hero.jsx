import AntMan from "../assets/images/superhero/antman.jpg";
import Batman from "../assets/images/superhero/batman.jpg";
import Spiderman from "../assets/images/superhero/spiderman-cover.jpg";
import Superman from "../assets/images/superhero/superman.jpg";
import Robinhood from "../assets/images/superhero/robinhood.jpg";
import Avengers from "../assets/images/superhero/avenger.jpg";





function Trending() {
  return (
    <div className="conatiner-fluid hero" id="Superhero">
      <div className="container text-light  ">
        <h1>SuperDEDE</h1>
        <div className="row ">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={AntMan} class="card-img-top" alt="..." />
              <div class="card-body" >
                <h5 class="card-title text-light">AntMan</h5>
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
              <img src={Avengers} class="card-img-top" alt="..." />
              <div class="card-body" >
                <h5 class="card-title text-light">Avengers</h5>
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
              <img src={Batman} class="card-img-top" alt="..." />
              <div class="card-body" >
                <h5 class="card-title text-light">Batman</h5>
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
        </div> <br />
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12 ">
            <div class="card" style={{ width: "18rem;" }}>
              <img src={Robinhood} class="card-img-top" alt="..." />
              <div class="card-body" >
                <h5 class="card-title text-light">Robinhood</h5>
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
              <img src={Spiderman} class="card-img-top" alt="..." />
              <div class="card-body" >
                <h5 class="card-title text-light">Spiderman</h5>
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
              <img src={Superman} class="card-img-top" alt="..." />
              <div class="card-body" >
                <h5 class="card-titl text-light">Superman</h5>
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
