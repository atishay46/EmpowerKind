import React from "react";
import { Check, Clock, CalendarClock, Users, Award, HandHeart } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const GetInvolved = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Application submitted!",
      description: "Thank you for your interest. We'll be in touch soon.",
      variant: "default",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-empowerkind-yellow text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-empowerkind-darkPurple">Get Involved</h1>
          <p className="text-xl md:text-2xl mb-8 text-empowerkind-darkPurple/80">
            Join our mission to empower specially-abled children and make a lasting difference.
          </p>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">Ways to Help</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            There are many ways you can contribute to our mission. Find the role that best suits your interests and availability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col h-full">
            <div className="h-14 w-14 bg-empowerkind-purple/10 rounded-full flex items-center justify-center mb-6">
              <Clock className="h-7 w-7 text-empowerkind-purple" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Volunteer</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Contribute your time and skills to directly support our programs and the children we serve.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Event support</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Administrative assistance</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Recreational activities</span>
              </li>
            </ul>
            <a 
              href="#volunteer-form" 
              className="text-empowerkind-purple font-medium hover:text-empowerkind-darkPurple inline-flex items-center"
            >
              Apply to volunteer
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col h-full">
            <div className="h-14 w-14 bg-empowerkind-coral/10 rounded-full flex items-center justify-center mb-6">
              <Award className="h-7 w-7 text-empowerkind-coral" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Sponsor</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Partner with us as a corporate sponsor to help fund our programs and raise awareness.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Program sponsorship</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Event sponsorship</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>In-kind donations</span>
              </li>
            </ul>
            <a 
              href="#sponsor-form" 
              className="text-empowerkind-purple font-medium hover:text-empowerkind-darkPurple inline-flex items-center"
            >
              Become a sponsor
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 flex flex-col h-full">
            <div className="h-14 w-14 bg-empowerkind-blue/10 rounded-full flex items-center justify-center mb-6">
              <HandHeart className="h-7 w-7 text-empowerkind-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Professional Services</h3>
            <p className="text-gray-600 mb-6 flex-grow">
              Contribute your professional expertise to help our organization or the children we serve.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Medical services</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Education & therapy</span>
              </li>
              <li className="flex items-start">
                <Check className="h-5 w-5 text-empowerkind-coral mr-2 mt-0.5 flex-shrink-0" />
                <span>Legal & consulting</span>
              </li>
            </ul>
            <a 
              href="#professional-form" 
              className="text-empowerkind-purple font-medium hover:text-empowerkind-darkPurple inline-flex items-center"
            >
              Offer services
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section id="volunteer-form" className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-title">Join Our Team</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below, and we'll contact you with opportunities that match your interests and availability.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="form-label">First Name</label>
                <input type="text" id="firstName" className="input-field" required />
              </div>
              <div>
                <label htmlFor="lastName" className="form-label">Last Name</label>
                <input type="text" id="lastName" className="input-field" required />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="input-field" required />
            </div>

            <div className="mb-6">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="tel" id="phone" className="input-field" required />
            </div>

            <div className="mb-6">
              <label className="form-label">I'm interested in:</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {[
                  "Volunteering",
                  "Corporate Sponsorship",
                  "Professional Services",
                  "Event Support",
                  "Fundraising",
                  "Other"
                ].map((option) => (
                  <div key={option} className="flex items-center">
                    <input
                      type="checkbox"
                      id={option.toLowerCase().replace(" ", "-")}
                      className="h-5 w-5 rounded border-gray-300 text-empowerkind-purple focus:ring-empowerkind-purple"
                    />
                    <label
                      htmlFor={option.toLowerCase().replace(" ", "-")}
                      className="ml-2 text-gray-700"
                    >
                      {option}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="availability" className="form-label">Availability</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  "Weekdays",
                  "Weekends",
                  "Evenings",
                  "Mornings",
                  "Afternoons",
                  "Flexible"
                ].map((time) => (
                  <div key={time} className="flex items-center">
                    <input
                      type="checkbox"
                      id={time.toLowerCase()}
                      className="h-5 w-5 rounded border-gray-300 text-empowerkind-purple focus:ring-empowerkind-purple"
                    />
                    <label
                      htmlFor={time.toLowerCase()}
                      className="ml-2 text-gray-700"
                    >
                      {time}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="skills" className="form-label">Skills & Experience</label>
              <textarea
                id="skills"
                rows={4}
                className="input-field"
                placeholder="Tell us about your relevant skills, experience, or qualifications"
              ></textarea>
            </div>

            <div className="mb-6">
              <label htmlFor="reason" className="form-label">Why do you want to get involved?</label>
              <textarea
                id="reason"
                rows={4}
                className="input-field"
                placeholder="Share why you're interested in supporting our mission"
              ></textarea>
            </div>

            <div className="mb-6 flex items-start">
              <input
                type="checkbox"
                id="agreement"
                className="h-5 w-5 mt-1 rounded border-gray-300 text-empowerkind-purple focus:ring-empowerkind-purple"
                required
              />
              <label htmlFor="agreement" className="ml-2 text-gray-700 text-sm">
                I understand that by submitting this form, I agree to be contacted by EmpowerKind regarding volunteer opportunities. EmpowerKind respects your privacy and will not share your information with third parties.
              </label>
            </div>

            <button type="submit" className="w-full btn-primary py-4">
              Submit Application
            </button>
          </form>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section id="sponsor-form" className="bg-empowerkind-darkPurple text-white py-16 md:py-24 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Corporate Partnerships</h2>
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Partner with us to make a meaningful impact while enhancing your corporate social responsibility initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-empowerkind-purple/20 rounded-full flex items-center justify-center mr-4">
                    <Award className="h-5 w-5 text-empowerkind-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Brand Visibility</h3>
                    <p className="text-white/70">
                      Gain visibility through our events, website, and marketing materials while supporting a worthy cause.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-empowerkind-purple/20 rounded-full flex items-center justify-center mr-4">
                    <Users className="h-5 w-5 text-empowerkind-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Employee Engagement</h3>
                    <p className="text-white/70">
                      Create meaningful volunteer opportunities for your team that foster camaraderie and purpose.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 bg-empowerkind-purple/20 rounded-full flex items-center justify-center mr-4">
                    <CalendarClock className="h-5 w-5 text-empowerkind-yellow" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customized Partnerships</h3>
                    <p className="text-white/70">
                      We work with you to create partnership opportunities that align with your company's values and objectives.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <a
                  href="#"
                  className="bg-empowerkind-yellow hover:bg-empowerkind-yellow/90 text-empowerkind-darkPurple font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block"
                >
                  Download Partnership Brochure
                </a>
              </div>
            </div>

            <div>
              <form className="bg-white rounded-xl p-8 text-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-empowerkind-darkPurple">Partner With Us</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input type="text" id="companyName" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="contactPerson" className="form-label">Contact Person</label>
                    <input type="text" id="contactPerson" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="contactEmail" className="form-label">Email Address</label>
                    <input type="email" id="contactEmail" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="contactPhone" className="form-label">Phone Number</label>
                    <input type="tel" id="contactPhone" className="input-field" />
                  </div>
                  
                  <div>
                    <label htmlFor="partnershipInterest" className="form-label">Partnership Interest</label>
                    <select id="partnershipInterest" className="input-field">
                      <option value="">Select option</option>
                      <option value="event">Event Sponsorship</option>
                      <option value="program">Program Sponsorship</option>
                      <option value="inkind">In-kind Donation</option>
                      <option value="employee">Employee Volunteering</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="form-label">Additional Information</label>
                    <textarea id="message" rows={4} className="input-field"></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      toast({
                        title: "Request sent!",
                        description: "We'll be in touch with partnership opportunities.",
                        variant: "default",
                      });
                    }}
                    className="w-full bg-empowerkind-purple hover:bg-empowerkind-darkPurple text-white font-medium py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Send Request
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInvolved;
