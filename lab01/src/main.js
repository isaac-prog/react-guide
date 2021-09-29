import React from "react";
import './style.css'

class MainPage extends React.Component{
    render(){
        return (
          <React.Fragment>
        <body>
             <nav>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Our Menu</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
            </nav>
            <section id="hero">
                <div id="cta">
                    <a href="#">
                        Make a Booking
                    </a>
                </div>
            </section>
            <section id="about-us">
                <div class="content">
                    <h1>Japanese so fresh, any fresh you have to fly to Japan</h1>
                </div>
            </section>
            </body>
        </React.Fragment>
          );
    }
}

export default MainPage