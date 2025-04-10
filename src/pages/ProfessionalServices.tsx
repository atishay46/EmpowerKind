import React from "react";
import { Link } from "react-router-dom";
import { Heart, Users, Briefcase, Clock, Award, Building2 } from "lucide-react";

const ProfessionalServices = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-empowerkind-coral text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Services</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Join our network of professionals making a difference in the lives of specially-abled children.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="text-empowerkind-coral h-10 w-10" />,
              title: "Medical Professionals",
              description: "Doctors, therapists, and healthcare specialists providing specialized care and treatment."
            },
            {
              icon: <Users className="text-empowerkind-blue h-10 w-10" />,
              title: "Educational Experts",
              description: "Special educators, counselors, and learning specialists supporting academic development."
            },
            {
              icon: <Briefcase className="text-empowerkind-purple h-10 w-10" />,
              title: "Career Counselors",
              description: "Professionals guiding specially-abled youth towards meaningful career paths."
            }
          ].map((service, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="bg-empowerkind-lightPurple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-empowerkind-darkPurple mb-8">How to Get Involved</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">For Professionals</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Clock className="h-5 w-5 text-empowerkind-coral mr-2 mt-1" />
                  <span>Flexible time commitment options</span>
                </li>
                <li className="flex items-start">
                  <Award className="h-5 w-5 text-empowerkind-coral mr-2 mt-1" />
                  <span>Professional development opportunities</span>
                </li>
                <li className="flex items-start">
                  <Building2 className="h-5 w-5 text-empowerkind-coral mr-2 mt-1" />
                  <span>Network with other professionals</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-block bg-empowerkind-purple text-white px-6 py-2 rounded-full hover:bg-empowerkind-darkPurple transition-colors"
              >
                Register as a Professional
              </Link>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">For Organizations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-empowerkind-coral mr-2 mt-1" />
                  <span>Partner with our network</span>
                </li>
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-empowerkind-coral mr-2 mt-1" />
                  <span>Corporate social responsibility programs</span>
                </li>
                <li className="flex items-start">
                  <Briefcase className="h-5 w-5 text-empowerkind-coral mr-2 mt-1" />
                  <span>Employee engagement opportunities</span>
                </li>
              </ul>
              <Link
                to="/contact"
                className="mt-6 inline-block bg-empowerkind-purple text-white px-6 py-2 rounded-full hover:bg-empowerkind-darkPurple transition-colors"
              >
                Partner with Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-empowerkind-darkPurple mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Together with our professional network, we're creating lasting change in the lives of specially-abled children.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "500+", label: "Professional Volunteers" },
            { number: "50+", label: "Partner Organizations" },
            { number: "10,000+", label: "Hours of Service" }
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-md">
              <p className="text-4xl font-bold text-empowerkind-purple mb-2">{stat.number}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-empowerkind-purple/90 to-empowerkind-darkPurple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Make a Difference with Your Expertise
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Join our network of professionals and help create a more inclusive world for specially-abled children.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="bg-white text-empowerkind-darkPurple hover:bg-empowerkind-yellow transition-colors duration-300 font-medium px-6 py-3 rounded-full shadow-md"
            >
              Register Now
            </Link>
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors duration-300 font-medium px-6 py-3 rounded-full"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalServices; 