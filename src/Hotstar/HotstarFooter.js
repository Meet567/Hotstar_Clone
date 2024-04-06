import React from "react";
import "./HotstarFooter.css";

function HotstarFooter() {
  return (
    <div>
      <div class="card-group">
        <div class="card hotfooter">
          <div class="card-body">
            <h5 class="card-title"> Company </h5>
            <br></br>
            <p class="card-text"> About Us </p>

            <p class="card-text"> Career </p>
          </div>
        </div>
        <div class="card hotfooter">
          <div class="card-body hotfooter">
            <h5 class="card-title"> View Website in </h5>
            <br></br>
            <p class="card-text">English</p>
          </div>
        </div>

        <div class="card hotfooter">
          <div class="card-body hotfooter">
            <h5 class="card-title"> Need Help? </h5>
            <br></br>
            <p class="card-text"> Visit Help Center </p>
            <p class="card-text"> Share Feedback </p>
          </div>
        </div>
        <div class="card hotfooter">
          <div class="card-body hotfooter">
            <h5 class="card-title"> Connect with Us </h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotstarFooter;
