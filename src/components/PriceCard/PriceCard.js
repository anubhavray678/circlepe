import { useState } from "react";
import PayButton from "../Pay/PayButton";

const PriceCard = ({ price }) => {
  const [selectedPeriod, setSelectedPeriod] = useState("3");

  const getPaymentDetails = (period) => {
    let monthlyPayment, securityDeposit, total;

    switch (period) {
      case "3":
        monthlyPayment = price;
        securityDeposit = 0;
        total = monthlyPayment * 3 + securityDeposit;
        break;
      case "6":
        monthlyPayment = price;
        securityDeposit = 0;
        total = monthlyPayment * 6 + securityDeposit;
        break;
      case "9":
        monthlyPayment = price;
        securityDeposit = 0;
        total = monthlyPayment * 9 + securityDeposit;
        break;
      default:
        return {};
    }

    return { period, monthlyPayment, securityDeposit, total };
  };

  const paymentDetails = getPaymentDetails(selectedPeriod);

  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col items-center justify-center ">
        <div className="bg-white  w-80 pt-5 pl-2 pr-2">
          <p className="font-semibold pl-2"> Select Period </p>
          <div className="flex justify-around mb-4 rounded-lg shadow-lg pt-5 pb-5">
            <button
              className={`px-4 py-2 rounded  border-blue-400 border text-blue-400 ${
                selectedPeriod === "3"
                  ? "bg-blue-500 text-white rounded-3xl"
                  : "bg-gray-200 rounded-3xl"
              }`}
              onClick={() => setSelectedPeriod("3")}
            >
              3 Months
            </button>
            <button
              className={`px-4 py-2 rounded  border-blue-400 border text-blue-400 ${
                selectedPeriod === "6"
                  ? "bg-blue-500 text-white rounded-3xl"
                  : "bg-gray-200 rounded-3xl"
              }`}
              onClick={() => setSelectedPeriod("6")}
            >
              6 Months
            </button>
            <button
              className={`px-4 py-2 rounded  border-blue-400 border text-blue-400 ${
                selectedPeriod === "9"
                  ? "bg-blue-500 text-white rounded-3xl"
                  : "bg-gray-200 rounded-3xl"
              }`}
              onClick={() => setSelectedPeriod("9")}
            >
              9 Months
            </button>
          </div>
          <p className="font-semibold"> Payment Details </p>
          <div className="bg-white-100  rounded-lg shadow-lg">
            <div className="p-4">
              <div className="w-full flex justify-between">
                <div>Period:</div>
                <p>{paymentDetails.period} Months</p>
              </div>
              <div className="w-full flex justify-between">
                <div>Monthly Payment:</div>
                <p>₹{paymentDetails.monthlyPayment}</p>
              </div>
              <div className="w-full flex justify-between">
                <div>Security Deposit:</div>
                <p>₹{paymentDetails.securityDeposit}</p>
              </div>
            </div>
            <p className="bg-blue-100 rounded-b-xl p-5 flex justify-between">
              <strong>Total:</strong> ₹{paymentDetails.total}
            </p>
          </div>
        </div>
      </div>

      <PayButton />
    </div>
  );
};

export default PriceCard;
