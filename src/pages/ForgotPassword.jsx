import React, { useState } from 'react';
import NewPassword from './NewPassword'; // Import the NewPassword component

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email address is invalid';
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle form submission
      console.log('Email:', email);
      setMessage('If this email is registered, a password reset link will be sent to it.');
      setShowNewPassword(true); // Show the NewPassword component
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      {!showNewPassword ? (
        <>
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
            <p className="text-center text-gray-600">Enter your email to receive a password reset link</p>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={email}
                      onChange={handleChange}
                      required
                      className="block w-full h-10 shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md pl-4"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    className="uppercase bg-green-600 p-2 px-10 rounded-lg text-white mt-1 font-semibold tracking-wider hover:bg-purple-50 duration-300 transition-all ease-in hover:text-green-600 border-2 border-green-600"
                  >
                    Submit
                  </button>
                </div>
              </form>
              {message && <p className="text-center text-green-600 mt-4">{message}</p>}
              <div className="mt-6">
                <div className="text-sm text-center">
                  <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Remembered your password? Sign in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <NewPassword email={email} />
      )}
    </div>
  );
}
