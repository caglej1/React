import { useState } from "react";
import styles from "./InvestmentInput.module.css";

const InvestmentInput = (props) => {
  const [userInput, setUserInput] = useState({
    currentSavings: "",
    yearlyContribution: "",
    expectedReturn: "",
    investmentDuration: "",
  });

  const inputChangeHandler = (identifier, value) => {
    if (identifier === "currentSavings") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          currentSavings: value,
        };
      });
    } else if (identifier === "yearlyContribution") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          yearlyContribution: value,
        };
      });
    } else if (identifier === "expectedReturn") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          expectedReturn: value,
        };
      });
    } else if (identifier === "investmentDuration") {
      setUserInput((prevState) => {
        return {
          ...prevState,
          investmentDuration: value,
        };
      });
    }
  };

  const formButtonClickHandler = (identifier, event) => {
    event.preventDefault();

    if (identifier === "submit") {
      props.calculateInterestHandler(userInput);
    } else if (identifier === "reset") {
      props.reset();

      setUserInput({
        currentSavings: "",
        yearlyContribution: "",
        expectedReturn: "",
        investmentDuration: "",
      });
    }
  };

  return (
    <form className={styles.form}>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            value={userInput.currentSavings}
            onChange={(event) =>
              inputChangeHandler("currentSavings", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(event) =>
              inputChangeHandler("yearlyContribution", event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles["input-group"]}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) =>
              inputChangeHandler("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            value={userInput.investmentDuration}
            onChange={(event) =>
              inputChangeHandler("investmentDuration", event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button
          type="reset"
          className={styles.buttonAlt}
          onClick={(event) => formButtonClickHandler("reset", event)}
        >
          Reset
        </button>
        <button
          type="submit"
          className={styles.button}
          onClick={(event) => formButtonClickHandler("submit", event)}
        >
          Calculate
        </button>
      </p>
    </form>
  );
};

export default InvestmentInput;
