import React, { useState } from "react";
import StyledCentered from "../styledComponents/StyledCentered";
import {
  StyledForm,
  StyledLabel,
  StyledInputContainer,
  StyledInputField,
  StyledOtherInputsContainer,
  StyledPhoto,
  StyledPhotoUpload,
} from "../styledComponents/StyledForm";
import { StyledButton } from "../styledComponents/StyledButton";
import Listing from "./Listing";

import Warning from "./Warning";

import Axios from "axios";
import { useHistory } from "react-router-dom";

export default function ListingForm() {
  const history = useHistory();
  const [data, setData] = useState({
    listingName: "",
    listingTags: [],
    listingAllergenes: [],
  });
  const [msg, setMsg] = useState({});
  const [showWarning, setShowWarning] = useState(false);
  const [imageWarning, setImageWarning] = useState(false);
  const [image, setImage] = useState({ preview: "", raw: "" });

  const getValue = (e) => {
    setShowWarning(false);
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const getTags = (e) => {
    if (data.listingTags.includes(e.target.name)) {
      setData((prevData) => {
        return {
          ...prevData,
          listingTags: prevData.listingTags.filter(
            (tag) => tag !== e.target.name
          ),
        };
      });
    } else {
      setData((prevData) => {
        return {
          ...prevData,
          listingTags: [...prevData.listingTags, e.target.name],
        };
      });
    }
  };

  const getAllergenes = (e) => {
    if (data.listingAllergenes.includes(e.target.name)) {
      setData((prevData) => {
        return {
          ...prevData,
          listingAllergenes: prevData.listingAllergenes.filter(
            (tag) => tag !== e.target.name
          ),
        };
      });
    } else {
      setData((prevData) => {
        return {
          ...prevData,
          listingAllergenes: [...prevData.listingAllergenes, e.target.name],
        };
      });
    }
  };

  const getPhoto = (e) => {
    setImageWarning(false);
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();

    setShowWarning(false);

    console.log("submiting form");

    let formData = new FormData();
    formData.append("file", image.raw);
    formData.append("listingName", data.listingName);
    formData.append("listingTags", data.listingTags);
    formData.append("listingAllergenes", data.listingAllergenes);
    formData.append("totalPieces", data.totalPieces);
    formData.append("piecePrice", data.piecePrice);
    formData.append("pickUpDate", data.pickUpDate);

    Axios({
      method: "POST",
      url: "/listings/add-listing",
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
        } else if (res.data === "added listing") {
          history.push("/cafe-dashboard");
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
    <StyledCentered>
      <Listing />
      <header>
        <h2>Add a new listing</h2>
      </header>

      <StyledForm onSubmit={formSubmit} listing>
        <header>
          <h2>Fill out:</h2>
        </header>
        <StyledOtherInputsContainer cafe>
          <header>Upload photo</header>
          <StyledPhotoUpload cafe>
            <label htmlFor="upload-button">
              {image.preview ? (
                <div className="picContainer">
                  <img src={image.preview} alt="Listing" />
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
              name="userImg"
              id="upload-button"
              onChange={getPhoto}
            />
          </StyledPhotoUpload>
        </StyledOtherInputsContainer>
        <StyledInputContainer long>
          <StyledInputField
            cafe
            long
            type="text"
            name="listingName"
            id="listingName"
            placeholder=" "
            onInput={getValue}
            required={true}
          />
          <StyledLabel htmlFor="listingName">Title*</StyledLabel>
          <div>
            {msg.listingName ? (
              <small>Please add title no longer than 50 characters</small>
            ) : null}
          </div>
        </StyledInputContainer>

        <StyledOtherInputsContainer cafe long>
          <header>Allergenes</header>
          <div>
            <input
              type="checkbox"
              id="cereal"
              name="cereal"
              onChange={getAllergenes}
            />
            <label htmlFor="cereal">cereal</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="eggs"
              name="eggs"
              onChange={getAllergenes}
            />
            <label htmlFor="eggs">eggs</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="peanut"
              name="peanut"
              onChange={getAllergenes}
            />
            <label htmlFor="peanut">peanut</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="soja"
              name="soja"
              onChange={getAllergenes}
            />
            <label htmlFor="soja">soja</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="dairy"
              name="dairy"
              onChange={getAllergenes}
            />
            <label htmlFor="dairy">dairy</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="celery"
              name="celery"
              onChange={getAllergenes}
            />
            <label htmlFor="celery">celery</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="mustard"
              name="mustard"
              onChange={getAllergenes}
            />
            <label htmlFor="mustard">mustard</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lupins"
              name="lupins"
              onChange={getAllergenes}
            />
            <label htmlFor="lupins">lupins</label>
          </div>
        </StyledOtherInputsContainer>
        <StyledOtherInputsContainer cafe long>
          <header>Tags</header>
          <div>
            <input type="checkbox" id="vegan" name="vegan" onChange={getTags} />
            <label htmlFor="vegan">vegan</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="organic"
              name="organic"
              onChange={getTags}
            />
            <label htmlFor="organic">organic</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="glutenFree"
              name="glutenFree"
              onChange={getTags}
            />
            <label htmlFor="glutenFree">gluten-free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="lactoseFree"
              name="lactoseFree"
              onChange={getTags}
            />
            <label htmlFor="lactoseFree">lactose-free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sugarFree"
              name="sugarFree"
              onChange={getTags}
            />
            <label htmlFor="sugarFree">sugar-free</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="wheatFree"
              name="wheatFree"
              onChange={getTags}
            />
            <label htmlFor="wheatFree">wheat-free</label>
          </div>
        </StyledOtherInputsContainer>
        <div>
          <StyledInputContainer>
            <StyledInputField
              cafe
              min="0.01"
              max="20"
              step="0.01"
              type="number"
              name="piecePrice"
              id="piecePrice"
              placeholder=" "
              onInput={getValue}
              required={true}
            />
            <StyledLabel htmlFor="piecePrice">
              Price for a piece (€)*
            </StyledLabel>
            <div>
              {msg.piecePrice ? <small>Price shall be number</small> : null}
            </div>
          </StyledInputContainer>
          <StyledInputContainer>
            <StyledInputField
              cafe
              min="1"
              max="20"
              type="number"
              name="totalPieces"
              id="totalPieces"
              placeholder=" "
              onInput={getValue}
              required={true}
            />
            <StyledLabel htmlFor="availablePieces">
              Pieces in the cake*
            </StyledLabel>
            <div>
              {msg.totalPieces ? <small>Pieces shall be number</small> : null}
            </div>
          </StyledInputContainer>
        </div>
        <div>
          <StyledInputContainer>
            <StyledInputField
              cafe
              long
              type="datetime-local"
              name="pickUpDate"
              id="pickUpDate"
              placeholder=" "
              onInput={getValue}
              required={true}
            />
            <StyledLabel htmlFor="pickUpTime">Pick-up time*</StyledLabel>
            <div>
              {msg.pickUpDate ? (
                <small>Pick up time have to be in future</small>
              ) : null}
            </div>
          </StyledInputContainer>
        </div>
        <StyledButton cafe>Save</StyledButton>
        {showWarning ? <Warning msg="the service is out of order" /> : null}
      </StyledForm>
    </StyledCentered>
  );
}
