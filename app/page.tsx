"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Heart, Globe, Sparkles } from "lucide-react";

const messages = {
  english: (name: string) =>
    `Dear ${name},I just wanted to take a moment to express my heartfelt gratitude for being an incredible friend. I still remember the days when I felt lost and unsure of my future. But you were there for me, offering words of encouragement, support, and belief in me. Your presence in my life made all the difference. Today, I'm thrilled to share that I've landed my dream job! I couldn't have done it without you by my side. Thank you for being my rock, my confidant, and my guiding light. I'm forever grateful for our friendship`,
  hindi: (name: string) =>
    `प्रिय ${name}, मैं बस एक पल निकालकर एक अद्भुत दोस्त होने के लिए अपना हार्दिक आभार व्यक्त करना चाहता था। मुझे आज भी वो दिन याद हैं जब मैं खोया हुआ और अपने भविष्य को लेकर अनिश्चित महसूस करता था। लेकिन तुम मेरे साथ थे, प्रोत्साहन, समर्थन और मुझ पर विश्वास के शब्द दे रहे थे। मेरे जीवन में तुम्हारी उपस्थिति ने बहुत कुछ बदल दिया। आज, मुझे यह बताते हुए बहुत खुशी हो रही है कि मुझे मेरी मनचाही नौकरी मिल गई है! मैं तुम्हारे बिना यह नहीं कर पाता। मेरा सहारा, मेरा विश्वासपात्र और मेरा मार्गदर्शक बनने के लिए शुक्रिया। मैं हमारी दोस्ती के लिए हमेशा आभारी रहूँगा।
  `,
  marathi: (name: string) =>
    `प्रिय ${name},  एक अविश्वसनीय मित्र असल्याबद्दल मनापासून कृतज्ञता व्यक्त करण्यासाठी मला थोडा वेळ काढायचा होता. मला अजूनही ते दिवस आठवतात जेव्हा मला हरवले होते आणि माझ्या भविष्याबद्दल अनिश्चित वाटायचे. पण तू माझ्यासाठी तिथे होतास, प्रोत्साहनाचे, आधाराचे आणि माझ्यावर विश्वासाचे शब्द देत होतास. माझ्या आयुष्यात तुझ्या उपस्थितीने सर्व फरक पडला. आज, मला हे सांगताना आनंद होत आहे की मला माझे स्वप्नातील काम मिळाले आहे! तू माझ्या बाजूने नसता तर मी हे करू शकलो नसतो. माझा दगड, माझा विश्वासू आणि माझा मार्गदर्शक प्रकाश असल्याबद्दल धन्यवाद. आमच्या मैत्रीसाठी मी नेहमीच आभारी आहे!`,
};

const languageNames = {
  english: "English",
  hindi: "हिंदी",
  marathi: "मराठी",
};

