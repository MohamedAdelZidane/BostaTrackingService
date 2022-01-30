import React, { Component } from "react";
import './style.css'
import report from './report.png';

import { APICalls } from './APICalls'




const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];






class ShippingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      TransitEvents: [],
      TrackingNumber: "",
      TrackingURL: "",
      CurrentStatus: [],
      PromisedDate: "",
      TransitEventsDay: [],
      TransitEventsDate: [],
      TransitEventsTime: [],

    }

  }



  componentDidMount() {
    
    var config = { "Access-Control-Allow-Origin": "*" }
    APICalls(config, (res) => {
      // console.log("I'm Here, Got Data from apiCalls File")
      this.setState({
        TransitEvents: res.data.TransitEvents,
        TrackingNumber: res.data.TrackingNumber,
        CurrentStatus: res.data.CurrentStatus,
        PromisedDate: res.data.PromisedDate,
      })
    }, (err) => {
      alert(err);
    });


  }



  handleDateOnly(data) {
    // this.setState({ justClicked: data });
    // console.log(data)
    var d = new Date(data);
    // console.log(d)
    let DateOnly = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    var formattedDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    // console.log(formattedDate);
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    // console.log(hours);
    var ampm = hours >= 12 ? 'pm' : 'am';
    // console.log(ampm);


    let day = days[d.getDay()];
    // console.log(day);

    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var formattedTime = hours + ":" + minutes + " " + ampm;
    // console.log(formattedTime)

    formattedDate = day + " " + formattedDate + " " + formattedTime + " " + ampm;


    return (DateOnly);
  }

  handleTimeOnly(data) {
    // this.setState({ justClicked: data });
    // console.log(data)
    var d = new Date(data);
    // console.log(d)
    let DateOnly = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    var formattedDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    // console.log(formattedDate);
    var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    // console.log(hours);
    var ampm = hours >= 12 ? 'pm' : 'am';
    // console.log(ampm);


    let day = days[d.getDay()];
    // console.log(day);

    var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    var formattedTime = hours + ":" + minutes + " " + ampm;
    // console.log(formattedTime)

    formattedDate = day + " " + formattedDate + " " + formattedTime + " " + ampm;


    return (formattedTime);
  }

  removeUnderScore(data) {
    // console.log(data + " remove underscore function")
    let newWord = data.replace(/_/g, " ");
    return newWord
  }

  handleHub(data) {
    if (data === undefined || data === null) {
      return "Aswan"
    } else {
      return data
    }
  }



  render() {
    return (
      // <div>
        <div>
        {/* {this.handleClick} */}

          <div class="row" id="shippingDetailsCards" style={{ "padding": "0 5%" }}>
            <div class="col-md-6">
              <div>
                <div id="shippingDetailsCardsText-CSS">Shipment details</div>
              </div>
              <table class="table">
                <thead id="tHead-CSS">
                  <tr>
                    <th class="th-content" scope="col">the branch</th>
                    <th class="th-content" scope="col">the date</th>
                    <th class="th-content" scope="col">the time</th>
                    <th class="th-content" scope="col">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.TransitEvents.map(data =>
                    <tr>
                      <th scope="row"><span id="table-content">{this.handleHub(data.hub)}</span></th>
                      <td ><span id="table-content">{this.handleDateOnly(data.timestamp)}</span></td>
                      <td><span id="table-content">{this.handleTimeOnly(data.timestamp)}</span></td>
                      <td><span id="table-content">{this.removeUnderScore(data.state)}</span>
                        <span id="table-content" style={{ "color": "#ecc94b", "fontSize": "12px" }}>{data.reason}</span>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div class="col-md-6">
              <div>
                <div id="shippingDetailsCardsText-CSS">delivery address</div>
                <div class="card" style={{ "backgroundColor": "#fafafa" }}>
                  <div class="card-body" id="card1-CSS">
                    Imbaba, Talaat Harb Street, Workers City, next to El Prince, House 17 Bloom 33... Cairo
                  </div>
                </div>
                <div class="card" style={{ "margin-top": "2%" }}>
                  <div class="card-body">

                    <div id="container" style={{ "whiteSpace": "nowrap" }}>
                      <div class="row">
                        <div class="col">
                          <div  >
                            <img id="cardImage" src={report} />
                          </div>

                        </div>


                        <div class="col" >
                          <div id="texts" >
                            <span id="firstText"> Is there a problem with your shipment ?! </span>
                            <div>
                              <button id="reportBtn"> Report a probelm</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      // </div>
    )
  }
}


export default ShippingDetails;