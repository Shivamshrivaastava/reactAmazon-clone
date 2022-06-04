import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/KGFChapter2file/Alllanguages/3000x1200_Hero-Tall_NP._CB635770012_.jpg"
          alt="background"
        />
        <div className="home__row">
          <Product
            title="Visit the MANQ Store,
            MANQ Men's Slim Fit Single Breasted Blazer"
            price={1852.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/51sx+HbErlL._UX569_.jpg"
          />
          <Product
            id="49538094"
            title="Boat Airdopes 121V2 Bluetooth Truly Wireless in Ear Earbuds with Upto 14 Hours Playback"
            price={1299.0}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/31KjuRb9oNL._SX300_SY300_QL70_FMwebp_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Redmi Note 10T 5G"
            price={11999}
            rating={3}
            image="https://m.media-amazon.com/images/I/81a6LD49zsL._AC_UL480_QL65_.jpg"
          />
          <Product
            title="Echo Dot (4th Gen, 2020 release)| Smart speaker with Alexa (Blue)"
            price={3999.0}
            rating={5}
            image="https://m.media-amazon.com/images/I/61MbLLagiVL._AC_UY327_FMwebp_QL65_.jpg"
          />
          <Product
            title="
            Fire TV Stick 4K with Alexa Voice Remote "
            price={4499}
            rating={4}
            image="https://images-eu.ssl-images-amazon.com/images/I/41McmELG2TL._AC._SR360,460.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            title="Arika 100 cms (40 inches) HD Ready Smart LED TV"
            price={13999}
            rating={4}
            image="https://m.media-amazon.com/images/I/61kuXpKoIfL._SX679_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
