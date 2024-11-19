// import React, { useState, useContext } from 'react';
// import { AuthContext } from "../store/AuthContext.jsx";
//
// const Signup = () => {
//   const { signUp } = useContext(AuthContext); // Getting the signUp function from the AuthContext
//
//   // State to manage form fields
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [username, setUsername] = useState('');
//
//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault(); // Prevent page reload
//
//     const creds = { email, password, username };
//     signUp(creds); // Call the signUp function with the form data
//   };
//
//   return (
//       <div className="min-h-screen bg-base-200 flex items-center justify-center">
//         <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
//           <figure className="lg:w-1/2">
//             <img src="https://pixeldojo.ai/_next/image?url=https%3A%2F%2Fcdn.pixeldojo.ai%2Fpixeldojo%2Fgenerated-images%2F1717789940303-e8bzji1hz.png&w=3840&q=75" alt="Signup Image" className="object-cover w-full h-full" />
//           </figure>
//           <div className="card-body lg:w-1/2">
//             <h2 className="card-title text-2xl font-bold mb-6">Join Us</h2>
//
//             <form onSubmit={handleSubmit}> {/* Add onSubmit handler */}
//               <div className="form-control">
//                 <label className="label">
//                   <span className="label-text">Username</span>
//                 </label>
//                 <input
//                     type="text"
//                     placeholder="Username"
//                     className="input input-bordered"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)} // Handle input changes
//                 />
//               </div>
//
//               <div className="form-control mt-4">
//                 <label className="label">
//                   <span className="label-text">Email</span>
//                 </label>
//                 <input
//                     type="email"
//                     placeholder="email@example.com"
//                     className="input input-bordered"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)} // Handle input changes
//                 />
//               </div>
//
//               <div className="form-control mt-4">
//                 <label className="label">
//                   <span className="label-text">Password</span>
//                 </label>
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     className="input input-bordered"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)} // Handle input changes
//                 />
//               </div>
//
//               <div className="form-control mt-6">
//                 <button className="btn btn-primary w-full" type="submit">Sign Up</button> {/* Submit button */}
//               </div>
//             </form>
//
//             <div className="divider">OR</div>
//
//             <div className="form-control">
//               <button className="btn btn-outline w-full">Sign up with GitHub</button>
//             </div>
//           </div>
//         </div>
//       </div>
//   );
// };
//
// export default Signup;
import React, { useState, useContext } from 'react';
import { AuthContext } from "../store/AuthContext.jsx"

const Signup = () => {
  const { signUp, loading } = useContext(AuthContext); // Use the signUp function from context
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent page refresh
    if (email && password) {
      try {
        await signUp({ email, password });
        console.log('Sign Up successful!');
      } catch (err) {
        console.error('Sign Up failed:', err.message);
      }
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
          <figure className="lg:w-1/2">
            <img
                src="https://img.freepik.com/premium-vector/vector-frog-character-wizard-wearing-magic-hat-magic-wand-with-star-sticker-trendy-cartoon_615232-1913.jpg"
                alt="Signup Image"
                className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl font-bold mb-6">Join Us</h2>
            <form onSubmit={handleSignup}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    placeholder="email@example.com"
                    className="input input-bordered"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="form-control mt-4">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                    type="password"
                    placeholder="Password"
                    className="input input-bordered"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}>
                  {loading ? 'Signing Up...' : 'Sign Up'}
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="form-control">
              <button className="btn btn-outline w-full">Sign up with GitHub</button>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Signup;
