
import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>([
    { text: "Hi there! How can I help you today? 😊", isUser: false },
  ]);
  const [currentMessage, setCurrentMessage] = useState("");

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentMessage.trim()) return;
    
    // Add user message
    setMessages([...messages, { text: currentMessage, isUser: true }]);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "Thanks for your question! You can donate through our Donate page.",
        "We help children across all disabilities with various programs.",
        "Your donation directly supports therapy, education, and recreational activities.",
        "You can volunteer by filling out the form on our Get Involved page.",
        "We've been supporting children since 2010 with over 5,000 families helped!"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, isUser: false }]);
    }, 1000);
    
    setCurrentMessage("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-2xl w-80 sm:w-96 flex flex-col card-shadow overflow-hidden">
          <div className="bg-empowerkind-purple p-4 text-white flex justify-between items-center">
            <div className="flex items-center">
              <MessageCircle className="mr-2" size={20} />
              <h3 className="font-semibold">EmpowerKind Support</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-empowerkind-yellow transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div className="flex-grow max-h-96 overflow-y-auto p-4 bg-gray-50">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`mb-3 max-w-[80%] ${message.isUser ? "ml-auto" : "mr-auto"}`}
              >
                <div className={`p-3 rounded-lg ${
                  message.isUser 
                    ? "bg-empowerkind-purple text-white rounded-tr-none" 
                    : "bg-gray-200 text-gray-800 rounded-tl-none"
                }`}>
                  {message.text}
                </div>
              </div>
            ))}
          </div>
          
          <form onSubmit={handleSendMessage} className="border-t p-4 flex">
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
              placeholder="Type your message here..."
              className="flex-grow px-4 py-2 border rounded-l-full focus:outline-none focus:ring-2 focus:ring-empowerkind-purple"
            />
            <button 
              type="submit"
              className="bg-empowerkind-purple text-white p-2 rounded-r-full"
            >
              <Send size={20} />
            </button>
          </form>
        </div>
      ) : (
        <button 
          onClick={toggleChat} 
          className="bg-empowerkind-purple hover:bg-empowerkind-darkPurple text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle size={24} />
        </button>
      )}
    </div>
  );
};

export default Chatbot;
