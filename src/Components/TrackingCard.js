import React, { Component } from "react";
import './style.css'
import 'font-awesome/css/font-awesome.min.css';
import { APICalls } from "./APICalls";


const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



class TrackingCard extends Component {



    state = {
        TransitEvents: [],
        TrackingNumber: "",
        TrackingURL: "",
        CurrentStatus: [],
        PromisedDate: ""
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



    handleCurrentStatusDate(lastUpdateDate) {
        if (lastUpdateDate === undefined || lastUpdateDate === null) {
            let defaultFormattedDate = "Saturday 01/01/2026 Time 12:00 AM"
            return defaultFormattedDate
        } else {
            // console.log(lastUpdateDate + " lastUpdateDate in handleCurrentStatusDate function")
            var d = new Date(lastUpdateDate);
            var formattedDate = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
            // console.log(formattedDate);
            var hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
            // console.log(hours);
            var ampm = hours >= 12 ? 'pm' : 'am';
            // console.log(ampm);
            let day = days[d.getDay()];
            // console.log(day);
            var minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
            var formattedTime = "at " + hours + ":" + minutes;
            // console.log(formattedTime)
            formattedDate = day + " " + formattedDate + " " + formattedTime + " " + ampm;
            return (formattedDate);
        }

    }

    handlePromisedDate(promisedDate) {
        // console.log(promisedDate + " Promise Date in handlePromiseDate function")
        if (promisedDate === undefined || promisedDate === null) {
            let defaultFormattedDate = "01 January 2026"
            return defaultFormattedDate
        } else {
            var d = new Date(promisedDate);
            let dayNumer = d.getDate();
            let month = months[d.getMonth()];
            // console.log(month)
            let yearNumber = d.getFullYear();
            // console.log(yearNumber)
            let formattedDate = dayNumer + " " + month + " " + yearNumber;
            return formattedDate;
        }
    }


    handleDeliveredTrackingBar = (delievredOrder) => {
        let status = delievredOrder;
        // console.log(status)
        if (status === "DELIVERED") {
            document.getElementById('DELIVERED').style.display = 'block';
            document.getElementById('NOT_DELIVERED').style.display = 'none';
        }
    }


    removeUnderScore(currentStatusState) {
        if (currentStatusState === undefined || currentStatusState === null) {
            let defaultFormattedDate = "Not found"
            return defaultFormattedDate
        } else {
            if (currentStatusState === "DELIVERED") {
                document.getElementById("currentStateinTrackingCard").style.color = "#1ac45e";
                // document.getElementById("currentStateinTrackingCard").innerHTML = "Hello";
            }
            let convertValueToString = "'" + currentStatusState + "'";
            let removeSingleQuotes = convertValueToString.replace(/['"]+/g, "");
            let newWordWithoutUnderScore = removeSingleQuotes.replace(/_/g, " ");
            return newWordWithoutUnderScore
        }

    }


    render() {
        let lastUpdateDate = this.state.CurrentStatus.timestamp;
        let promisedDate = this.state.PromisedDate;
        let delievredOrder = this.state.CurrentStatus.state;
        let currentStatusState = this.state.CurrentStatus.state;


        return (

            <div className="test">

                <div style={{ "padding": "0 5%" }}>
                    <div class="row trackingCard-CSS">
                        <div class="col">

                            <div class="card text-center">
                                <div class="card-header" style={{ "backgroundColor": "#fff" }}>
                                    <div class="row">
                                        <div class="col">
                                            <div>
                                                <span style={{ "float": "right !important" }} id="orderSummary">Shipment Number  {this.state.TrackingNumber}</span>

                                            </div>
                                            <div>

                                                <span class="th-content" id="currentStateinTrackingCard" style={{ "color": "#f4364c" }}>{this.removeUnderScore(currentStatusState)}</span>

                                            </div>
                                        </div>
                                        <div class="col">
                                            <div><span id="orderSummary">Last Update</span></div>
                                            <div><span class="th-content">{this.handleCurrentStatusDate(lastUpdateDate)}</span></div>
                                        </div>
                                        <div class="col">
                                            <div><span id="orderSummary">Merchant Name</span></div>
                                            <div><span class="th-content">(SOUQ.COM)</span></div>
                                        </div>
                                        <div class="col">
                                            <div><span id="orderSummary">Delivery time</span></div>
                                            <div><span class="th-content">{this.handlePromisedDate(promisedDate)}</span></div>
                                        </div>
                                    </div>

                                </div>


                                <div class="card-body" id="DELIVERED" style={{ "display": "none" }}>
                                    <ol class="steps">
                                        <li class="step is-complete" data-step="1">
                                            Shipment created
                                        </li>
                                        <li class="step is-complete" data-step="2">
                                            The shipment has been received from the merchant
                                        </li>
                                        <li class="step is-complete" data-step="3">
                                            The Shipment got out for delivery
                                        </li>

                                        <li class="step is-active" data-step="4">

                                            Done Delivery
                                        </li>

                                    </ol>


                                </div>

                                <div class="card-body" id="NOT_DELIVERED" >
                                    <ol class="steps2">
                                        <li class="step is-complete" data-step="1">
                                            Shipment created
                                        </li>
                                        <li class="step is-complete" data-step="2">
                                            The shipment has been received from the merchant
                                        </li>
                                        <li class="step is-active" data-step="3">
                                            The Shipment got out for delivery
                                        </li>

                                        <li class="step " data-step="4">
                                            Done Delivery
                                        </li>

                                    </ol>


                                </div>

                                {this.handleDeliveredTrackingBar(delievredOrder)}
                            </div>

                        </div>

                    </div>

                </div>






            </div>
        )
    }
}


export default TrackingCard;