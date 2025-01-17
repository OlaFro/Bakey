import React, { useState, useContext, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import Warning from "../components/Warning";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledOtherInputsContainer,
  StyledPhoto,
  StyledPhotoUpload,
  StyledCoverUpload,
  StyledTextArea,
} from "../styledComponents/StyledForm";
import StyledCentered from "../styledComponents/StyledCentered";
import Axios from "axios";
import { StyledButton } from "../styledComponents/StyledButton";
import { bakeyContext } from "../Context";

export default function Settings() {
  const {
    isLogged,
    setUserName,
    profilePic,
    setProfilePic,
    setCafeName,
  } = useContext(bakeyContext);
  const history = useHistory();
  const [data, setData] = useState({});
  const getValue = (e) => {
    setShowWarning(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    sessionStorage.setItem("location", "settings");
    Axios({
      method: "GET",
      url: `/users/profile-info`,
    })
      .then((res) => {
        setData(res.data);
        if (res.data.profilePic) {
          setLogo({ ...logo, preview: res.data.profilePic, raw: "" });
        }
        if (res.data.cafeCover) {
          setCover({ ...cover, preview: res.data.cafeCover, raw: "" });
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  }, []);

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
    setMsg({});
    let formData = new FormData();
    formData.append("cafeName", data.cafeName);
    formData.append("firstName", data.firstName);
    formData.append("lastName", data.lastName);
    formData.append("cafeStreet", data.cafeStreet);
    formData.append("cafeStreetNr", data.cafeStreetNr);
    formData.append("cafeZip", data.cafeZip);
    formData.append("city", data.city);
    formData.append("userType", isLogged.role);
    if (data.cafeDescription) {
      formData.append("cafeDescription", data.cafeDescription);
    }
    if (data.cafeURL) {
      formData.append("cafeURL", data.cafeURL);
    }
    if (logo.raw) {
      formData.append("file", logo.raw);
    }

    if (cover.raw) {
      formData.append("cover", cover.raw);
    }

    Axios({
      method: "PUT",
      url: "/users/update",
      data: formData,
    })
      .then((res) => {
        setUserName(data.firstName);
        setCafeName(data.cafeName);
        if (res.data.profilePic) {
          setProfilePic({ ...profilePic, profilePic: data.profilePic });
        }
        if (res.data.msg) {
          let msgChanged = res.data.msg.reduce((acc, item) => {
            acc[item.param] = true;
            return acc;
          }, {});
          setMsg(msgChanged);
        } else if (res.data.errorSource === "image upload") {
          setImageWarning(true);
        } else if (res.data === "info updated") {
          history.push(`/cafe:${isLogged.id}`);
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
    <StyledCentered settings marginTop>
      <header>
        <h2>Change your settings</h2>
      </header>

      <StyledForm id="settings-form" onSubmit={formSubmit} listing>
        <header>
          <h2>Fill out:</h2>
        </header>
        <StyledOtherInputsContainer cafe>
          <header>Upload cover photo</header>
          <StyledCoverUpload cafe>
            <label htmlFor="cafeCover">
              {cover.preview ? (
                <figure className="picContainer">
                  <img src={cover.preview} alt="cafe cover" />
                </figure>
              ) : (
                <StyledPhoto cover />
              )}

              <small className={imageWarning ? "warning" : null}>
                Please use JPG or PNG (recommended 1200 x 400px and max. size
                2MB).
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
          <StyledPhotoUpload logo>
            <label htmlFor="profilePic">
              {logo.preview ? (
                <div className="picContainer">
                  <img src={logo.preview} alt="logo" />
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
          <StyledTextArea
            cafe
            long
            name="cafeDescription"
            id="cafeDescription"
            placeholder=""
            value={data.cafeDescription || ""}
            onInput={getValue}
            rows="5"
          />
          <StyledLabel htmlFor="listingName">description</StyledLabel>
          <div>
            {msg.listingName ? <small>Please add description</small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="cafeName"
            id="cafeName"
            placeholder=""
            value={data.cafeName || ""}
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="cafeName">Café Name*</StyledLabel>
          <div>
            {msg.cafeName ? (
              <small>The name must be max. 50 characters long</small>
            ) : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="firstName"
            id="firstName"
            placeholder=" "
            value={data.firstName || ""}
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="firstName">Owner First Name*</StyledLabel>
          <div>
            {msg.firstName ? <small>Please use only letters</small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="lastName"
            id="lastName"
            placeholder=" "
            value={data.lastName || ""}
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="lastName">Owner Last Name*</StyledLabel>
          <div>
            {msg.lastName ? <small>Please use only letters</small> : null}
          </div>
        </StyledInputContainer>

        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="cafeStreet"
            id="cafeStreet"
            placeholder=" "
            value={data.cafeStreet || ""}
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeStreet">Address / Street*</StyledLabel>
          <div>
            {msg.cafeStreet ? <small> Please use only letters </small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="cafeStreetNr"
            id="cafeStreetNr"
            value={data.cafeStreetNr || ""}
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
          <StyledInputField
            long
            cafe
            type="text"
            name="cafeZip"
            id="cafeZip"
            placeholder=" "
            value={data.cafeZip || ""}
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeZip">Address / ZIP code*</StyledLabel>
          <div>
            {msg.cafeZip ? <small>Please use only numbers</small> : null}
          </div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="city"
            id="city"
            placeholder=" "
            value={data.city || ""}
            onInput={getValue}
          />
          <StyledLabel htmlFor="city">Address / City*</StyledLabel>
          <div>{msg.city ? <small>Please use only letters</small> : null}</div>
        </StyledInputContainer>
        <StyledInputContainer>
          <StyledInputField
            long
            cafe
            type="text"
            name="cafeURL"
            id="cafeURL"
            placeholder=" "
            value={data.cafeURL || ""}
            onInput={getValue}
          />
          <StyledLabel htmlFor="cafeURL">Webpage</StyledLabel>
          <div>
            {msg.cafeURL ? <small>Please use only letters</small> : null}
          </div>
        </StyledInputContainer>
        <div className="communication">
          <div>
            <StyledButton cafeSecondary>
              <Link to="/cafe-dashboard">Cancel</Link>
            </StyledButton>
          </div>
          <div>
            <StyledButton type="submit" form="settings-form" cafe>
              Save
            </StyledButton>
          </div>
        </div>
        {showWarning ? <Warning msg="the service is out of order" /> : null}
      </StyledForm>
    </StyledCentered>
  );
}
