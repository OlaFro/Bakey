import React, { useEffect, useState } from "react";
import Warning from "./Warning";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledOtherInputsContainer,
  StyledPhoto,
  StyledPhotoUpload,
  StyledCoverUpload,
} from "../styledComponents/StyledForm";
import StyledCentered from "../styledComponents/StyledCentered";
import Axios from "axios";
import { StyledButton } from "../styledComponents/StyledButton";

export default function Settings() {
  const [data, setData] = useState();
  const getValue = (e) => {
    setShowWarning(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getCover = (e) => {
    if (e.target.files.length) {
      setCover({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const getLogo = (e) => {
    if (e.target.files.length) {
      setLogo({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const [msg, setMsg] = useState({});
  const [showWarning, setShowWarning] = useState(false);
  const [imageWarning, setImageWarning] = useState(false);
  const [cover, setCover] = useState({ preview: "", raw: "" });
  const [logo, setLogo] = useState({ preview: "", raw: "" });
  const formSubmit = (e) => {
    e.preventDefault();
    setShowWarning(false);
    let formData = new FormData();
    formData.append("file", cover.raw);
    formData.append("file", logo.raw);
    formData.append("cafeDescription", data.cafeDescription);
    formData.append("cafeName", data.cafeName);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.firstName);
    formData.append("cafeStreet", data.cafeStreet);
    formData.append("cafeStreetNr", data.cafeStreetNr);
    formData.append("cafeZip", data.cafeZip);
    formData.append("city", data.city);
    formData.append("userType", "cafe");

    Axios({
      method: "PUT",
      url: "/users",
      data: formData,
    })
      .then((res) => {
        console.log(res);
        if (res.data.msg) {
          let msgChanged = res.data.msg.reduce((acc, item) => {
            acc[item.param] = true;
            return acc;
          }, {});
          setMsg(msgChanged);
        } else if (res.data.errorSource === "image upload") {
          setImageWarning(true);
        } else {
          setShowWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  return (
    <StyledCentered settings>
      <header>
        <h2>Change your settings</h2>
      </header>

      <StyledForm onSubmit={formSubmit} listing>
        <header>
          <h2>Fill out:</h2>
        </header>
        <StyledOtherInputsContainer cafe>
          <header>Upload cover photo</header>
          <StyledCoverUpload cafe>
            <label htmlFor="cafeCover">
              {cover.preview ? (
                <div className="coverContainer">
                  <img src={cover.preview} alt="cafe cover" />
                </div>
              ) : (
                <StyledPhoto cover />
              )}

              <small className={imageWarning ? "warning" : null}>
                Please use JPG or PNG in square format (max. size 2MB).
              </small>
            </label>

            <input
              type="file"
              name="cafeCover"
              id="cafeCover"
              onChange={getCover}
            />
          </StyledCoverUpload>
        </StyledOtherInputsContainer>
        <StyledOtherInputsContainer cafe>
          <header>Upload logo</header>
          <StyledPhotoUpload cafe>
            <label htmlFor="profilePic">
              {logo.preview ? (
                <div className="picContainer">
                  <img src={logo.preview} alt="Listing" />
                </div>
              ) : (
                <StyledPhoto />
              )}

              <small className={imageWarning ? "warning" : null}>
                Please use JPG or PNG in square format (max. size 2MB).
              </small>
            </label>

            <input
              type="file"
              name="profilePic"
              id="profilePic"
              onChange={getLogo}
            />
          </StyledPhotoUpload>
        </StyledOtherInputsContainer>
        <StyledInputContainer>
          <StyledInputField
            cafe
            long
            type="text"
            name="cafeDescription"
            id="cafeDescription"
            placeholder=" "
            onInput={getValue}
          />
          <StyledLabel htmlFor="listingName">description*</StyledLabel>
          <div>
            {msg.listingName ? <small>Please add description</small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer >
          <StyledInputField long
            cafe
            type="text"
            name="cafeName"
            id="cafeName"
            placeholder=" "
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeName">Café Name*</StyledLabel>
          <div>{msg.cafeName ? <small>Required</small> : null}</div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField long
            cafe
            type="text"
            name="firstName"
            id="firstName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="firstName">Owner First Name*</StyledLabel>
          <div>
            {msg.firstName ? <small>Please use only letters</small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField long
            cafe
            type="text"
            name="lastName"
            id="lastName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="lastName">Owner Last Name*</StyledLabel>
          <div>
            {msg.lastName ? <small>Please use only letters</small> : null}
          </div>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField long
            cafe
            type="text"
            name="cafeStreet"
            id="cafeStreet"
            placeholder=" "
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeStreet">Address / Street*</StyledLabel>
          <div>
            {msg.cafeStreet ? <small> Please use only letters </small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField long
            cafe
            type="text"
            name="cafeStreetNr"
            id="cafeStreetNr"
            placeholder=" "
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeStreetNr">Address / Street Nr*</StyledLabel>
          <div>
            {msg.cafeStreetNr ? (
              <small>Please use only letters and numbers.</small>
            ) : null}
          </div>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField long
            cafe
            type="text"
            name="cafeZip"
            id="cafeZip"
            placeholder=" "
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeZip">Address / ZIP code*</StyledLabel>
          <div>
            {msg.cafeZip ? <small>Please use only numbers</small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField long
            cafe
            type="text"
            name="city"
            id="city"
            placeholder=" "
            onInput={getValue}
          />
          <StyledLabel htmlFor="city">Address / City*</StyledLabel>
          <div>{msg.city ? <small>Please use only letters</small> : null}</div>
        </StyledInputContainer>
        <StyledButton cafe>Save</StyledButton>
        {showWarning ? <Warning msg="the service is out of order" /> : null}
      </StyledForm>
    </StyledCentered>
  );
}
