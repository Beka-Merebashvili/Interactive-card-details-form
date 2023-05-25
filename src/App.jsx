import { useState } from "react";
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
    <>
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
    </>
  );
}

export default App;
