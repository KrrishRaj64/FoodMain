import React,{useEffect,useRef} from "react";
import Lottie from "lottie-react";
import animationData from '../assets/Animation - 1731232629417 (1).json';
import { motion } from 'framer-motion';
import animationData1 from '../assets/Animation - 1731262377297.json';

const Cart = () => {
   const lottieRef = useRef(null);

  useEffect(() => {
    let direction = 1; // Start going forward
    const interval = setInterval(() => {
      if (lottieRef.current) {
        // Reverse direction each time the interval runs
        lottieRef.current.setDirection(direction);
        lottieRef.current.play();
        direction = -direction; // Toggle between 1 and -1
      }
    }, 2800); // 5-second interval for each direction change

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
    >
      <div className="bg-white text-black p-8 min-h-screen relative overflow-hidden">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-4 rounded-md bg-gray-100">
            <div className="flex items-center gap-4">
              {/* Lottie animation next to the Cart title */}
              <Lottie 
                animationData={animationData} 
                loop={true} 
                className="w-12 h-12" // Adjust size as needed
              />
              <h2 className="text-2xl font-bold text-black">Cart</h2>
            </div>
            <hr className="border-gray-300 mt-4 mb-8" />

            {/* Cart item details */}
            <div className="space-y-4">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-2 flex items-center gap-4">
                  <div className="w-24 h-24 shrink-0 p-2 rounded-md bg-white">
                    <img
                      src="https://media.licdn.com/dms/image/v2/D5603AQGIn9clwejNkw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1728665511573?e=1736985600&v=beta&t=ZvT_X1MYOqCBAnFxV19RQ_D5InWMbtYVFjGvkmFHaOk"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-black">
                      Manas Neeralagi Bondashekhar
                    </h3>
                    <h6 className="text-xs text-red-500 cursor-pointer mt-0.5">
                      Remove
                    </h6>

                    {/* Size and Quantity Controls */}
                    <div className="flex gap-4 mt-4">
                      <div className="relative group">
                        <button
                          type="button"
                          className="flex items-center px-2.5 py-1.5 border border-gray-300 text-black text-xs outline-none rounded-md"
                        >
                          XL
                        </button>
                      </div>
                      <div>
                        <button
                          type="button"
                          className="flex items-center px-2.5 py-1.5 border border-gray-300 text-black text-xs outline-none rounded-md"
                        >
                          <span className="mx-2.5">1</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto">
                  <h4 className="text-base font-bold text-black">$20.00</h4>
                </div>
              </div>
            </div>
          </div>

          {/* Promo and Summary Section */}
          <div className="rounded-md p-4 bg-gray-100 md:sticky top-0">
            <div className="flex border border-gray-300 overflow-hidden rounded-md">
              <input
                type="email"
                placeholder="Promo code"
                className="w-full outline-none text-white text-sm px-4 py-2.5 bg-white"
              />
              <button
                type="button"
                className="flex items-center justify-center font-semibold tracking-wide px-4 text-sm text-black"
              >
                Apply
              </button>
            </div>

            <ul className="mt-8 space-y-4 text-black">
              <li className="flex flex-wrap gap-4 text-base">
                Discount <span className="ml-auto font-bold">$0.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base">
                Shipping <span className="ml-auto font-bold">$2.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base">
                Tax <span className="ml-auto font-bold">$4.00</span>
              </li>
              <li className="flex flex-wrap gap-4 text-base font-bold">
                Total <span className="ml-auto">$52.00</span>
              </li>
            </ul>

            <div className="mt-8 space-y-2">
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide text-white bg-black rounded-md"
              >
                Checkout
              </button>
              <button
                type="button"
                className="text-sm px-4 py-2.5 w-full font-semibold tracking-wide text-black border border-gray-300 rounded-md"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Right Lottie Animation */}
        <motion.div
      initial={{ y: 10 }}
      animate={{
        y: [10, 10, 10], // Maintains y at 10
        x: [0, 0, 0],    // Maintains x at 0
      }}
    
      transition={{
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      }}
      className="fixed bottom-0 right-0 w-[400px] h-[400px] pointer-events-none"
    >
      <Lottie
        lottieRef={lottieRef}
        animationData={animationData1}
        loop={false} // Set loop to false for controlled playback
      />
    </motion.div>
      </div>
    </motion.div>
  );
};

export default Cart;
