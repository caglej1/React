import styles from "./InvestmentResult.module.css";

const TableRow = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <tr>
      <td>{props.year}</td>
      <td>{formatter.format(props.savings)}</td>
      <td>{formatter.format(props.yearInterest)}</td>
      <td>{formatter.format(props.totalInterest)}</td>
      <td>{formatter.format(props.totalCapital)}</td>
    </tr>
  );
};

const InvestmentResult = (props) => {
  const yearlyData = []; // per-year results

  let currentSavings = +props.userInput.currentSavings;
  const yearlyContribution = +props.userInput.yearlyContribution;
  const expectedReturn = +props.userInput.expectedReturn / 100;
  const duration = +props.userInput.investmentDuration;
  let investedCapital = currentSavings;
  let totalInterest = 0;

  // The below code calculates yearly results (total savings, interest etc)
  for (let i = 0; i < duration; i++) {
    const yearlyInterest = currentSavings * expectedReturn;
    totalInterest += yearlyInterest;
    currentSavings += yearlyInterest + yearlyContribution;

    yearlyData.push({
      year: i + 1,
      yearlyInterest: yearlyInterest,
      savingsEndOfYear: currentSavings,
      investedCapital: (investedCapital += yearlyContribution),
      totalInterest: totalInterest,
    });
  }

  return (
    <table className={styles.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((item) => {
          return (
            <TableRow
              year={item.year}
              savings={item.savingsEndOfYear}
              yearInterest={item.yearlyInterest}
              totalInterest={item.totalInterest}
              totalCapital={item.investedCapital}
              key={item.year}
            />
          );
        })}
      </tbody>
    </table>
  );
};

export default InvestmentResult;
