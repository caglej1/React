import { useState } from "react";

import Header from "./components/Header/Header";
import InvestmentInput from "./components/Investment/InvestmentInput";
import InvestmentResult from "./components/Investment/InvestmentResult";

function App() {
  const [userData, setUserData] = useState(null);

  const calculateHandler = (userInput) => {
    setUserData(userInput);
  };

  const resetHandler = () => {
    setUserData(null);
  };

  return (
    <div>
      <Header />
      <InvestmentInput calculateInterestHandler={calculateHandler} reset={resetHandler} />

      {userData ? (
        <InvestmentResult userInput={userData} />
      ) : (
        <p style={{ textAlign: "center" }}>
          Provide values using the form above.
        </p>
      )}
    </div>
  );
}

export default App;
