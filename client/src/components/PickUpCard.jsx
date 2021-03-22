import React, { useContext, useState } from "react";
import { bakeyContext } from "../Context";
import Axios from "axios";
import { StyledButton } from "../styledComponents/StyledButton";
import {
  StyledPickUpCard,
  StyledMailIcon,
  StyledBtnContainer,
} from "../styledComponents/StyledPickUpCard";

export default function PickUpCard(props) {
  const { userName, cafeName } = useContext(bakeyContext);

  const [mailSent, setMailSent] = useState([]);

  const [mailSuccess, setMailSuccess] = useState(false);

  const getDate = () => {
    return props.pickUpDate.split("T")[0].split("-").reverse().join(".");
  };

  const getTime = (addedTime) => {
    const time =
      Number(props.pickUpDate.split("T")[1].substr(0, 2)) * 60 +
      60 +
      Number(props.pickUpDate.split("T")[1].substr(3, 2)) +
      addedTime;

    const hours = Math.floor(time / 60);
    const minutes = time - hours * 60;
    return hours + ":" + (minutes < 10 ? "0" + minutes : minutes);
  };

  const mailSentCheck = (index) => {
    setMailSent((prevArray) => {
      return [...prevArray, index];
    });
  };

  const sentAllMails = () => {
    props.buyers.map((buyer, index) => {
      if (!mailSent.includes(index)) {
        if (index === props.buyers.length - 1) {
          setMailSuccess(true);
        }
        return setMailSent((prevArray) => {
          return [...prevArray, index];
        });
      }
      return null;
    });
  };

  const archiveListing = () => {
    props.setWarningContent("the service is out of order.");
    props.setShowWarning(false);
    Axios({
      method: "POST",
      url: `listings/archive`,
      data: { listingID: props.dbID, totalPieces: props.totalPieces },
    })
      .then((res) => {
        if (res.data.status === "changed") {
          props.setListings((prevListings) =>
            prevListings.map((listing, index, array) => {
              if (listing._id === res.data.listing._id) {
                return (array[index] = res.data.listing);
              } else {
                return listing;
              }
            })
          );
        } else if (res.data.status === "no authorization") {
          props.setWarningContent(
            "that you are not authorized to change the status of the offer."
          );
          props.setShowWarning(true);
        } else {
          props.setWarningContent(
            "that the state of this offer can not be changed, please contact our helpdesk."
          );
          props.setShowWarning(true);
        }
      })
      .catch((err) => {
        console.log(err);
        props.setShowWarning(true);
      });
  };
  return (
    <StyledPickUpCard>
      <p>{getDate()}</p>
      <h3>
        {props.title} #{props.id}
      </h3>
      <section className="table-wrapper">
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
                    <tr key={`customer-${index}`}>
                      <td>{getTime(scheduledTime)}</td>
                      <td>{buyer.email}</td>
                      <td>{props.boughtPieces[index]}</td>
                      <td>
                        <a
                          href={`mailto:${
                            buyer.email
                          }&subject=Cake%20order%20through%20Bakey%20-%20pick-up%20notification&body=Dear%20Customer,%0D%0Athank%20you%20very%20much%20for%20your%20support%20of%20our%20cafe.%0D%0A%20Your%20order%20of%20the%20${
                            props.title
                          }%20will%20be%20prepared%20for%20pick%20up%20at%20${getDate()}%20in%20${getTime(
                            scheduledTime
                          )}.%0D%0ABest%20regards,%0D%0A${userName}%20from%20${cafeName}`}
                          className={mailSent.includes(index) ? "sent" : null}
                          onClick={() => {
                            mailSentCheck(index);
                          }}
                          title="send email notification about pick-up to customer"
                        >
                          <StyledMailIcon />
                        </a>
                      </td>
                    </tr>
                  );
                })
              : null}
          </tbody>
        </table>
      </section>
      <StyledBtnContainer>
        <StyledButton
          buy
          title="Send email notification about pick up to all customers"
          onClick={sentAllMails}
        >
          Send Emails
        </StyledButton>
        <StyledButton
          buy
          title="Move delivered offer to the archive. You can anytime reactivate it."
          onClick={archiveListing}
        >
          Finished
        </StyledButton>
      </StyledBtnContainer>
      {mailSuccess ? (
        <p>
          Notification e-mails to your customers with scheduled pick up time
          were successfuly sent.
        </p>
      ) : null}
    </StyledPickUpCard>
  );
}
