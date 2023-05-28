import styled from "styled-components";
import cardBackImg from "../assets/images/bg-card-back.png";
import cardFontImg from "../assets/images/bg-card-front.png";
export default function Card(props) {
  return (
    <StyledContainer>
      <p className="cvcNumber">{props.cvc}</p>
      <div className="cardBack"></div>
      <div className="cardFront">
        <div className="circles">
          <div className="bigCircle"></div>
          <div className="smallCircle"></div>
        </div>
        <p className="cardNumber">{props.cardNumber}</p>
        <div className="owner">
          <p className="cardHolderName">{props.cardHolderName}</p>
          <p className="data">
            {props.month}/{props.year}
          </p>
        </div>
      </div>
    </StyledContainer>
  );
}

const StyledContainer = styled.div`
  width: 376px;
  height: 240px;
  background: #21092f;
  position: relative;
  .cvcNumber {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    color: #ffffff;
    text-align: right;
    letter-spacing: 1.28px;
    position: absolute;
    top: 104px;
    right: 52px;
    z-index: 2;
  }
  .cardBack {
    width: 286px;
    height: 158px;
    background: linear-gradient(168.73deg, #ffffff 5%, #d2d3d9 91.69%);
    border-radius: 6px;
    background-image: url(${cardBackImg});
    background-size: cover;
    position: absolute;
    top: 32px;
    right: 16px;
  }
  .cardFront {
    width: 286px;
    height: 156px;
    background: linear-gradient(163.95deg, #6348fe 4.74%, #610595 88.83%);
    border-radius: 6px;
    background-image: url(${cardFontImg});
    background-size: cover;
    position: absolute;
    top: 122px;
    left: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 18px 0 0 18px;
  }
  .circles {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .bigCircle {
    width: 30px;
    height: 30px;
    background: #ffffff;
    border-radius: 50%;
  }
  .smallCircle {
    width: 13px;
    height: 13px;
    border-radius: 50%;
    border: 1px solid #ffffff;
  }
  .cardNumber {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 2.2px;
    color: #ffffff;
    margin: 37px 0 17px 0;
  }
  .owner {
    width: 240px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    bottom: 20px;
    left: 19px;
  }
  .cardHolderName {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    max-width: 200px;
    overflow: hidden;
    letter-spacing: 1.28571px;
    text-transform: uppercase;
    color: #ffffff;
  }
  .data {
    font-weight: 500;
    font-size: 9px;
    line-height: 11px;
    letter-spacing: 1.28571px;
    color: #ffffff;
  }
`;
