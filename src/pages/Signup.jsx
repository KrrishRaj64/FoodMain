import React from 'react';

const Signup = () => {
  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center">
      <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
        <figure className="lg:w-1/2">
          <img src="https://pixeldojo.ai/_next/image?url=https%3A%2F%2Fcdn.pixeldojo.ai%2Fpixeldojo%2Fgenerated-images%2F1717789940303-e8bzji1hz.png&w=3840&q=75" alt="Signup Image" className="object-cover w-full h-full" />
        </figure>
        <div className="card-body lg:w-1/2">
          <h2 className="card-title text-2xl font-bold mb-6">Join Us</h2>
          <form>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input type="text" placeholder="Username" className="input input-bordered" />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="email@example.com" className="input input-bordered" />
            </div>
            <div className="form-control mt-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="Password" className="input input-bordered" />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Sign Up</button>
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
