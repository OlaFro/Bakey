import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { bakeyContext } from "../Context";
import Axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Listing from "./Listing";
import Logo from "./Logo";
import Warning from "./Warning";

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
  StyledCarrousel,
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

  const { setCity } = useContext(bakeyContext);

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
        console.log(res.data);
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
            <StyledInputContainer>
              <StyledSelect
                landingPage
                id="city"
                name="city"
                onChange={(e) => {
                  setCity(e.target.value);
                }}
              >
                <option value="Leipzig">Leipzig</option>
                <option value="Hamburg">Hamburg</option>
                <option value="Düsseldorf">Düsseldorf</option>
              </StyledSelect>
              <StyledLabel htmlFor="city">See offers from:</StyledLabel>
              <StyledArrow landingPage />
            </StyledInputContainer>
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
            <h2> We will find other customers to bake the whole one.</h2>
          </StyledDesc>
        </div>
      </StyledHeader>
      <StyledMain>
        <StyledTitle>
          <h2>Easy as a piece of cake!</h2>
        </StyledTitle>
        <StyledCarrousel>
          <div className="carrousel-container">
            <div className="carrousel-card"></div>
            <Slider {...settings} adaptiveHeight="true">
              <figure className="carrousel-card">
                <img src={slide1} alt="slide1" />
                <h3>Café publishes new offer of a cake.</h3>
              </figure>
              <figure className="carrousel-card">
                <img src={slide2} alt="slide2" />
                <h3>Café publishes new offer of a cake.</h3>
              </figure>
              <figure className="carrousel-card">
                <img src={slide3} alt="slide3" />
                <h3>Café publishes new offer of a cake.</h3>
              </figure>
              <figure className="carrousel-card">
                <img src={slide4} alt="slide4" />
                <h3>Café publishes new offer of a cake.</h3>
              </figure>
            </Slider>
          </div>
        </StyledCarrousel>

        <StyledAbout>
          <StyledTitle>
            <h2>What is Bakey?</h2>
          </StyledTitle>

          <p>
            Everyone would like to have a piece of cake, but it's hard to bake
            only one slice! Usually, cafés were estimating their production
            based on regular visitors. In the hard times of the Covid-19
            lockdown, they can offer their food only to-go, but many of them are
            not taking the risk of baking products that won't be sold.{" "}
          </p>
          <p>
            Bakey is a web-application that allows clients to order small
            portions in their local café and in form of small crowdfunding
            campaigns gathers other customers to reach the profitable minimum
            for the café to bake the cake. If the goal won't be met, clients get
            their money back. To increase the chance of the campaign to succeed
            users can recommend it to friends.
          </p>
          <StyledButton
            onClick={() => {
              history.push("/cafes-list");
            }}
          >
            Explore Bakey
          </StyledButton>
          <p>
            Bakey is a final project of web development students of Digital
            Career Institute in Leipzig. It is only demo containing the
            functionalities we personally would use in the app like this and not
            offering real products. It shows all skills we've learned during the
            one-year MERN-stack course. If you want to learn more about used
            technologies and us - Alice, Ola, and Willy that created Bakey -
            visit ours About Us page.
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
          <h2>This campaigns end soon!</h2>
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
            history.push("/registration/cafe");
          }}
        >
          register
        </StyledButton>
      </StyledForCafe>
    </StyledCentered>
  );
}
