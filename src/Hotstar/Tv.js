import React from "react";
import "./Tv.css";
import QUEENS from "../AssetsPic/Latest Releases/Queens.jpg";
import VAALIBAN from "../AssetsPic/Latest Releases/Vaaliban.jpg";
import SHOWTIME from "../AssetsPic/Latest Releases/Show Time.jpg";
import TRACKER from "../AssetsPic/Latest Releases/Tracker.jpg";
import MAA from "../AssetsPic/Latest Releases/Maa.jpg";
import SALAAR from "../AssetsPic/Latest Releases/Sallar2.jpg";
import EDTECHSTORY from "../AssetsPic/Latest Releases/Edtech Story.jpg";

function Tv() {
  return (
    <div>
      <div id="carouselExampleIndicators1" class="carousel slide cardimg">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="0"
            class="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators1"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <h4 className="cardtext"> Latest Releases </h4>
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={SALAAR}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={VAALIBAN}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={SHOWTIME}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={TRACKER}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-top letestrelease" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col">
                <div class="card cardbox">
                  <img src={EDTECHSTORY} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="col">
                <div class="card cardbox">
                  <img src={TRACKER} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={QUEENS} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={VAALIBAN} class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={QUEENS}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={VAALIBAN}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-topletestrelease" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={TRACKER}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={QUEENS}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev cardbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators1"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next cardbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators1"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* ---------- * Section 3 * ---------- */}

      <div id="carouselExampleIndicators2" class="carousel slide cardimg">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="0"
            class="active "
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators2"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <h4 className="cardtext"> Latest Releases </h4>
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={SALAAR}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={VAALIBAN}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={SHOWTIME}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={TRACKER}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-top letestrelease" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col">
                <div class="card cardbox">
                  <img src={EDTECHSTORY} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="col">
                <div class="card cardbox">
                  <img src={TRACKER} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={QUEENS} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={VAALIBAN} class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={QUEENS}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={VAALIBAN}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-topletestrelease" alt="..." />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={TRACKER}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col">
                <div class="card cardbox">
                  <img
                    src={QUEENS}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev cardbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next cardbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators2"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Tv;
