import React from 'react';
import Navbar from './Navbar';
import './Home.css';

const Home = () => {
  return (
    <div>
      <Navbar />
      <div>
        {/* First section with the heading and main image */}
        <div className='first'>
          <h1 style={{ fontFamily: 'cursive', textAlign: 'center' }}>
            "Discover Magical Treasures – <br />Explore Our Store!"
          </h1>
          <img src={require("./images/img1.png")} alt="Image1" className='center-image' />
        </div>

        {/* Second section with the left corner image and 3 containers */}
        <div className='second'>
          <img src={require("./images/Comic.png")} alt="Image2" className='corner-image' />
          <img src={require("./images/img2.png")} alt="image3" className='corner-image'/>

          <div className='container-wrapper'>
            <div className='container'>
              <img src={require("./images/img21.png")} alt="Comic" className='container-image' />
              <div className='container-text'>
                <h3>Teenager Comics</h3>
                <p>Step into Teenagers' Real-Time Comics, where dynamic adventures reflect your world. Our stories resonate, entertain, and inspire, making every read a relatable journey.</p>
              </div>
            </div>

            <div className='container'>
              <img src={require("./images/img22.png")} alt="Comic" className='container-image' />
              <div className='container-text'>
                <h3>Teenager Comics</h3>
                <p>Step into Teenagers' Real-Time Comics, where dynamic adventures reflect your world. Our stories resonate, entertain, and inspire, making every read a relatable journey.</p>
              </div>
            </div>

            <div className='container'>
              <img src={require("./images/img23.png")} alt="Comic" className='container-image' />
              <div className='container-text'>
                <h3>Teenager Comics</h3>
                <p>Step into Teenagers' Real-Time Comics, where dynamic adventures reflect your world. Our stories resonate, entertain, and inspire, making every read a relatable journey.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Third section with activity image and right corner image with 3 containers */}
        <div className='third'>
          <div className='activity-wrapper'>
            <img src={require("./images/Activity.png")} alt="Activity" className='activity-image' />
            <img src={require("./images/img3.png")} alt="Image3" className='corner-image-right' />
          </div>

          <div className='container-wrapper'>
            <div className='container'>
              <img src={require("./images/img31.png")} alt="Coloring Book" className='container-image' />
              <div className='container-text'>
                <h3>Coloring Book</h3>
                <p>This fun coloring book teaches you about plants, animals, and ecosystems while you bring nature to life with your own colors. Perfect for learning and creativity!</p>
              </div>
            </div>

            <div className='container'>
              <img src={require("./images/img32.png")} alt="Coloring Book" className='container-image' />
              <div className='container-text'>
                <h3>Coloring Book</h3>
                <p>This fun coloring book teaches you about plants, animals, and ecosystems while you bring nature to life with your own colors. Perfect for learning and creativity!</p>
              </div>
            </div>

            <div className='container'>
              <img src={require("./images/img33.png")} alt="Coloring Book" className='container-image' />
              <div className='container-text'>
                <h3>Coloring Book</h3>
                <p>This fun coloring book teaches you about plants, animals, and ecosystems while you bring nature to life with your own colors. Perfect for learning and creativity!</p>
              </div>
            </div>
          </div>
        </div>

        <div className='fourth'>

        </div>
      </div>
    </div>
  );
};

export default Home;
