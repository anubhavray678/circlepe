import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CelebrationIcon from "@mui/icons-material/Celebration";
export default function Conform() {
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen pt-5 pb-20">
        <div className="bg-white shadow rounded-2xl w-full max-w-md p-6">
          {/* Progress Bar */}
          <div className="flex w-full justify-center p-4 ">
            <div className="flex items-center space-x-4">
              <div className="bg-green-100 text-green-800 font-semibold py-2 px-4 rounded text-sm">
                Setup Autopay
              </div>
              <div className="bg-green-100 text-green-800 py-2 px-4 rounded font-semibold text-sm">
                Setup Autopay
              </div>
              <div className="bg-blue-100 text-blue-600 font-semibold py-2 px-4 rounded shadow-lg text-sm">
                KYC & move-in
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex flex-col items-center p-6 bg-white rounded-lg mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              One step away ✨
            </h2>
            <p className="text-blue-500 font-semibold text-lg mb-4">
              from your dream home
            </p>

            {/* Celebration Icon */}
            <div className="bg-blue-100 p-10 rounded-full mb-4">
              <CelebrationIcon className="scale-150 text-blue-500" />
            </div>

            {/* EMI Details */}
            <div className="bg-blue-100 text-blue-500 font-semibold py-1 px-4 rounded mb-4">
              Rent converted to Zero-Cost EMI
            </div>

            {/* Rent Details */}
            <div className="w-full text-left mb-4">
              <div className="flex justify-between">
                <span className="text-gray-700">Co-living partner</span>
                <span className="text-gray-500">Rent-OK</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Payment Amount</span>
                <span className="text-gray-500">INR XXXX.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Monthly rent</span>
                <span className="text-gray-500">10,000 INR/mo.</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-700">Rent cycle</span>
                <span className="text-gray-500">5 Months</span>
              </div>
            </div>

            {/* EMI Button */}
            <button className="bg-green-100 text-green-600 font-semibold py-2 px-6 rounded mb-4">
              Zero COST EMI
            </button>

            {/* Terms & Conditions */}
            <p className="text-gray-500 text-sm text-center">
              By clicking on next, you acknowledge that you have read{" "}
              <a href="#" className="text-blue-500 underline">
                Loan Agreement
              </a>{" "}
              &{" "}
              <a href="#" className="text-blue-500 underline">
                KFS
              </a>{" "}
              agreed to the terms and conditions contained in the loan
              agreement.
            </p>
          </div>

          {/* Continue Button */}
          <div className="flex justify-center">
            <button className="bg-blue-500 text-white py-2 px-8 rounded mt-6 w-full ">
              Continue &gt;
            </button>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </>
  );
}
