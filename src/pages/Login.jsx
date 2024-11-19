import React, { useContext, useState } from 'react';
import { AuthContext } from '../store/AuthContext.jsx';

const Login = () => {
  const auth = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const credentials = { email, password };
    auth.signIn(credentials, () => {
      console.log('Successfully logged in');
    });
  };

  return (
      <div className="bg-base-200 min-h-screen flex items-center justify-center">
        <div className="card lg:card-side bg-base-100 shadow-xl max-w-4xl w-full">
          <figure className="lg:w-1/2">
            <img
                src="https://picsum.photos/seed/login/800/600"
                alt="Random"
                className="object-cover w-full h-full"
            />
          </figure>
          <div className="card-body lg:w-1/2">
            <h2 className="card-title text-2xl font-bold mb-6">Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    className="input input-bordered"
                    placeholder="email@example.com"
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
                    className="input input-bordered"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary" type="submit">
                  Login
                </button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="text-center">
              <p>Don't have an account?</p>
              <a href="/signup" className="link link-primary">
                Sign up now
              </a>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Login;
