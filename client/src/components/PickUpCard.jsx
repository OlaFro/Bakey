import React from "react";
import { StyledButton } from "../styledComponents/StyledButton";
import {
  StyledPickUpCard,
  StyledMailIcon,
} from "../styledComponents/StyledPickUpCard";

export default function PickUpCard(props) {
  const getDate = () => {
    return props.pickUpDate.split("T")[0].split("-").reverse().join(".");
  };

  const getTime = (addedTime) => {
    const time =
      Number(props.pickUpDate.split("T")[1].substr(0, 2)) * 60 +
      Number(props.pickUpDate.split("T")[1].substr(3, 2)) +
      addedTime;
    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    console.log(time, hours, minutes);
    return hours + ":" + minutes;
  };

  return (
    <StyledPickUpCard>
      <p>{getDate()}</p>
      <h3>
        {props.title} #{props.id}
      </h3>
      <table>
        <thead>
          <tr>
            <th>Time</th>
            <th>Customer Email</th>
            <th>Qty</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.buyers.length
            ? props.buyers.map((buyer, index) => {
                const scheduledTime = 5 * index;
                return (
                  <tr>
                    <td>{getTime(scheduledTime)}</td>
                    <td>{buyer.email}</td>
                    <td>{props.boughtPieces[index]}</td>
                    <td>
                      <a href={`mailto:${buyer.email}`}>
                        <StyledMailIcon />
                      </a>
                    </td>
                  </tr>
                );
              })
            : null}
        </tbody>
      </table>
      <StyledButton buy>Delivered</StyledButton>
    </StyledPickUpCard>
  );
}
