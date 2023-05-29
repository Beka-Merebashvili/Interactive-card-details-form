import { styled } from "styled-components";
import StyledButton from "../styled-components/StyledButton";
import complateIcon from "../assets/images/icon-complete.svg";

export default function Complate(props) {
  return (
    <StyledDiv>
      <img src={complateIcon} alt="" />
      <h2>THANK YOU!</h2>
      <p>We&#39;ve added your card details</p>
      <StyledButton onClick={() => {
        props.setConfirm(false)
      }}>Continue</StyledButton>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 90px;
  h2 {
    font-weight: 500;
    font-size: 28px;
    line-height: 36px;
    text-align: center;
    letter-spacing: 3.4px;
    color: #21092f;
    margin-top: 35px;
  }
  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    color: #8f8694;
    margin: 16px 0 48px 0;
  }
  @media only screen and (min-width: 1440px) {
    margin: 0;
  }
`;
