import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Listing from "../components/Listing";
import Logo from "../components/Logo";
import Warning from "../components/Warning";

import slide1 from "../assets/slide-one.png";
import slide2 from "../assets/slide-two.png";
import slide3 from "../assets/slide-three.png";
import slide4 from "../assets/slide-four.png";

import {
  StyledHeader,
  StyledCTA,
  StyledTitle,
  StyledMain,
  StyledDesc,
  StyledNoCarousel,
  StyledCarousel,
  StyledAbout,
  StyledEndSoon,
  StyledForCafe,
} from "../styledComponents/StyledLandingPage";
import {
  StyledInputContainer,
  StyledSelect,
  StyledLabel,
  StyledArrow,
} from "../styledComponents/StyledForm";
import { StyledButton } from "../styledComponents/StyledButton";
import StyledCentered from "../styledComponents/StyledCentered";

export default function LandingPage() {
  let history = useHistory();

  const { city, setCity, availableCities } = useContext(bakeyContext);

  const [listings, setListings] = useState([]);
  const [warning, setWarning] = useState(false);
  const [warningContent, setWarningContent] = useState(
    "the server is out of service"
  );

  useEffect(() => {
    Axios({
      method: "GET",
      url: "/listings/end-soon",
    })
      .then((res) => {
        if (res.data.length === 0) {
          setWarningContent("there are no offers yet");
          setWarning(true);
        } else {
          setListings(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
        setWarningContent("the server is out of service");
        setWarning(true);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <StyledCentered>
      <StyledHeader>
        <div className="headingContainer">
          <Logo />
          <h1>Let them order cake!</h1>
          <StyledCTA>

            {availableCities.length > 0 ? (
              <StyledInputContainer>
                <StyledSelect
                  landingPage
                  id="city"
                  name="city"
                  onChange={(e) => {
                    setCity(e.target.value);
                  }}
                  defaultValue={city}
                >
                  {availableCities.map((city) => {
                    return <option value={city}>{`${city}`}</option>;
                  })}
                </StyledSelect>
                <StyledLabel htmlFor="city">See offers from:</StyledLabel>
                <StyledArrow landingPage />
              </StyledInputContainer>
            ) : null}

            <StyledButton
              onClick={() => {
                history.push("/cafes-list");
              }}
            >
              go
            </StyledButton>
          </StyledCTA>
          <StyledDesc>
            <h2>Support your local café and order a piece of cake.</h2>
            <h2> We will find other customers to buy the rest.</h2>
          </StyledDesc>
        </div>
      </StyledHeader>
      <StyledMain>
        <StyledTitle>
          <h2>Easy as a piece of cake!</h2>
        </StyledTitle>
        <StyledCarousel>
          <div className="carrousel-container">
            <Slider {...settings}>
              <figure className="carrousel-card">
                <img src={slide1} alt="slide1" />
                <h3>1. Café offers a cake.</h3>
              </figure>
              <figure className="carrousel-card">
                <img src={slide2} alt="slide2" />
                <h3>2. You buy your portion a.k.a. piece of cake</h3>
              </figure>
              <figure className="carrousel-card">
                <img src={slide3} alt="slide3" />
                <h3>
                  3. Invite your friends to participate and buy the other
                  portions
                </h3>
              </figure>
              <figure className="carrousel-card">
                <img src={slide4} alt="slide4" />
                <h3>4. Your cake is ready for the pick up!</h3>
              </figure>
            </Slider>
          </div>
          <StyledNoCarousel>
            <figure className="carrousel-card">
              <img src={slide1} alt="slide1" />
              <h3>Café offers a cake.</h3>
            </figure>
            <figure className="carrousel-card">
              <img src={slide2} alt="slide2" />
              <h3>Buy your portion a.k.a. piece of cake</h3>
            </figure>
            <figure className="carrousel-card">
              <img src={slide3} alt="slide3" />
              <h3>
                Invite your friends to participate<br></br> and buy the other
                portions
              </h3>
            </figure>
            <figure className="carrousel-card">
              <img src={slide4} alt="slide4" />
              <h3>Your cake is ready for the pick up!</h3>
            </figure>
          </StyledNoCarousel>
        </StyledCarousel>

        <StyledAbout>
          <StyledTitle>
            <h2>What is Bakey?</h2>
          </StyledTitle>

          <p>
            Everyone would love to have a piece of cake but it‘s hard to bake
            only one slice! Cafés used to estimate their production based on
            their daily customers. However, during the hard Covid-19 lockdowns,
            cafés were allowed to offer nothing but food to-go and many of them
            would not even take the risk of baking products that might not be
            sold..{" "}
          </p>
          <p>
            Bakey comes to rescue and offers clients the possibility to order
            small portions from their local café through small crowdfunding
            campaigns, gathering other customers to reach a minimum quantity
            that is profitable for the café. Clients will get their money back
            if the goal isn‘t met. They can also recommend it to friends in
            order to increase their chance of success.
          </p>
          <StyledButton
            onClick={() => {
              history.push("/cafes-list");
            }}
          >
            Explore Bakey
          </StyledButton>
          <p>
          Bakey is the final project of web development students of Digital Career Institute Leipzig. It is just a demo not offering real products and displaying the functionalities we would personally use in a similar app, as a result of all skills we‘ve learned during a one year MERN-Stack course. If you want to learn more about the applied technologies and us – Alice, Ola and Willy, creators of Bakey – visit our About Us section
          </p>
          <StyledButton
            onClick={() => {
              history.push("/about-us");
            }}
          >
            About us
          </StyledButton>
        </StyledAbout>
        <StyledTitle>
          <h2>These campaigns end soon!</h2>
        </StyledTitle>
        <StyledEndSoon>
          {warning ? <Warning msg={warningContent} /> : null}
          <div>
            {listings.map((listing, index) => {
              return (
                <Listing
                  cafeName={listing.cafeName}
                  title={listing.listingName}
                  totalPieces={listing.totalPieces}
                  availablePieces={listing.availablePieces}
                  pickUpDate={listing.pickUpDate}
                  piecePrice={listing.piecePrice}
                  listingAllergenes={listing.listingAllergenes}
                  listingTags={listing.listingTags}
                  image={listing.listingPicture}
                  id={listing._id}
                  listingIdentifier={listing.id}
                  key={`listing-${index}`}
                  cafeId={listing.cafeId}
                  withLink={true}
                  landingPage={true}
                />
              );
            })}
          </div>
        </StyledEndSoon>
      </StyledMain>
      <StyledForCafe>
        <h3>Do you want to offer your products on Bakey? </h3>
        <StyledButton
          cafe
          onClick={() => {
            history.push("/registration-cafe");
          }}
        >
          register
        </StyledButton>
      </StyledForCafe>
    </StyledCentered>
  );
}
