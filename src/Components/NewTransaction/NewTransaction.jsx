import React, { useContext } from "react";
import styles from "./NewTransaction.module.css";
import "./Input.css";
import { GlobalContext } from "../../Contex";

function NewTransaction() {
  const states = useContext(GlobalContext);
  const { textChangeHandler, addHandler, amountChangeHandler, error, errorSet, amount, text } = states;

  return (
    <div className={styles.container}>
      <h2 style={{ textAlign: "start", paddingLeft: "20px" }}>
        Add New Transaction
      </h2>
      <hr style={{ margin: "0px 20px" }}></hr>

      <div className={styles.newTransaction}>
        <div className={styles.newTransactionItem}>

          {errorSet === true && <span className={styles.error} >{error}</span>}
          <div className="input-container">
            <p>Text</p>
            <input
              type="text"
              value={text}
              autoComplete="on"
              placeholder="Transaction Details"
              onChange={textChangeHandler}
            />
          </div>

          <div className="input-container">
            <p>Amount</p>
            <span>(Negative - expenses, Positive - income)</span>
            <input
              type="number"
              placeholder="Amount"
              value={amount}
              autoComplete="on"
              onChange={amountChangeHandler}
            />
          </div>

          <button className="button-31" onClick={addHandler}>
            Add Transaction
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewTransaction;
