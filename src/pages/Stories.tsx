import React, { useState } from "react";
import { SearchIcon, ChevronRight, ChevronLeft, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const storiesData = [
  {
    id: 1,
    name: "Meera Patel",
    age: 18,
    condition: "Cerebral Palsy",
    story: "Meera's journey with EmpowerKind began when she was 8. Despite her physical challenges, she always dreamed of becoming a lawyer. With our specialized education programs and support, she's now pursuing law at a prestigious university in Mumbai.",
    image: "https://t3.ftcdn.net/jpg/07/40/45/56/360_F_740455685_cCQubv0OcWYzPMotsfsjxTrZN3YFbae8.jpg"
  },
  {
    id: 2,
    name: "Arjun Patel",
    age: 12,
    condition: "Autism",
    story: "When Arjun joined our program in Delhi, he struggled with social interactions. Today, he's made incredible progress through music therapy and is performing in school concerts, particularly excelling in tabla.",
    image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/201808/specially_disabled.jpeg"
  },
  {
    id: 3,
    name: "Ananya Reddy",
    age: 7,
    condition: "Cerebral Palsy",
    story: "Ananya received her first specialized wheelchair through EmpowerKind in Bangalore. She's now participating in adaptive sports and recently won a medal in a children's wheelchair race at the state level.",
    image: "https://www.globalgiving.org/pfil/40879/pict_original.jpg"
  },
  {
    id: 4,
    name: "Rahul Verma",
    age: 10,
    condition: "Hearing Impairment",
    story: "Rahul received hearing aids and sign language training through our program in Kolkata. His communication skills have improved dramatically, and he's now teaching Indian Sign Language to his classmates.",
    image: "https://sc0.blr1.digitaloceanspaces.com/large/858990-47643-skxtlkoyqi-1512120739.jpg"
  },
  {
    id: 5,
    name: "Kavya Singh",
    age: 9,
    condition: "Visual Impairment",
    story: "Kavya joined our reading program in Chennai and received braille learning materials in both English and Tamil. She's now an avid reader and has been recognized for her academic achievements.",
    image: "https://www.unicef.org/sites/default/files/styles/crop_thumbnail/public/UNICEF%20Jamaica.png.webp?itok=GVE4chMi"
  },
  {
    id: 6,
    name: "Aditya Kumar",
    age: 11,
    condition: "ADHD",
    story: "Through our support program in Hyderabad, Aditya received specialized educational assistance and coaching. His academic performance has improved significantly, and he's discovered a talent for robotics.",
    image: "https://www.indiaspend.com/h-upload/old_images/1500x900_344001-lit6201.jpg"
  }
];

const Stories = () => {
  const { toast } = useToast();
  const [showStoryForm, setShowStoryForm] = useState(false);
  const [storyForm, setStoryForm] = useState({
    name: "",
    age: "",
    condition: "",
    story: "",
    email: "",
    phone: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStoryForm(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmitStory = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Story submitted!",
      description: "Thank you for sharing your story with us. We'll be in touch soon.",
      variant: "default",
    });
    setShowStoryForm(false);
    setStoryForm({
      name: "",
      age: "",
      condition: "",
      story: "",
      email: "",
      phone: ""
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-empowerkind-coral text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Success Stories</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Meet the incredible children whose lives have been transformed through your support.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search stories"
                className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-empowerkind-purple"
              />
              <SearchIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Filter by:</span>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empowerkind-purple">
                <option value="">All conditions</option>
                <option value="autism">Autism</option>
                <option value="down">Down Syndrome</option>
                <option value="cerebral">Cerebral Palsy</option>
                <option value="visual">Visual Impairment</option>
                <option value="hearing">Hearing Impairment</option>
                <option value="adhd">ADHD</option>
              </select>
              <select className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-empowerkind-purple">
                <option value="">All ages</option>
                <option value="0-5">0-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="11-15">11-15 years</option>
                <option value="16+">16+ years</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Story */}
      <section className="section-container pt-8">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-shadow">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto">
              <img
                src={storiesData[0].image}
                alt={storiesData[0].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent md:hidden flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold">{storiesData[0].name}</h2>
                  <p>{storiesData[0].age} years old | {storiesData[0].condition}</p>
                </div>
              </div>
            </div>
            <div className="p-8 flex flex-col justify-center">
              <span className="text-sm text-empowerkind-coral font-semibold uppercase tracking-wider mb-3">Featured Story</span>
              <h2 className="text-3xl font-bold text-gray-800 mb-2 hidden md:block">{storiesData[0].name}</h2>
              <p className="text-gray-600 mb-3 hidden md:block">{storiesData[0].age} years old | {storiesData[0].condition}</p>
              <p className="text-gray-700 mb-6 text-lg">
                {storiesData[0].story}
              </p>
              <p className="text-gray-700 mb-6">
                With the help of our specialized education programs and dedicated therapists, Meera has made incredible progress in her academic journey. Her determination and hard work, combined with our support, have enabled her to overcome numerous obstacles and achieve her dream of pursuing law.
              </p>
              <p className="text-gray-700">
                "EmpowerKind has been a blessing for our family. The support we've received has transformed Meera's life and given us hope for her future. She's now on her way to becoming a lawyer who will advocate for others with disabilities." - Mrs. Patel, Meera's mother
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {storiesData.slice(1).map((story) => (
            <div key={story.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="h-56 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{story.name}</h3>
                <p className="text-empowerkind-coral mb-3">{story.age} years old | {story.condition}</p>
                <p className="text-gray-600 mb-4">{story.story}</p>
                <a href="#" className="text-empowerkind-purple font-medium hover:text-empowerkind-darkPurple inline-flex items-center">
                  Read full story
                  <ChevronRight size={16} className="ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pagination */}
      <section className="section-container pb-16">
        <div className="flex justify-center">
          <nav className="flex items-center space-x-2">
            <a
              href="#"
              className="px-3 py-2 rounded-md text-gray-500 hover:text-empowerkind-purple hover:bg-empowerkind-lightPurple flex items-center"
            >
              <ChevronLeft size={16} className="mr-1" />
              Previous
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md bg-empowerkind-purple text-white"
            >
              1
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-empowerkind-lightPurple"
            >
              2
            </a>
            <a
              href="#"
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-empowerkind-lightPurple"
            >
              3
            </a>
            <span className="px-3 py-2">...</span>
            <a
              href="#"
              className="px-4 py-2 rounded-md text-gray-700 hover:bg-empowerkind-lightPurple"
            >
              8
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-gray-500 hover:text-empowerkind-purple hover:bg-empowerkind-lightPurple flex items-center"
            >
              Next
              <ChevronRight size={16} className="ml-1" />
            </a>
          </nav>
        </div>
      </section>

      {/* Share Your Story */}
      <section className="bg-empowerkind-lightPurple py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-empowerkind-darkPurple mb-6">Share Your Story</h2>
          <p className="text-gray-700 text-lg mb-8">
            Has EmpowerKind made a difference in your child's life? We'd love to hear about it and potentially feature your story.
          </p>
          
          {!showStoryForm ? (
            <button
              onClick={() => setShowStoryForm(true)}
              className="bg-empowerkind-purple hover:bg-empowerkind-darkPurple text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-block"
            >
              Submit Your Story
            </button>
          ) : (
            <div className="bg-white rounded-xl p-8 shadow-lg text-left">
              <h3 className="text-2xl font-bold text-empowerkind-darkPurple mb-6">Tell Us Your Story</h3>
              <form onSubmit={handleSubmitStory} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="form-label">Child's Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      value={storyForm.name}
                      onChange={handleInputChange}
                      className="input-field" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="age" className="form-label">Child's Age</label>
                    <input 
                      type="number" 
                      id="age" 
                      name="age"
                      value={storyForm.age}
                      onChange={handleInputChange}
                      className="input-field" 
                      required 
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="condition" className="form-label">Condition</label>
                  <select 
                    id="condition" 
                    name="condition"
                    value={storyForm.condition}
                    onChange={handleInputChange}
                    className="input-field" 
                    required
                  >
                    <option value="">Select condition</option>
                    <option value="Autism">Autism</option>
                    <option value="Down Syndrome">Down Syndrome</option>
                    <option value="Cerebral Palsy">Cerebral Palsy</option>
                    <option value="Visual Impairment">Visual Impairment</option>
                    <option value="Hearing Impairment">Hearing Impairment</option>
                    <option value="ADHD">ADHD</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="story" className="form-label">Your Story</label>
                  <textarea 
                    id="story" 
                    name="story"
                    value={storyForm.story}
                    onChange={handleInputChange}
                    rows={6}
                    className="input-field" 
                    placeholder="Tell us how EmpowerKind has made a difference in your child's life..."
                    required
                  ></textarea>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="form-label">Your Email</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      value={storyForm.email}
                      onChange={handleInputChange}
                      className="input-field" 
                      required 
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="form-label">Your Phone (Optional)</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone"
                      value={storyForm.phone}
                      onChange={handleInputChange}
                      className="input-field" 
                    />
                  </div>
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent"
                    className="h-5 w-5 mt-1 rounded border-gray-300 text-empowerkind-purple focus:ring-empowerkind-purple"
                    required
                  />
                  <label htmlFor="consent" className="ml-2 text-gray-700 text-sm">
                    I agree that my submitted data is being collected and stored. EmpowerKind may contact me to discuss featuring this story.
                  </label>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <button 
                    type="button" 
                    onClick={() => setShowStoryForm(false)}
                    className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button 
                    type="submit" 
                    className="bg-empowerkind-purple hover:bg-empowerkind-darkPurple text-white font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg inline-flex items-center"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Submit Story
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Stories;
