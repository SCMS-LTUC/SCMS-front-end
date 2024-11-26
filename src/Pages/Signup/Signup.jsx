const Signup = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Sign Up</h2>
                <form>
                    {/* Full Name Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="fullName"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20B486]"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20B486]"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20B486]"
                            placeholder="Create a password"
                            required
                        />
                    </div>

                    {/* Confirm Password Input */}
                    <div className="mb-4">
                        <label
                            htmlFor="confirmPassword"
                            className="block text-sm font-medium text-gray-700 mb-2">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#20B486]"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#20B486] text-white font-medium rounded-md hover:bg-[#178f69]">
                        Sign Up
                    </button>
                </form>

                {/* Additional Links */}
                <div className="text-center mt-6 text-sm">
                    <p className="text-gray-600">
                        Already have an account?{' '}
                        <a href="/login" className="text-[#20B486] hover:underline">
                            Login here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
