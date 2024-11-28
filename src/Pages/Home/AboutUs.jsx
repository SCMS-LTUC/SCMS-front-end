import { FaLinkedin, FaGithub } from "react-icons/fa";
import filifl from "./flifil.jpg"
import MohammedAlzoubi from "./MohammedAlzoubi.jpg"

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-secondary mb-4">About Us</h1>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          We are a passionate team dedicated to creating innovative solutions
          that make a difference. Our mission is to build high-quality software
          that serves the needs of our users.
        </p>
      </div>

      {/* Our Mission Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYWTL5nmlTDCynKlDkjzbDjd3MXmylvDX3eQ&s"
              alt="Our Mission"
              className="rounded-lg shadow-lg w-4/5 h-auto"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-semibold text-secondary mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-gray-700">
              Our mission is to innovate and create software that empowers
              individuals and businesses to reach their goals more effectively
              and efficiently. We strive for excellence and ensure that every
              project delivers the highest quality.
            </p>
          </div>
        </div>
      </div>


      {/* Our Values Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-secondary mb-6">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                We constantly innovate, ensuring that we stay ahead of trends to
                offer cutting-edge solutions to our users.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                We uphold the highest standards of integrity in all our actions,
                delivering transparent and honest results.
              </p>
            </div>
            <div className="p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-transform transform hover:scale-105">
              <h3 className="text-xl font-bold text-secondary mb-4">
                Collaboration
              </h3>
              <p className="text-gray-600">
                We believe in the power of teamwork, collaborating to deliver
                impactful results that benefit everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-semibold text-secondary mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Team Member 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Dima Salem
            </h3>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Team Member 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img
              src={MohammedAlzoubi}
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mohammed Alzoubi
            </h3>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          {/* Team Member 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQHfcWmWT7urKg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1726987185746?e=1738195200&v=beta&t=-XIWhkwwRn0UxKWGMRqRqjQmksJJEi0AcOmZzB7pp-Q"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mohammad Alfarwan
            </h3>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          {/* Team Member 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img
              src={filifl}
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mohammad Flifil
            </h3>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          {/*        https://via.placeholder.com/150       */}
          {/* Team Member 5 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E03AQHK2McEwDX_Jw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718215430033?e=1738195200&v=beta&t=Epk79aSZq1VucqdrcahxUUSrpFBi0bAZvF2hCcTzoXw"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Saja Fawaz
            </h3>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
          {/* Team Member 6 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D03AQH_E9LCx0NUmg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1641256149955?e=1738195200&v=beta&t=hto-5APijJnbgwCNvq7lIRmnEm4CrVTA1SWhJAQ565c"
              alt="Team Member"
              className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Mustapha Al-Huneity
            </h3>
            <p className="text-gray-600 mb-4">Software Engineer</p>
            <div className="flex justify-center space-x-4">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:text-[#178f69] transition-colors"
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
