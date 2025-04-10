import React, { useState, ChangeEvent } from "react";
import { CreditCard, Truck, Sparkles, Upload, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Donate = () => {
  const [donationType, setDonationType] = useState<"money" | "items" | "services">("money");
  const { toast } = useToast();
  const [itemImages, setItemImages] = useState<File[]>([]);
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [selectedAmount, setSelectedAmount] = useState<string>("₹500");
  const [selectedFrequency, setSelectedFrequency] = useState<string>("One-time");
  const navigate = useNavigate();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (donationType === "money") {
      // Redirect to payment details page with donation info
      navigate("/payment-details", { 
        state: { 
          amount: selectedAmount,
          frequency: selectedFrequency
        } 
      });
    } else {
      toast({
        title: "Thank you for your donation!",
        description: "We'll be in touch with next steps.",
        variant: "default",
      });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    
    const newFiles: File[] = [];
    const newPreviewUrls: string[] = [];
    
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.startsWith('image/')) {
        newFiles.push(file);
        newPreviewUrls.push(URL.createObjectURL(file));
      }
    }
    
    setItemImages([...itemImages, ...newFiles]);
    setPreviewUrls([...previewUrls, ...newPreviewUrls]);
  };

  const removeImage = (index: number) => {
    const updatedImages = [...itemImages];
    const updatedPreviews = [...previewUrls];
    
    // Revoke object URL to prevent memory leaks
    URL.revokeObjectURL(updatedPreviews[index]);
    
    updatedImages.splice(index, 1);
    updatedPreviews.splice(index, 1);
    
    setItemImages(updatedImages);
    setPreviewUrls(updatedPreviews);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-empowerkind-purple text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Make a Difference Today</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Your contribution helps provide care, education, and opportunities for specially-abled children.
          </p>
        </div>
      </section>

      {/* Donation Options */}
      <section className="section-container -mt-12">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 max-w-4xl mx-auto">
          <div className="flex flex-wrap mb-10 border-b border-gray-200">
            <button
              className={`px-6 py-3 font-medium text-lg mr-4 ${
                donationType === "money"
                  ? "text-empowerkind-purple border-b-2 border-empowerkind-purple"
                  : "text-gray-500 hover:text-empowerkind-purple"
              }`}
              onClick={() => setDonationType("money")}
            >
              <CreditCard className="inline-block mr-2 h-5 w-5" />
              Donate Money
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg mr-4 ${
                donationType === "items"
                  ? "text-empowerkind-purple border-b-2 border-empowerkind-purple"
                  : "text-gray-500 hover:text-empowerkind-purple"
              }`}
              onClick={() => setDonationType("items")}
            >
              <Truck className="inline-block mr-2 h-5 w-5" />
              Donate Items
            </button>
            <button
              className={`px-6 py-3 font-medium text-lg ${
                donationType === "services"
                  ? "text-empowerkind-purple border-b-2 border-empowerkind-purple"
                  : "text-gray-500 hover:text-empowerkind-purple"
              }`}
              onClick={() => setDonationType("services")}
            >
              <Sparkles className="inline-block mr-2 h-5 w-5" />
              Donate Services
            </button>
          </div>

          {donationType === "money" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input type="text" id="firstName" className="input-field" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input type="text" id="lastName" className="input-field" required />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="form-label">Email Address</label>
                <input type="email" id="email" className="input-field" required />
              </div>

              <div>
                <label className="form-label">Donation Amount</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {["₹500", "₹1000", "₹2000", "₹5000"].map((amount) => (
                    <div key={amount} className="relative">
                      <input
                        type="radio"
                        name="donationAmount"
                        id={amount}
                        className="peer sr-only"
                        checked={selectedAmount === amount}
                        onChange={() => setSelectedAmount(amount)}
                      />
                      <label
                        htmlFor={amount}
                        className="block w-full p-3 text-center border-2 rounded-lg cursor-pointer transition-all hover:border-empowerkind-purple peer-checked:border-empowerkind-purple peer-checked:bg-empowerkind-lightPurple"
                      >
                        {amount}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <label htmlFor="customAmount" className="form-label">Other Amount</label>
                  <div className="relative">
                    <span className="absolute left-3 top-3 text-gray-500">₹</span>
                    <input 
                      type="number" 
                      id="customAmount" 
                      className="input-field pl-8" 
                      placeholder="Custom amount" 
                      onChange={(e) => setSelectedAmount(`₹${e.target.value}`)}
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="form-label">Donation Frequency</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {["One-time", "Monthly", "Annually"].map((frequency) => (
                    <div key={frequency} className="relative">
                      <input
                        type="radio"
                        name="donationFrequency"
                        id={frequency}
                        className="peer sr-only"
                        checked={selectedFrequency === frequency}
                        onChange={() => setSelectedFrequency(frequency)}
                        defaultChecked={frequency === "One-time"}
                      />
                      <label
                        htmlFor={frequency}
                        className="block w-full p-3 text-center border-2 rounded-lg cursor-pointer transition-all hover:border-empowerkind-purple peer-checked:border-empowerkind-purple peer-checked:bg-empowerkind-lightPurple"
                      >
                        {frequency}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="form-label">Payment Method</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Credit Card", "UPI"].map((method) => (
                    <div key={method} className="relative">
                      <input
                        type="radio"
                        name="paymentMethod"
                        id={method}
                        className="peer sr-only"
                        defaultChecked={method === "Credit Card"}
                      />
                      <label
                        htmlFor={method}
                        className="block w-full p-3 text-center border-2 rounded-lg cursor-pointer transition-all hover:border-empowerkind-purple peer-checked:border-empowerkind-purple peer-checked:bg-empowerkind-lightPurple"
                      >
                        {method}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-4">
                Complete Donation
              </button>
              
              <p className="text-sm text-gray-500 text-center mt-4">
                Your donation is tax-deductible. You will receive a receipt via email.
              </p>
            </form>
          )}

          {donationType === "items" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="itemFirstName" className="form-label">First Name</label>
                  <input type="text" id="itemFirstName" className="input-field" required />
                </div>
                <div>
                  <label htmlFor="itemLastName" className="form-label">Last Name</label>
                  <input type="text" id="itemLastName" className="input-field" required />
                </div>
              </div>

              <div>
                <label htmlFor="itemEmail" className="form-label">Email Address</label>
                <input type="email" id="itemEmail" className="input-field" required />
              </div>

              <div>
                <label htmlFor="itemPhone" className="form-label">Phone Number</label>
                <input type="tel" id="itemPhone" className="input-field" required />
              </div>

              <div>
                <label htmlFor="itemType" className="form-label">Item Type</label>
                <select id="itemType" className="input-field">
                  <option value="">Select item type</option>
                  <option value="toys">Toys and Games</option>
                  <option value="books">Books</option>
                  <option value="clothes">Clothes</option>
                  <option value="school">School Supplies</option>
                  <option value="medical">Medical Equipment</option>
                  <option value="furniture">Furniture</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="itemDescription" className="form-label">Item Description</label>
                <textarea 
                  id="itemDescription" 
                  rows={4}
                  className="input-field"
                  placeholder="Please describe the items you wish to donate"
                  required
                ></textarea>
              </div>

              {/* New Image Upload Section */}
              <div>
                <label className="form-label">Item Images</label>
                <div className="border-2 border-dashed border-empowerkind-purple/30 rounded-lg p-6 bg-empowerkind-lightPurple/10">
                  <div className="text-center">
                    <Upload className="mx-auto h-12 w-12 text-empowerkind-purple/60" />
                    <h3 className="mt-2 text-sm font-semibold text-empowerkind-darkPurple">
                      Add photos of your item
                    </h3>
                    <p className="mt-1 text-xs text-gray-500">
                      Upload up to 5 images (PNG, JPG, JPEG up to 10MB)
                    </p>
                    <div className="mt-4">
                      <Input
                        id="itemImages"
                        type="file"
                        accept="image/*"
                        multiple
                        className="hidden"
                        onChange={handleFileChange}
                        disabled={itemImages.length >= 5}
                      />
                      <Button 
                        type="button" 
                        variant="outline"
                        className="bg-white hover:bg-empowerkind-lightPurple/20"
                        onClick={() => document.getElementById('itemImages')?.click()}
                        disabled={itemImages.length >= 5}
                      >
                        <Upload className="mr-2 h-4 w-4" />
                        Select Images
                      </Button>
                    </div>
                  </div>

                  {/* Image Previews */}
                  {previewUrls.length > 0 && (
                    <div className="mt-6 grid grid-cols-2 md:grid-cols-3 gap-4">
                      {previewUrls.map((url, index) => (
                        <div key={index} className="relative group">
                          <img
                            src={url}
                            alt={`Item preview ${index + 1}`}
                            className="h-32 w-full object-cover rounded-md"
                          />
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-80 hover:opacity-100"
                          >
                            <X className="h-4 w-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="itemCondition" className="form-label">Condition</label>
                <select id="itemCondition" className="input-field">
                  <option value="">Select condition</option>
                  <option value="new">New</option>
                  <option value="likeNew">Like New</option>
                  <option value="good">Good</option>
                  <option value="fair">Fair</option>
                </select>
              </div>

              <div>
                <label className="form-label">Preferred Drop-off/Pick-up</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["I'll drop off", "Please pick up"].map((option) => (
                    <div key={option} className="relative">
                      <input
                        type="radio"
                        name="deliveryMethod"
                        id={option}
                        className="peer sr-only"
                      />
                      <label
                        htmlFor={option}
                        className="block w-full p-3 text-center border-2 rounded-lg cursor-pointer transition-all hover:border-empowerkind-purple peer-checked:border-empowerkind-purple peer-checked:bg-empowerkind-lightPurple"
                      >
                        {option}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <button type="submit" className="w-full btn-primary py-4">
                Submit Item Donation
              </button>
            </form>
          )}

          {donationType === "services" && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="serviceFirstName" className="form-label">First Name</label>
                  <input type="text" id="serviceFirstName" className="input-field" required />
                </div>
                <div>
                  <label htmlFor="serviceLastName" className="form-label">Last Name</label>
                  <input type="text" id="serviceLastName" className="input-field" required />
                </div>
              </div>

              <div>
                <label htmlFor="serviceEmail" className="form-label">Email Address</label>
                <input type="email" id="serviceEmail" className="input-field" required />
              </div>

              <div>
                <label htmlFor="servicePhone" className="form-label">Phone Number</label>
                <input type="tel" id="servicePhone" className="input-field" required />
              </div>

              <div>
                <label htmlFor="serviceType" className="form-label">Service Type</label>
                <select id="serviceType" className="input-field">
                  <option value="">Select service type</option>
                  <option value="medical">Medical Services</option>
                  <option value="therapy">Therapy</option>
                  <option value="education">Education</option>
                  <option value="recreation">Recreational Activities</option>
                  <option value="consulting">Professional Consulting</option>
                  <option value="transportation">Transportation</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="serviceDescription" className="form-label">Service Description</label>
                <textarea 
                  id="serviceDescription" 
                  rows={4}
                  className="input-field"
                  placeholder="Please describe the services you wish to offer"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="serviceAvailability" className="form-label">Availability</label>
                <textarea 
                  id="serviceAvailability" 
                  rows={2}
                  className="input-field"
                  placeholder="When are you available to provide these services?"
                  required
                ></textarea>
              </div>

              <div>
                <label htmlFor="serviceDuration" className="form-label">Service Duration</label>
                <select id="serviceDuration" className="input-field">
                  <option value="">Select duration</option>
                  <option value="oneTime">One-time</option>
                  <option value="weekly">Weekly</option>
                  <option value="monthly">Monthly</option>
                  <option value="ongoing">Ongoing</option>
                </select>
              </div>

              <button type="submit" className="w-full btn-primary py-4">
                Offer Service
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-empowerkind-lightPurple py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-empowerkind-darkPurple">Tax Deductible</h3>
              <p className="text-gray-600">
                All donations to EmpowerKind are tax-deductible. Our EIN number is XX-XXXXXXX.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-empowerkind-darkPurple">Transparency</h3>
              <p className="text-gray-600">
                We commit to full transparency. 90% of your donation goes directly to our programs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-empowerkind-darkPurple">Corporate Matching</h3>
              <p className="text-gray-600">
                Many employers match donations. Check if your company participates in matching gifts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
