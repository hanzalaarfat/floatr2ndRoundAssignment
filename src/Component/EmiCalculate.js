import { React, useState } from "react";
import { useHistory } from "react-router-dom";

function EmiCalculate() {
  const history = useHistory();
  const [amount, setAmount] = useState();
  const [month, setMonth] = useState();
  const [rate, setRate] = useState();

  const PostData = async (e) => {
    e.preventDefault();
    if (!amount || !month || !rate) {
      alert("Please Enter all the fields Properly");
    } else {
      localStorage.setItem("amount", amount);
      localStorage.setItem("month", month);
      localStorage.setItem("rate", rate);

      let perMontIntrest = rate / 100 / 12;

      let all = Math.pow(1 + perMontIntrest, month);
      let bottom = all - 1;
      let sp = all / bottom;
      let loanEmi = Math.ceil(amount * perMontIntrest * sp);
      let totalEmi = Math.ceil(month * loanEmi);
      let interest = Math.ceil(totalEmi - amount);

      console.log(loanEmi, totalEmi, interest);

      localStorage.setItem("loanEmi", loanEmi);
      localStorage.setItem("totalEmi", totalEmi);
      localStorage.setItem("interest", interest);

      history.push("/emi");
    }
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
                  onChange={(e) => setAmount(e.target.value)}
                  value={amount}
                  name="amount"
                  id="floatingInput"
                  placeholder="Enter Amount"
                />
              </div>
              <label for="inputLoan" class="col-sm-1 col-form-label">
                INR
              </label>
            </div>

            <div class="form-group row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">
                Loan Tenure
              </label>
              <div class="col-sm-8">
                <input
                  type="Number"
                  className="form-control"
                  id="floatingMonth"
                  onChange={(e) => setMonth(e.target.value)}
                  value={month}
                  name="month"
                  placeholder="Enter Month"
                />
              </div>
              <label for="inputEmail3" class="col-sm-1 col-form-label">
                Month
              </label>
            </div>

            <div class="form-group row mb-3">
              <label for="inputEmail3" class="col-sm-3 col-form-label">
                Intrest Rate
              </label>
              <div class="col-sm-8">
                <input
                  type="number"
                  className="form-control"
                  id="floatingPassword"
                  onChange={(e) => setRate(e.target.value)}
                  value={rate}
                  name="text"
                  placeholder="NN.NN"
                />
              </div>
              <label for="inputEmail3" class="col-sm-1 col-form-label">
                %
              </label>
            </div>
            <button
              type="submit"
              class=" mb-3 btn btn-primary mt-3 pl-4 pr-4"
              onClick={PostData}
            >
              Calculate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EmiCalculate;
