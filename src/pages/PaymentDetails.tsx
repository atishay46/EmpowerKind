import React, { useState } from "react";
import { CheckCircle, Copy, ArrowLeft, CreditCard } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const PaymentDetails = () => {
  const { toast } = useToast();
  const location = useLocation();
  const donationAmount = location.state?.amount || "₹500";
  const donationFrequency = location.state?.frequency || "One-time";
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "credit">("upi");
  
  const upiId = "empowerkind@upi";
  const cardNumber = "4111 1111 1111 1111";
  const cardExpiry = "12/25";
  const cardCvv = "123";
  
  const copyToClipboard = (text: string, message: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: message,
      variant: "default",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-empowerkind-purple text-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Complete Your Donation</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80">
            Thank you for your generous contribution of {donationAmount} ({donationFrequency}).
          </p>
        </div>
      </section>

      {/* Payment Details Section */}
      <section className="section-container">
        <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Payment Details</h2>
            <p className="text-gray-600">
              Please complete your payment using the details below.
            </p>
          </div>

          {/* Payment Method Selection */}
          <div className="mb-8">
            <label className="form-label">Select Payment Method</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: "upi", label: "UPI", icon: "💳" },
                { id: "credit", label: "Credit Card", icon: "💳" }
              ].map((method) => (
                <div key={method.id} className="relative">
                  <input
                    type="radio"
                    name="paymentMethod"
                    id={method.id}
                    className="peer sr-only"
                    checked={paymentMethod === method.id}
                    onChange={() => setPaymentMethod(method.id as "upi" | "credit")}
                  />
                  <label
                    htmlFor={method.id}
                    className="block w-full p-3 text-center border-2 rounded-lg cursor-pointer transition-all hover:border-empowerkind-purple peer-checked:border-empowerkind-purple peer-checked:bg-empowerkind-lightPurple"
                  >
                    <span className="mr-2">{method.icon}</span>
                    {method.label}
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* UPI Payment Details */}
          {paymentMethod === "upi" && (
            <div className="bg-empowerkind-lightPurple/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-empowerkind-darkPurple mb-4">UPI Payment Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">UPI ID</p>
                  <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                    <span className="font-mono text-lg">{upiId}</span>
                    <button 
                      onClick={() => copyToClipboard(upiId, "UPI ID copied to clipboard!")}
                      className="text-empowerkind-purple hover:text-empowerkind-darkPurple"
                      aria-label="Copy UPI ID"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Amount</p>
                  <div className="bg-white p-3 rounded-md border border-gray-200">
                    <span className="font-mono text-lg">{donationAmount}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Frequency</p>
                  <div className="bg-white p-3 rounded-md border border-gray-200">
                    <span className="font-mono text-lg">{donationFrequency}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Credit Card Payment Details */}
          {paymentMethod === "credit" && (
            <div className="bg-empowerkind-lightPurple/30 rounded-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-empowerkind-darkPurple mb-4">Credit Card Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Card Number</p>
                  <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                    <span className="font-mono text-lg">{cardNumber}</span>
                    <button 
                      onClick={() => copyToClipboard(cardNumber, "Card number copied to clipboard!")}
                      className="text-empowerkind-purple hover:text-empowerkind-darkPurple"
                      aria-label="Copy card number"
                    >
                      <Copy className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Expiry Date</p>
                    <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                      <span className="font-mono text-lg">{cardExpiry}</span>
                      <button 
                        onClick={() => copyToClipboard(cardExpiry, "Expiry date copied to clipboard!")}
                        className="text-empowerkind-purple hover:text-empowerkind-darkPurple"
                        aria-label="Copy expiry date"
                      >
                        <Copy className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-500 mb-1">CVV</p>
                    <div className="flex items-center justify-between bg-white p-3 rounded-md border border-gray-200">
                      <span className="font-mono text-lg">{cardCvv}</span>
                      <button 
                        onClick={() => copyToClipboard(cardCvv, "CVV copied to clipboard!")}
                        className="text-empowerkind-purple hover:text-empowerkind-darkPurple"
                        aria-label="Copy CVV"
                      >
                        <Copy className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Amount</p>
                  <div className="bg-white p-3 rounded-md border border-gray-200">
                    <span className="font-mono text-lg">{donationAmount}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm text-gray-500 mb-1">Frequency</p>
                  <div className="bg-white p-3 rounded-md border border-gray-200">
                    <span className="font-mono text-lg">{donationFrequency}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  {paymentMethod === "upi" 
                    ? "Please use any UPI app (Google Pay, PhonePe, Paytm, etc.) to complete your payment. After payment, you'll receive a confirmation email."
                    : "Please use the credit card details above to complete your payment. After payment, you'll receive a confirmation email."}
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              to="/" 
              className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Return to Home
            </Link>
            <button 
              onClick={() => {
                toast({
                  title: "Thank you for your donation!",
                  description: "We've received your payment confirmation.",
                  variant: "default",
                });
              }}
              className="btn-primary py-3"
            >
              I've Completed the Payment
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default PaymentDetails; 