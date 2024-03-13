import React from "react";
import "./Home.css";

import SLIDER1 from "../AssetsPic/Main Slider/Salaar.jpg";
import SLIDER2 from "../AssetsPic/Main Slider/Brahmastra.webp";
import SLIDER3 from "../AssetsPic/Main Slider/Liger.webp";

// import QUEENS from "../AssetsPic/Latest Releases/Queens.jpg";
import VAALIBAN from "../AssetsPic/Latest Releases/Vaaliban.jpg";
import SHOWTIME from "../AssetsPic/Latest Releases/Show Time.jpg";
import TRACKER from "../AssetsPic/Latest Releases/Tracker.jpg";
import MAA from "../AssetsPic/Latest Releases/Maa.jpg";
import SALAAR from "../AssetsPic/Latest Releases/Sallar2.jpg";
import EDTECHSTORY from "../AssetsPic/Latest Releases/Edtech Story.jpg";
import SUNCOAST from "../AssetsPic/Latest Releases/Suncoast.jpg";
import STORYOFUS from "../AssetsPic/Latest Releases/Story of us.jpg";
import RIDEON from "../AssetsPic/Latest Releases/Ride On.jpg";
import UNDERGROUND from "../AssetsPic/Latest Releases/Underground Marvel.jpg";
import BIGBOSS from "../AssetsPic/Latest Releases/Big Boss.jpg";
import BADBATCH from "../AssetsPic/Latest Releases/Bad Batch.jpg";
import CREATOR from "../AssetsPic/Latest Releases/Creator.jpg";
import HIDEO from "../AssetsPic/Latest Releases/Hideo Kojima.jpg";
import POORTHINGS from "../AssetsPic/Latest Releases/Poor Things.jpg";
import OSCARS from "../AssetsPic/Latest Releases/Oscars.jpg";

import ADD1 from "../AssetsPic/Newly Added/Newly Added1.jpg";
import ADD2 from "../AssetsPic/Newly Added/Newly Added2.jpg";
import ADD3 from "../AssetsPic/Newly Added/Newly Added3.jpg";
import ADD4 from "../AssetsPic/Newly Added/Newly Added4.jpg";
import ADD5 from "../AssetsPic/Newly Added/Newly Added5.jpg";
import ADD6 from "../AssetsPic/Newly Added/Newly Added6.jpg";
import ADD7 from "../AssetsPic/Newly Added/Newly Added7.jpg";
import ADD8 from "../AssetsPic/Newly Added/Newly Added8.jpg";
import ADD9 from "../AssetsPic/Newly Added/Newly Added9.jpg";
import ADD10 from "../AssetsPic/Newly Added/Newly Added10.jpg";
import ADD11 from "../AssetsPic/Newly Added/Newly Added11.jpg";
import ADD12 from "../AssetsPic/Newly Added/Newly Added12.jpg";
import ADD13 from "../AssetsPic/Newly Added/Newly Added13.jpg";
import ADD14 from "../AssetsPic/Newly Added/Newly Added14.jpg";

import POPULAR1 from "../AssetsPic/Popular Shows/Popular Shows1.jpg";
import POPULAR2 from "../AssetsPic/Popular Shows/Popular Shows2.jpg";
import POPULAR3 from "../AssetsPic/Popular Shows/Popular Shows3.jpg";
import POPULAR4 from "../AssetsPic/Popular Shows/Popular Shows4.webp";
import POPULAR5 from "../AssetsPic/Popular Shows/Popular Shows5.jpg";
import POPULAR6 from "../AssetsPic/Popular Shows/Popular Shows6.jpg";
import POPULAR7 from "../AssetsPic/Popular Shows/Popular Shows7.jpg";
import POPULAR8 from "../AssetsPic/Popular Shows/Popular Shows8.jpg";
import POPULAR9 from "../AssetsPic/Popular Shows/Popular Shows9.jpg";
import POPULAR10 from "../AssetsPic/Popular Shows/Popular Shows10.webp";
import POPULAR11 from "../AssetsPic/Popular Shows/Popular Shows11.jpg";
import POPULAR12 from "../AssetsPic/Popular Shows/Popular Shows12.jpg";
import POPULAR13 from "../AssetsPic/Popular Shows/Popular Shows13.webp";
import POPULAR14 from "../AssetsPic/Popular Shows/Popular Shows14.jpg";
import POPULAR15 from "../AssetsPic/Popular Shows/Popular Shows15.jpg";

