import React from "react";
import './home.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../assets/img/homebg1.jpg"; 
import image2 from "../assets/img/homebg2.jpg"; 
// import image3 from "../assets/img/homebg5.jpg"; 


const Home = () =>{

    var settings = {dots: false,infinite: true,speed: 200,slidesToShow: 1,slidesToScroll: 1,autoplay:true};

    return(
        <div className="home">
            <Slider {...settings}>
                <div>
                    <div className="slide1" style={{ backgroundImage:`url(${image1})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",  backgroundAttachment: "fixed", backgroundPosition: "center" }}>
                        <div className="text" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
                            
                            <h1>WELCOME</h1>
                            <h1>EALIM CHIT FUND</h1>
                        </div> 
                    

                        {/* <img src={require('../assets/img/homebg1.jpg')} alt='no image'/> */}
                    </div>
                </div>
                <div>
                    <div className="slide2" style={{ backgroundImage:`url(${image2})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",  backgroundAttachment: "fixed", backgroundPosition: "center" }} >
                        <div className="text" data-aos="fade-down"    data-aos-easing="linear" data-aos-duration="3500">
                            <h1>SAVE YOUR MONEY</h1>
                            <h3>WITH OUR</h3> 
                            <h1> CHIT PLANS</h1>

                        </div>
                        {/* <img src={require('../assets/img/homebg2.jpg')} alt='no image'/> */}
                    </div>
                </div>
                {/* <div>
                    <div className="slide2" style={{ backgroundImage:`url(${image3})` ,backgroundRepeat:"no-repeat",backgroundSize:"cover",  backgroundAttachment: "fixed", backgroundPosition: "center" }} >

                        <h1>SAVE YOUR MONEY</h1>
                        <h3>WITH OUR</h3> 
                        <h1> CHIT PLANS</h1>
                        {/* <img src={require('../assets/img/homebg2.jpg')} alt='no image'/> */}
                    {/* </div>
                </div> */} 
            </Slider>
        </div>
    );
}

export default Home; 