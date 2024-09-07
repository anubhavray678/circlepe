"use client";
import { useRouter } from "next/navigation";
import PersonIcon from "@mui/icons-material/Person";
import BadgeIcon from "@mui/icons-material/Badge";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import BrandingWatermarkIcon from "@mui/icons-material/BrandingWatermark";
import BottomNavBar from "@/components/BottomNavigation/BottomNavBar";
import Link from "next/link";
export default function Payment() {
  const router = useRouter();
  return (
    <>
      <div className=" flex justify-center items-center min-h-screen pt-5 pb-20">
        <div className="bg-white shadow rounded-2xl w-full max-w-md p-6">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-2">
              Circle <span className="text-blue-500">App</span>
            </h1>
            <p className="text-lg text-gray-600">
              Rent at <span className="text-blue-500 font-semibold">Zero</span>{" "}
              security deposit
              <span className="text-yellow-400">✨</span>
            </p>
          </div>

          <div className="mt-6">
            <p className="text-center text-gray-500 mb-4">
              Set-up No Cost EMI in 3 steps
            </p>
            <div className="shadow-lg">
              <div className=" rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                    1
                  </div>
                  <h2 className="ml-3 text-blue-500 font-semibold bg-blue-100 rounded-full pl-5 pr-5 pt-2 pb-2">
                    Eligibility check
                  </h2>
                </div>
                <div className="mt-4 ml-11">
                  <div className="flex items-center mb-2">
                    <span className="material-icons text-blue-500">
                      <PersonIcon />
                    </span>
                    <p className="ml-3 text-gray-600">
                      Basic Details{" "}
                      <span className="text-xs">
                        <br />
                        PAN & DOB
                      </span>
                    </p>
                  </div>
                  <div className="text-blue-500">|</div>
                  <div className="flex items-center">
                    <span className="material-icons text-blue-500">
                      <BadgeIcon />
                    </span>

                    <p className="ml-3 text-gray-600">
                      Work Details{" "}
                      <span className="text-xs">
                        <br />
                        Employment details
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                    2
                  </div>
                  <h2
                    className="ml-3 text-blue-500 font-semibold 
              bg-blue-100 rounded-full pl-5 pr-5 pt-2 pb-2
              "
                  >
                    Setup AutoPay
                  </h2>
                </div>
                <div className="mt-4 ml-11">
                  <div className="flex items-center mb-2">
                    <span className="material-icons text-blue-500">
                      <AccountBalanceIcon />
                    </span>
                    <p className="ml-3 text-gray-600">
                      Bank Details{" "}
                      <span className="text-xs">
                        <br />
                        Salary account details
                      </span>
                    </p>
                  </div>
                  <div className="text-blue-500">|</div>
                  <div className="flex items-center">
                    <span className="material-icons text-blue-500">
                      <BrandingWatermarkIcon />
                    </span>
                    <p className="ml-3 text-gray-600">
                      Identity Verification{" "}
                      <span className="text-xs">
                        <br />
                        Selfie & Aadhaar KYC
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className=" rounded-lg p-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 rounded-full">
                    3
                  </div>
                  <h2 className="ml-3 text-blue-500 font-semibold bg-blue-100 rounded-full pl-5 pr-5 pt-2 pb-2">
                    Move-In
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <form>
            <div className="mt-6 flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                required
              />
              <label for="terms" className="ml-2 text-gray-600 text-sm">
                By clicking this, you approved to our
                <a href="#" className="text-blue-500">
                  terms and conditions
                </a>{" "}
                and
                <a href="#" className="text-blue-500">
                  privacy policy
                </a>
              </label>
            </div>

            <div className="mt-6">
              <Link href={"/conform"}>
                <button
                  className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition duration-300"
                  type="submit"
                >
                  Get Started →
                </button>
              </Link>
            </div>
          </form>
          <div className="mt-6">
            <button
              onClick={() => router.back()}
              className="w-full text-blue-600 py-3 rounded-lg transition duration-300"
            >
              Go back
            </button>
          </div>
        </div>
      </div>
      <BottomNavBar />
    </>
  );
}