function Home() {
  return (
    <div>
      {/* ---------- * Section 1 * ---------- */}

      <div
        id="myCarousel"
        class="carousel slide mb-6 div1 container-fluid  hotstrsldr"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class=""
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            class=""
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
            class="active"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item">
            <svg
              class="placeholder-img"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></svg>
            <div class="container hotstrsldr">
              <img src={SLIDER1} className="salaarimg"></img>
              <div class="carousel-caption text-start details">
                <h5 className="autoimgtext1">
                  hotstar <span className="hotspecial"> specials </span>
                </h5>
                <h2 className="salaarimgtext2"> SALAAR </h2>
                <p className="salaarimgtext3">
                  In the crim-infested Khansaar,Prince Varadha sets to ascend
                  the throne. But a coup d'etat is plaaned! And there's only one
                  manto help reclaim power: Deva.
                </p>
                <p class="opacity-75 discription">
                  Action l Thriller l Power Struggle l Dystopian
                </p>
                <p>
                  <a
                    class="watchbtn"
                    href="https://www.hotstar.com/in/movies/salaar-part-1-ceasefire/1260170331"
                  >
                    <i class="fa fa-play" aria-hidden="true">
                      &nbsp;&nbsp; Watch Latest Season
                    </i>
                  </a>
                  &nbsp;&nbsp;
                  <a class="videoiconpls" href="#">
                    +
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></svg>
            <div class="container">
              <img src={SLIDER2} className="salaarimg"></img>
              <div class="carousel-caption details">
                <h5 className="autosliderimgtext1">
                  hotstar <span className="hotspecial"> specials </span>
                </h5>
                <h2 className="brahmastraimgtext2"> BRAGMASTRA </h2>
                <p className="salaarimgtext3">
                  A journey of fantasy, action and romance comes to life as
                  Shiva enters the Astraverse! He discovers true love and also,
                  the power of fire within him.
                </p>
                <p class="opacity-75 discription">
                  Fantasy l Adventure l Mystery l Drama
                </p>
                <p>
                  <a
                    class="watchbtn"
                    href="https://www.hotstar.com/in/movies/brahmastra-part-one-shiva/1260110227"
                  >
                    <i class="fa fa-play" aria-hidden="true">
                      &nbsp;&nbsp; Watch Latest Season
                    </i>
                  </a>
                  &nbsp;&nbsp;
                  <a class="videoiconpls" href="#">
                    +
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            ></svg>
            <div class="container">
              <img src={SLIDER3} className="salaarimg"></img>
              <div class="carousel-caption text-start details">
                <h5 className="autosliderimgtext1">
                  hotstar <span className="hotspecial"> specials </span>
                </h5>
                <h2 className="ligerimgtext2"> LIGER </h2>
                <p className="salaarimgtext3">
                  A breve-hearted Liger works his way up to find his dream spot
                  in the MMA world. But, his life gets complicated when he
                  crosses paths with Taniya.
                </p>
                <p class="opacity-75 discription">
                  Action l Sport l Drama l Romance
                </p>
                <p>
                  <a
                    class="watchbtn"
                    href="https://www.hotstar.com/in/movies/liger-saala-crossbreed/1260115642"
                  >
                    <i class="fa fa-play" aria-hidden="true">
                      &nbsp;&nbsp; Watch Latest Season
                    </i>
                  </a>
                  &nbsp;&nbsp;
                  <a class="videoiconpls" href="#">
                    +
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* ---------- * Section 2 * ---------- */}

      <div
        id="carouselExampleIndicators1"
        class="carousel slide cardimg container"
      >
        <div class="carousel-inner ">
          <h4 className="cardtext"> Latest Releases </h4>
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox ">
                  <img
                    src={SALAAR}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={VAALIBAN}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={SHOWTIME}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={TRACKER}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={MAA} class="card-img-top letestrelease" alt="..." />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={EDTECHSTORY} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={OSCARS} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={RIDEON} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={STORYOFUS} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={SUNCOAST} class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={BADBATCH}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={CREATOR}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={BIGBOSS}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={HIDEO}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POORTHINGS}
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

      <div
        id="carouselExampleIndicators2"
        class="carousel slide cardimg container"
      >
        {/* <div class="carousel-indicators">
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
        </div> */}
        <div class="carousel-inner">
          <h4 className="cardtext">
            <span className="newlyadded"> Free </span> Newly Added{" "}
          </h4>
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD11}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD1}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD2}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD3}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD4}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={ADD5} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={ADD6} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={ADD7} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={ADD8} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={ADD9} class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD10}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={UNDERGROUND}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD12}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD13}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={ADD14}
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

      {/* ---------- * Section 3 * ---------- */}

      <div
        id="carouselExampleIndicators3"
        class="carousel slide cardimg container"
      >
        <div class="carousel-inner ">
          <h4 className="cardtext"> Popular Shows </h4>
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox ">
                  <img
                    src={POPULAR1}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR2}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR3}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR4}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR5}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR6} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR7} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR8} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR9} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR10} class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR11}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR12}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR13}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR14}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR15}
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
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next cardbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      {/* ---------- * Section 4 * ---------- */}

      <div
        id="carouselExampleIndicators3"
        class="carousel slide cardimg container"
      >
        <div class="carousel-inner ">
          <h4 className="cardtext"> Popular Shows </h4>
          <div class="carousel-item active">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox ">
                  <img
                    src={POPULAR1}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR2}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR3}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR4}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR5}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3 cardslider1">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR6} class="card-img-top" alt="..." />
                </div>
              </div>

              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR7} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR8} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR9} class="card-img-top" alt="..." />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img src={POPULAR10} class="card-img-top" alt="..." />
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item">
            <div class="row row-cols-1 row-cols-md-5 g-3">
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR11}
                    class="card-img-top letestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR12}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR13}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR14}
                    class="card-img-topletestrelease"
                    alt="..."
                  />
                </div>
              </div>
              <div class="col cardslider2">
                <div class="card cardbox">
                  <img
                    src={POPULAR15}
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
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next cardbtn"
          type="button"
          data-bs-target="#carouselExampleIndicators3"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Home;
