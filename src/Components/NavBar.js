import React, { Component } from "react";
import './style.css'
import { Link } from "react-router-dom";



class NavBar extends Component {

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light" id="navBar-CSS" >

                    <Link to={"/"}>
                        <a class="navbar-brand" href="#">
                            <img src="https://bosta.co/wp-content/uploads/2019/08/Component.svg" alt="bosta.co" id="logo" data-height-percentage="54" data-actual-width="163" data-actual-height="50" />
                        </a>
                    </Link>



                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav mr-auto navContent">
                            <Link to={"/"}>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Main Page</a>
                                </li>
                            </Link>

                            <li class="nav-item">
                                <a class="nav-link" href="#">Prices</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Call The Sales</a>
                            </li>
                        </ul>
                        <span class="navbar-text mr-auto">
                            <ul class="navbar-nav navContent">
                                <li class="nav-item">
                                    <a class="nav-link" href="#">track your shipment</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">Sign in</a>
                                </li>
                                <li class="nav-item">
                                    <a style={{ "color": "red" }} class="nav-link" href="#">EN</a>
                                </li>
                            </ul>
                        </span>
                    </div>
                </nav>
            </div>
        )
    }
}


export default (NavBar);