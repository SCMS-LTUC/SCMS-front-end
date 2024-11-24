import { FaLinkedin, FaGithub } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="bg-gray-100 py-12">
            {/* Header Section */}
            <div className="text-center mb-16">
                <h1 className="text-4xl font-bold text-[#20B486] mb-4">About Us</h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    We are a passionate team dedicated to creating innovative solutions that make a difference. Our mission is to build high-quality software that serves the needs of our users.
                </p>
            </div>

            {/* Our Mission Section */}
            <div className="container mx-auto px-4 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="w-full md:w-1/2 mb-8 md:mb-0">
                        <img
                            src="https://via.placeholder.com/600x400"
                            alt="Our Mission"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-semibold text-[#20B486] mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-700">
                            Our mission is to innovate and create software that empowers individuals and businesses to reach their goals more effectively and efficiently. We strive for excellence and ensure that every project delivers the highest quality.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="bg-white py-12">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-semibold text-[#20B486] mb-6">Our Values</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
                        <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-bold text-[#20B486] mb-4">Innovation</h3>
                            <p className="text-gray-600">
                                We constantly innovate, ensuring that we stay ahead of trends to offer cutting-edge solutions to our users.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-bold text-[#20B486] mb-4">Integrity</h3>
                            <p className="text-gray-600">
                                We uphold the highest standards of integrity in all our actions, delivering transparent and honest results.
                            </p>
                        </div>
                        <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
                            <h3 className="text-xl font-bold text-[#20B486] mb-4">Collaboration</h3>
                            <p className="text-gray-600">
                                We believe in the power of teamwork, collaborating to deliver impactful results that benefit everyone.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Team Section */}
            <div className="container mx-auto px-4 py-12 text-center">
                <h2 className="text-3xl font-semibold text-[#20B486] mb-6">Meet Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Team Member 1 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                        <p className="text-gray-600 mb-4">CEO & Founder</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                    {/* Team Member 2 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                        <p className="text-gray-600 mb-4">Lead Developer</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                    {/* Team Member 3 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sam Lee</h3>
                        <p className="text-gray-600 mb-4">UI/UX Designer</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                    {/* Team Member 4 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Alice Green</h3>
                        <p className="text-gray-600 mb-4">Project Manager</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                    {/* Team Member 5 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Michael Brown</h3>
                        <p className="text-gray-600 mb-4">Marketing Specialist</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                    {/* Team Member 6 */}
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="rounded-full mx-auto mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Sophia White</h3>
                        <p className="text-gray-600 mb-4">Software Engineer</p>
                        <div className="flex justify-center space-x-4">
                            <a
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaLinkedin size={24} />
                            </a>
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#20B486] hover:text-[#178f69] transition-colors"
                            >
                                <FaGithub size={24} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
