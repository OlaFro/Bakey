import React, {useState, useEffect} from "react";
import Axios from "axios";
import {GoogleMap, withScriptjs, withGoogleMap} from "react-google-maps"


export default function Map () {

    const [mapInfo, setMapInfo] = useState({})


    /* useEffect(() => {Axios({
        method: "GET",
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=windorfer+str.+104+04229+leipzig+germany&key=AIzaSyBxR0OG4tPWe74O5aVfrIOkRILnOhbczr4"
    }).then((res) => {
        console.log(res);
        let location = res.data.results[0].geometry.location;
        if (location) {
            console.log(location.lat);
            console.log(location.lng)
        } else {
            console.log("no results")
        }
    }).catch((err) => {
        console.log(err, "it didnt conected")
    })
}, []) */
    
    return (
       <div>
           hello world! i am a maaaap: show coordinates
           latitude: 
           longitued
       </div>
    )
}