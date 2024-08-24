import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;
  const initialInvestmentvalid = userInput.initialInvestment >= 0;
  const annualInvestmentValid = userInput.annualInvestment >= 0;
  const expectedReturnValid = userInput.expectedReturn >= 0;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!initialInvestmentvalid && (
        <p className="center">
          Kindly Select initial Investment greater than 0
        </p>
      )}

      {!annualInvestmentValid && (
        <p className="center">
          Kindly Select annual Investment Value greater than 0
        </p>
      )}

      {!expectedReturnValid && (
        <p className="center">
          Kindly Select expected Return Value greater than 0
        </p>
      )}
      {!inputIsValid && (
        <p className="center"> Kindly Select year duration greater than 1 </p>
      )}
      {inputIsValid &&
        initialInvestmentvalid &&
        annualInvestmentValid &&
        expectedReturnValid && <Result input={userInput} />}
    </>
  );
}

export default App;
