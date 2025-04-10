import React from "react";
import { Link } from "react-router-dom";
import { Heart, Gift, HandHeart, Users } from "lucide-react";

const Index = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient relative">
        <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-empowerkind-darkPurple leading-tight">
              Helping Special Children <span className="text-empowerkind-coral">Shine</span> Brighter
            </h1>
            <p className="text-lg md:text-xl text-gray-700">
              Join our mission to empower specially-abled children through love, support, and inclusive opportunities.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link to="/donate" className="btn-primary">
                Donate Now
              </Link>
              <Link to="/get-involved" className="btn-secondary">
                Get Involved
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-empowerkind-yellow/30 rounded-full"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-empowerkind-coral/30 rounded-full"></div>
              <img
                src="https://scoonews.com/wp-content/uploads/2022/07/amitabh-mehrotra14985524951498552495.jpg"
                alt="Children playing together"
                className="w-full h-auto object-cover rounded-2xl shadow-xl relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How We Help Section */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">How We Help</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our programs provide comprehensive support to specially-abled children and their families.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Heart className="text-empowerkind-coral h-10 w-10" />,
              title: "Healthcare Support",
              description: "Access to specialized medical care, therapy, and rehabilitation services."
            },
            {
              icon: <Gift className="text-empowerkind-blue h-10 w-10" />,
              title: "Educational Resources",
              description: "Learning materials, assistive technology, and scholarship opportunities."
            },
            {
              icon: <HandHeart className="text-empowerkind-purple h-10 w-10" />,
              title: "Family Assistance",
              description: "Counseling, training, and financial aid for families and caregivers."
            },
            {
              icon: <Users className="text-empowerkind-yellow h-10 w-10" />,
              title: "Inclusive Activities",
              description: "Recreational programs and social events promoting community integration."
            }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold text-center mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600 text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-empowerkind-lightPurple py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="section-title">Our Impact</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Every donation makes a difference in the lives of specially-abled children.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { number: "1,200+", label: "Children Supported" },
              { number: "150+", label: "Community Partners" },
              { number: "5,000+", label: "Volunteer Hours" }
            ].map((stat, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <p className="text-4xl font-bold text-empowerkind-purple mb-2">{stat.number}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-container">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-shadow flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img 
              src="https://t3.ftcdn.net/jpg/07/40/45/56/360_F_740455685_cCQubv0OcWYzPMotsfsjxTrZN3YFbae8.jpg"
              alt="Meera Patel"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:w-1/2 p-8 flex flex-col justify-center">
            <span className="text-sm text-empowerkind-coral font-semibold uppercase tracking-wider mb-3">Featured Story</span>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Meera</h2>
            <p className="text-gray-600 mb-6">
              Meera was born with cerebral palsy and faced challenges accessing quality education. Through our support program, she received specialized education assistance and therapy. Today, she's pursuing law at a prestigious university in Mumbai, determined to advocate for others with disabilities.
            </p>
            <Link to="/stories" className="text-empowerkind-purple font-medium hover:text-empowerkind-darkPurple flex items-center">
              Read more stories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-empowerkind-purple/90 to-empowerkind-darkPurple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Together, We Can Make a Difference
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Your support can help a child with special needs reach their full potential. Donate today or join our volunteer team.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate" className="bg-white text-empowerkind-darkPurple hover:bg-empowerkind-yellow transition-colors duration-300 font-medium px-6 py-3 rounded-full shadow-md">
              Make a Donation
            </Link>
            <Link to="/get-involved" className="bg-transparent border-2 border-white text-white hover:bg-white/10 transition-colors duration-300 font-medium px-6 py-3 rounded-full">
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
