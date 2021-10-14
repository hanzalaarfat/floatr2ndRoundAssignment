import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function EmiCalculate() {
  const history = useHistory();

  const amount = localStorage.getItem("amount");
  const month = localStorage.getItem("month");
  const rate = localStorage.getItem("rate");
  const loanEmi = localStorage.getItem("loanEmi");
  const totalEmi = localStorage.getItem("totalEmi");
  const interest = localStorage.getItem("interest");

  const PostData = async (e) => {
    e.preventDefault();
    history.push("/");
  };

  return (
    <div className="login">
      <div>
        <form>
          <div className=" invest form-group col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
            <label className="form-label mb-4">Loan EMI Calculator</label>

            <div class="form-group row mb-3">
              <label for="inputLoan" class="col-sm-3 col-form-label">
                Loan Amount
              </label>
              <div class="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  name="amount"
                  id="floatingInput"
                  disabled
                />
              </div>
              <label for="inputLoan" class="col-sm-1 col-form-label">
                INR
              </label>
            </div>

            <div class="form-group row mb-3">
              <label for="inputMont" class="col-sm-3 col-form-label">
                Loan Tenure
              </label>
              <div class="col-sm-8">
                <input
                  type="Number"
                  className="form-control"
                  id="floatingMonth"
                  value={month}
                  name="month"
                  disabled
                />
              </div>
              <label for="inputMont" class="col-sm-1 col-form-label">
                Month
              </label>
            </div>

            <div class="form-group row mb-3">
              <label for="inputRate" class="col-sm-3 col-form-label">
                Intrest Rate
              </label>
              <div class="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  value={rate}
                  name="text"
                  disabled
                />
              </div>
              <label for="inputRate" class="col-sm-1 col-form-label">
                %
              </label>
            </div>
            <button
              type="submit"
              class=" mb-3 btn btn-primary mt-3 pl-4 pr-4"
              onClick={PostData}
            >
              Reset
            </button>
          </div>
        </form>
        <hr></hr>
        <div className=" container  col-sm-6 mw-80 col-md-4 col-lg-4  mx-auto mt-5 ">
          <h4>Loan EMI Calculator</h4>
          <div className="row mt-4">
            <div className="col-5 bg-warning p-2 ">
              Loan Emi <br /> {loanEmi}
            </div>
            <div className="col-1" />

            <div className="col-5  bg-info p-2">
              Total Intrest Payble <br /> {interest}
            </div>
            <div className="col-1" />
          </div>
          <div className="row ">
            <div className="col-11 bg-primary mt-4 p-2">
              Total Payment (Principle + Intrest) <br />
              {totalEmi}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EmiCalculate;
