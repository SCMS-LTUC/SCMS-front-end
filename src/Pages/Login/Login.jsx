const Login = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-sm bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">Login</h2>
                <form>
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
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 bg-[#20B486] text-white font-medium rounded-md hover:bg-[#178f69]">
                        Login
                    </button>
                </form>

                {/* Additional Links */}
                <div className="text-center mt-6 text-sm">
                    <p className="text-gray-600">
                        Don t have an account?{' '}
                        <a href="/register" className="text-[#20B486] hover:underline">
                            Register here
                        </a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
