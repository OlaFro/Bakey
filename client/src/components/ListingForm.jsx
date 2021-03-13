import React, { useState, useContext } from "react";
import Axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { bakeyContext } from "../Context";
import Listing from "./Listing";
import Warning from "./Warning";
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
import { StyledListingSteps } from "../styledComponents/StyledListingForm";

export default function ListingForm() {
  const { selectedListing, setSelectedListing } = useContext(bakeyContext);
  const history = useHistory();
  const [data, setData] = useState(selectedListing);
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
    formData.append("listingImage", data.listingImage.split("images/")[1]);

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
          goBack();
        } else {
          setShowWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  };

  const goBack = () => {
    setSelectedListing({
      listingImage: "",
      listingName: "",
      listingAllergenes: [],
      listingTags: [],
      totalPieces: "",
      pickUpDate: "",
      piecePrice: "",
    });
    history.push("/cafe-dashboard");
  };

  return (
    <StyledCentered>
      <header>
        <h2>Add a new listing</h2>
      </header>
      <StyledListingSteps>
        <h3> 1. Fill out: </h3>
        <StyledForm id="listing-form" onSubmit={formSubmit} listing>
          <StyledOtherInputsContainer cafe>
            <header>Upload photo</header>
            <StyledPhotoUpload cafe>
              <label htmlFor="upload-button">
                {image.preview ? (
                  <figure className="picContainer">
                    <img src={image.preview} alt="Listing" />
                  </figure>
                ) : data.listingImage ? (
                  <div className="picContainer">
                    <img src={data.listingImage} alt="Listing" />
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
              value={data.listingName}
              onInput={getValue}
              required={true}
            />
            <StyledLabel htmlFor="listingName">Title*</StyledLabel>
            <div>
              {msg.listingName ? (
                <small>Please add title no longer than 40 characters</small>
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
                checked={data.listingAllergenes.includes("cereal")}
                onChange={getAllergenes}
              />
              <label htmlFor="cereal">cereal</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="eggs"
                name="eggs"
                checked={data.listingAllergenes.includes("eggs")}
                onChange={getAllergenes}
              />
              <label htmlFor="eggs">eggs</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="peanut"
                name="peanut"
                checked={data.listingAllergenes.includes("peanut")}
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
                checked={data.listingAllergenes.includes("soja")}
              />
              <label htmlFor="soja">soja</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="dairy"
                name="dairy"
                onChange={getAllergenes}
                checked={data.listingAllergenes.includes("dairy")}
              />
              <label htmlFor="dairy">dairy</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="celery"
                name="celery"
                onChange={getAllergenes}
                checked={data.listingAllergenes.includes("celery")}
              />
              <label htmlFor="celery">celery</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="mustard"
                name="mustard"
                onChange={getAllergenes}
                checked={data.listingAllergenes.includes("mustard")}
              />
              <label htmlFor="mustard">mustard</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="lupins"
                name="lupins"
                onChange={getAllergenes}
                checked={data.listingAllergenes.includes("lupins")}
              />
              <label htmlFor="lupins">lupins</label>
            </div>
          </StyledOtherInputsContainer>
          <StyledOtherInputsContainer cafe long>
            <header>Tags</header>
            <div>
              <input
                type="checkbox"
                id="vegan"
                name="vegan"
                onChange={getTags}
                checked={data.listingTags.includes("vegan")}
              />
              <label htmlFor="vegan">vegan</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="organic"
                name="organic"
                onChange={getTags}
                checked={data.listingTags.includes("organic")}
              />
              <label htmlFor="organic">organic</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="glutenFree"
                name="glutenFree"
                onChange={getTags}
                checked={data.listingTags.includes("glutenFree")}
              />
              <label htmlFor="glutenFree">gluten-free</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="lactoseFree"
                name="lactoseFree"
                onChange={getTags}
                checked={data.listingTags.includes("lactoseFree")}
              />
              <label htmlFor="lactoseFree">lactose-free</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="sugarFree"
                name="sugarFree"
                onChange={getTags}
                checked={data.listingTags.includes("sugarFree")}
              />
              <label htmlFor="sugarFree">sugar-free</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="wheatFree"
                name="wheatFree"
                onChange={getTags}
                checked={data.listingTags.includes("wheatFree")}
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
                value={data.piecePrice}
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
                value={data.totalPieces}
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
                  <small>Pick up time has to be in the future</small>
                ) : null}
              </div>
            </StyledInputContainer>
          </div>
        </StyledForm>
        <h3> 2. Preview: </h3>
        <Listing
          title={data.listingName}
          totalPieces={data.totalPieces}
          pickUpDate={data.pickUpDate}
          piecePrice={data.piecePrice}
          listingAllergenes={data.listingAllergenes}
          listingTags={data.listingTags}
          image={data.listingImage || image.preview}
          preview={true}
        />
        <h3> 3. Save: </h3>
        <div className="communication">
          <div>
            <p>
              Click "cancel" to go back to Your dashboard. <p></p>Your changes
              won't be saved.
            </p>
            <StyledButton cafeSecondary onClick={goBack}>
              Cancel
            </StyledButton>
          </div>
          <div>
            <p>
              Click "save" to activate your listing. <p></p>Once it's active,
              you won't be able to change it.
            </p>
            <StyledButton type="submit" form="listing-form" cafe>
              Save
            </StyledButton>
          </div>
        </div>
        {showWarning ? <Warning msg="the service is out of order" /> : null}
      </StyledListingSteps>
    </StyledCentered>
  );
}
