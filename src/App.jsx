import { useState } from "react";
import styled from "styled-components"
import GlobalStayles from "./styled-components/GlobalStyles";
import Card from "./components/Cards";
import CardInformation from "./components/CardInformation";
import Complate from "./components/Complate";

function App() {
  const [confirm, setConfirm] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardnumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  return (
    <StyledBody>
      <GlobalStayles />
      <Card cardNumber={cardNumber} cvc={cvc} cardHolderName={cardHolderName} month={month} year={year} />
      {confirm ? (
        <Complate />
      ) : (
        <CardInformation
          setConfirm={setConfirm}
          setCardHolderName={setCardHolderName}
          setCardnumber={setCardnumber}
          setMonth={setMonth}
          setYear={setYear}
          setCvc={setCvc}
        />
      )}
    </StyledBody>
  );
}

export default App;

const StyledBody = styled.div`
     display: flex;
    flex-direction: column;
    align-items: center;
    @media only screen and (min-width: 1440px) {
      flex-direction: row;
}
`
