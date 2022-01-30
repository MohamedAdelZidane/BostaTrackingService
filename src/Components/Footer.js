import React, { Component } from "react";
import './style.css'
import { Link } from "react-router-dom";


class Footer extends Component {

    render() {
        return (
            <div >
                <footer id="footer">
                    <div class="container-fluid">
                        <div class="row" id="footerNavigation">
                            <div class="col">
                                <Link to={"/"}>
                                    <img class="alignnone size-full wp-image-139" src="https://bosta.co/wp-content/uploads/2019/08/bosta_logo_ar_red.svg" alt="" width="110" height="36" />

                                </Link>
                            </div>
                            <div class="col">
                                <p id="headerColor"><b>Shipments</b></p><br />
                                <p><a href="#">Prices</a></p>
                                <p><a href="#">Track Your Shipment</a></p>
                            </div>
                            <div class="col">
                                <p id="headerColor"><b>About Bosta</b></p><br />
                                <p><a href="#">Call the Sales</a></p>
                                <p><a href="#">Privacy the policy</a></p>
                                <p><a href="#">Conditions and Terms </a></p><br />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


export default (Footer);