export default function ThankYouNote() {
  const [name, setName] = useState("");
  const [currentLanguage, setCurrentLanguage] =
    useState<keyof typeof messages>("english");
  const [showMessage, setShowMessage] = useState(false);
  const [messageVisible, setMessageVisible] = useState(false);
  const [nameExiting, setNameExiting] = useState(false);

  const handleShowMessage = () => {
    if (name.trim()) {
      setNameExiting(true);
      setTimeout(() => {
        setShowMessage(true);
        setTimeout(() => setMessageVisible(true), 100);
      }, 500);
    }
  };

  const handleLanguageChange = (lang: keyof typeof messages) => {
    setCurrentLanguage(lang);
    if (showMessage && name.trim()) {
      setMessageVisible(false);
      setTimeout(() => setMessageVisible(true), 100);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 flex items-center justify-center p-4">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200/30 rounded-full animate-float" />
        <div
          className="absolute top-40 right-20 w-16 h-16 bg-amber-200/30 rounded-full animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-32 left-1/4 w-12 h-12 bg-yellow-200/30 rounded-full animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute bottom-20 right-1/3 w-24 h-24 bg-orange-100/40 rounded-full animate-float"
          style={{ animationDelay: "0.5s" }}
        />
      </div>

      <div className="w-full max-w-md mx-auto bg-white border-2 border-orange-100 shadow-2xl rounded-lg animate-fade-in-scale">
        <div className="p-8 space-y-6">
          {/* Header with avatar */}
          <div className="text-center space-y-4">
            <div className="relative inline-block">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold shadow-lg animate-pulse-glow"
                style={{
                  backgroundColor: "#c2410c !important",
                  background:
                    "linear-gradient(135deg, #c2410c, #9a3412) !important",
                  color: "#ffffff !important",
                }}
              >
                P
              </div>
              <Heart className="absolute -top-1 -right-1 w-6 h-6 text-red-500 animate-bounce" />
            </div>
            <div className="space-y-2">
              <h1 className="text-2xl font-bold text-gray-800">
                Hello, I'm Paul
              </h1>
              <p className="text-lg text-gray-600 font-medium">
                I want to thank you
              </p>
            </div>
          </div>

          {/* Name input */}
          {!showMessage && (
            <div
              className={`space-y-6 transition-all duration-500 ${
                nameExiting
                  ? "opacity-0 -translate-y-8 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
            >
              <div
                className="space-y-3 animate-slide-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800"
                >
                  Please Enter Your Name:
                </label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 text-lg border-2 border-orange-200 focus:border-orange-600 focus:ring-2 focus:ring-orange-600/20 rounded-lg transition-all duration-300 bg-white text-gray-800"
                  onKeyPress={(e) => e.key === "Enter" && handleShowMessage()}
                />
              </div>

              {/* Get message button */}
              <div
                className="animate-slide-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <button
                  onClick={handleShowMessage}
                  disabled={!name.trim()}
                  className="w-full py-3 text-lg font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg flex items-center justify-center gap-2"
                  style={{
                    backgroundColor: "#ea580c",
                    color: "#ffffff",
                  }}
                >
                  <Sparkles className="w-5 h-5" />
                  Click Here to Get My Message
                </button>
              </div>

              {/* Language toggle */}
              <div
                className="space-y-3 animate-slide-in-up"
                style={{ animationDelay: "0.6s" }}
              >
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <Globe className="w-4 h-4" />
                  Toggle Language:
                </div>
                <div className="flex gap-2">
                  {Object.entries(languageNames).map(([lang, displayName]) => (
                    <button
                      key={lang}
                      onClick={() =>
                        handleLanguageChange(lang as keyof typeof messages)
                      }
                      className="flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300"
                      style={{
                        backgroundColor:
                          currentLanguage === lang ? "#f97316" : "transparent",
                        color: currentLanguage === lang ? "#ffffff" : "#374151",
                        border:
                          currentLanguage === lang
                            ? "none"
                            : "1px solid #fed7aa",
                      }}
                    >
                      {displayName}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Thank you message */}
          {showMessage && (
            <div
              className={`space-y-4 transition-all duration-700 transform ${
                messageVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              {/* Language toggle for message view */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-medium text-gray-800">
                  <Globe className="w-4 h-4" />
                  Toggle Language:
                </div>
                <div className="flex gap-2">
                  {Object.entries(languageNames).map(([lang, displayName]) => (
                    <button
                      key={lang}
                      onClick={() =>
                        handleLanguageChange(lang as keyof typeof messages)
                      }
                      className="flex-1 px-3 py-2 text-sm font-medium rounded-md transition-all duration-300"
                      style={{
                        backgroundColor:
                          currentLanguage === lang ? "#f97316" : "transparent",
                        color: currentLanguage === lang ? "#ffffff" : "#374151",
                        border:
                          currentLanguage === lang
                            ? "none"
                            : "1px solid #fed7aa",
                      }}
                    >
                      {displayName}
                    </button>
                  ))}
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent animate-pulse" />

              <div className="relative bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 p-8 rounded-xl border-2 border-orange-200 shadow-lg overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-2 right-2 w-8 h-8 bg-orange-200/20 rounded-full animate-pulse" />
                <div
                  className="absolute bottom-2 left-2 w-6 h-6 bg-amber-200/20 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />

                {/* Enhanced message text with better spacing and animations */}
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <Heart className="w-5 h-5 text-red-500 animate-bounce" />
                    <span className="text-sm font-semibold text-orange-700 uppercase tracking-wider">
                      Personal Message
                    </span>
                    <Heart
                      className="w-5 h-5 text-red-500 animate-bounce"
                      style={{ animationDelay: "0.5s" }}
                    />
                  </div>

                  <p className="text-gray-800 leading-8 text-balance font-medium text-lg tracking-wide animate-fade-in-words">
                    {messages[currentLanguage](name)
                      .split(" ")
                      .map((word, index) => (
                        <span
                          key={index}
                          className="inline-block mr-2 animate-slide-in-word"
                          style={{
                            animationDelay: `${index * 0.1}s`,
                            animationFillMode: "both",
                          }}
                        >
                          {word}
                        </span>
                      ))}
                  </p>

                  {/* Signature */}
                  <div className="mt-6 pt-4 border-t border-orange-200/50">
                    <p
                      className="text-right text-orange-700 font-semibold italic animate-slide-in-up"
                      style={{ animationDelay: "2s" }}
                    >
                      With love, Paul ❤️
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
