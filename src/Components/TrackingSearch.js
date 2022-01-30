import React, { Component } from "react";
import './style.css'
import { Link } from "react-router-dom";
import { RecieveProps } from "./APICalls"




class TrackingSearch extends Component {
  state = {
    trackingNumber: ""
  }

  handleChange = (e) => {
    this.setState({
      trackingNumber: e.target.value
    })
  }

  sendTrackingNumber = (e) => {
    e.preventDefault();
    // console.log(this.state.trackingNumber)
  }

  render() {
    const { trackingNumber } = this.state
    console.log(this.state.trackingNumber);

    return (

      <div class="row">
        <div class="card shadow p-3 mb-5 bg-white rounded" id="trackingCard">
          <div class="card-body">
            <div class="col">
              <div id="trackingCardText">
                Please Enter your shipment number and Track your Shipment.
              </div>
              <div id="trackingCardText">
                Track another shipment
              </div>
              <div>
                <form onSubmit={this.sendTrackingNumber}>
                  <div class="form-row align-items-center">
                    <div class="col-auto">
                      <input onChange={this.handleChange} type="text" class="form-control mb-2" id="inlineFormInput" placeholder="Shipment Number" />
                    </div>
                    <div class="col-auto">
                      <Link to={"shippmentDetails"}>
                        <RecieveProps sendTrackingNumber={this.state.trackingNumber} />
                        <button id="trackingBtn" type="submit" class="btn btn-primary mb-2">Search</button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }


}


export default TrackingSearch;