const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="container mx-auto p-6 md:p-12 bg-white rounded-lg shadow-lg ">
        {/* Google Maps Section */}
        <div className="mt-12 mb-28">
          <h3 className="text-3xl font-bold text-center text-secondary mb-6 relative">
            <span className="inline-block pb-2 border-b-4 border-secondary">
              Our Location
            </span>
          </h3>

          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.3188896061233!2d35.87100838483998!3d31.89793198124632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151ca7e4aee722d5%3A0x8693a9183825010b!2z2YTZiNmF2YrZhtmI2LMg2KfZhNis2KfZhdi52YrYqSDYp9mE2KrZgtmG2YrYqSAiINmE2YjZhdmK2YbZiNizINmE2KfZitmBINio2YTYsyAi!5e0!3m2!1sar!2sjo!4v1732136153976!5m2!1sar!2sjo"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>

        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          {/* Image Section */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwp-n8tm5OscmWMkx5DN4-LCEcZBMXxL97mA&s"
              alt="Contact Us Illustration"
              className="rounded-lg shadow-md w-full"
            />
          </div>

          {/* Info Section */}
          <div className="w-full md:w-1/2 text-center md:text-left md:pl-8">
            <h2 className="text-4xl font-bold text-secondary mb-4">
              Get in Touch with Us!
            </h2>
            <p className="text-gray-600 mb-6">
              Have questions? We’re here to help! Reach out to us and our team
              will get back to you as soon as possible. We’d love to hear from
              you!
            </p>
            <div className="space-y-4">
              <div className="flex items-center justify-center md:justify-start">
                <i className="fas fa-phone text-secondary text-2xl mr-4"></i>
                <p className="text-gray-800 text-lg">+123-456-7890</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <i className="fas fa-envelope text-secondary text-2xl mr-4"></i>
                <p className="text-gray-800 text-lg">support@example.com</p>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <i className="fas fa-map-marker-alt text-secondary text-2xl mr-4"></i>
                <p className="text-gray-800 text-lg">
                  123 Green Street, City, Country
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center text-secondary mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Your Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full p-3 border rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-secondary"
                placeholder="Write your message here"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-secondary text-white font-medium rounded-md hover:bg-secondary-light"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Footer Section */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Follow us on Social Media
          </h3>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-secondary text-2xl hover:text-gray-600">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-secondary text-2xl hover:text-gray-600">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-secondary text-2xl hover:text-gray-600">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-secondary text-2xl hover:text-gray-600">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
