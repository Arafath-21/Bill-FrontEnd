import { decode } from 'html-entities';
import { toast } from 'react-hot-toast';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Pricing() {
  const indianRubee = decode('&#x20B9');

  const paymentHandler = (amount) => {
    // const res = await fetch('http://localhost:9000/api/payment', {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ amount: 500 }),
    // });
    // const final = await res.json();
    // console.log(final);
    console.log(amount, 'amount');

    var options = {
      key: 'rzp_test_BhRFOnt4sE99VP',
      key_secret: 'dZCdEmJ2iGAO0IoVWlHrXwqV',
      amount: amount * 100,
      currency: 'INR',
      name: 'GloBill',
      description: 'Yearly Subscription',
      handler: function (response) {
        toast.success('Your Payment Is Received');
      },
      prefill: {
        name: 'customer',
        email: 'custome@email.com',
        contact: '',
      },
      notes: {
        address: 'Razorpay Corporate office',
      },
      theme: {
        color: '#1e40af',
      },
    };
    var pay = new window.Razorpay(options);
    pay.open();
  };
  return (
    <section
      id="pricing"
      className="min-h-screen max-w-full bg-slate-200 px-4 py-6 pb-32 pt-14"
    >
      <div className="relative mx-auto mb-14 mt-6 flex h-36  items-center  bg-slate-900 bg-cover bg-center pb-3">
        <div className="absolute ml-3 h-[90%] w-[98%]  border-2 border-dashed border-green-500"></div>
        <h1 className=" w-full text-center text-6xl  font-extrabold  uppercase tracking-widest text-white">
          Pricing
        </h1>
      </div>
      <div className=" mx-auto flex max-w-6xl flex-col items-center justify-center space-y-4 pt-4 text-sm md:flex-row md:space-x-14 md:space-y-0  ">
        <div>
          <div className="card-container w-90  cursor-pointer rounded-md  bg-slate-50 px-16 py-6 text-center font-semibold shadow-md transition-all duration-300 hover:-translate-y-2 ">
            {/* card top box */}
            <div className="card-top p-3">
              <p className="mb-6 max-w-sm text-sm font-bold text-green-600">
                FREE
              </p>
              <p className="text-sm text-slate-700  ">
                <span className="font-sans text-6xl font-medium text-slate-800">
                  {indianRubee}0
                </span>
                /month
              </p>
            </div>
            <div className="card-details flex flex-col space-y-4 border-t-2 border-slate-700 text-left">
              <div className="mt-8">
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">Single user</span>
              </div>
              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold ">5GB Storage</span>
              </div>

              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">
                  Community Access
                </span>
              </div>

              <div className="text-slate-400">
                <IoCloseCircle
                  name="close-"
                  className="inline-block h-6 w-6 text-red-500"
                ></IoCloseCircle>
                <span className="text-md p-2 font-semibold">
                  Dedicated Phone Support
                </span>
              </div>
              <div className="text-slate-400">
                <IoCloseCircle
                  name="close-"
                  className="inline-block h-6 w-6 text-red-500"
                ></IoCloseCircle>
                <span className="text-md p-2 font-semibold">
                  Free Subdomain
                </span>
              </div>
              <div className="text-slate-400">
                <IoCloseCircle
                  name="close-"
                  className="inline-block h-6 w-6 text-red-500"
                ></IoCloseCircle>
                <span className="text-md p-2 font-semibold">
                  Monthly Status Reports
                </span>
              </div>
              <div className="pt-6 ">
                <Link to="/signup">
                  <button
                    className="text-md w-full rounded-2xl border-none bg-blue-700 p-3 font-semibold  text-white transition-all
                  duration-300 hover:-translate-y-1"
                  >
                    Get Started
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* standard */}
        <div>
          <div className="card-container w-90  cursor-pointer rounded-md  bg-slate-50 px-12 py-6 text-center font-semibold shadow-md transition-all duration-300 hover:-translate-y-2 ">
            {/* card top box */}
            <div className="card-top p-3">
              <p className="mb-6 max-w-sm text-sm font-bold text-green-600">
                PLUS
              </p>
              <p className="text-sm text-slate-700  ">
                <span className="font-sans text-6xl font-medium text-slate-800">
                  {indianRubee}499
                </span>
                /year
              </p>
            </div>
            <div className="card-details flex flex-col space-y-4 border-t-2 border-slate-500 text-left">
              <div className="mt-8">
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold ">5 users</span>
              </div>
              <div>
                <IoMdCheckmarkCircle className="inline-block h-6 w-6 text-green-500"></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold ">50GB Storage</span>
              </div>

              <div>
                <IoMdCheckmarkCircle className="inline-block h-6 w-6 text-green-500"></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">
                  Community Access
                </span>
              </div>

              <div>
                <IoMdCheckmarkCircle className="inline-block h-6 w-6 text-green-500"></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold ">
                  Dedicated Phone Support
                </span>
              </div>
              <div>
                <IoMdCheckmarkCircle className="inline-block h-6 w-6 text-green-500"></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">
                  Free Subdomain
                </span>
              </div>
              <div className="text-slate-400">
                <IoCloseCircle
                  name="close-outline"
                  className="inline-block h-6 w-6 text-red-500"
                ></IoCloseCircle>
                <span className="text-md p-2 font-semibold">
                  Monthly Status Reports
                </span>
              </div>
              <div className="pt-6 ">
                <button
                  onClick={() => paymentHandler(499)}
                  className="text-md w-full rounded-2xl border-none bg-blue-700 p-3 font-semibold  text-white transition-all
                  duration-300 hover:-translate-y-1"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Premium */}
        <div>
          <div className="card-container w-90  cursor-pointer rounded-md  bg-green-200 px-16 py-6 text-center font-semibold shadow-md transition-all duration-300 hover:-translate-y-2 ">
            {/* card top box */}
            <div className="card-top p-3">
              <p className="mb-6 max-w-sm text-sm font-bold text-green-600">
                PRO
              </p>
              <p className="text-sm text-slate-700  ">
                <span className="font-sans text-6xl font-medium text-slate-800">
                  {indianRubee}999
                </span>
                /year
              </p>
            </div>
            <div className="card-details flex flex-col space-y-4 border-t-2 border-slate-500 text-left">
              <div className="mt-8">
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2  font-bold">Unlimited users</span>
              </div>
              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2  font-bold">150GB Storage</span>
              </div>

              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">
                  Community Access
                </span>
              </div>

              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">
                  Dedicated Phone Support
                </span>
              </div>
              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2  font-bold">
                  Unlimited Free Subdomains
                </span>
              </div>
              <div>
                <IoMdCheckmarkCircle
                  name="checkmark-outline"
                  className="inline-block h-6 w-6 text-green-500"
                ></IoMdCheckmarkCircle>
                <span className="text-md p-2 font-semibold">
                  Monthly Status Reports
                </span>
              </div>
              <div className="pt-6 ">
                <button
                  onClick={() => paymentHandler(999)}
                  className="text-md w-full rounded-2xl border-none bg-blue-700 p-3 font-semibold  text-white transition-all
                  duration-300 hover:-translate-y-1"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
