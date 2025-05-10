import { useState, useRef } from "react";
import { motion } from "framer-motion";
import p1 from "./assets/p1.jpg";
import p2 from "./assets/p2.jpg";
import p3 from "./assets/p3.jpg";
import sakura from "./assets/sakura.jpg";
import video from "./assets/p4.mp4";
import song from "./assets/song.mp3";

function Card({ img, quote, onHoverStart }) {
  const [showQuote, setShowQuote] = useState(false);

  return (
    <motion.div
      className="w-full max-w-xs h-72 bg-pink-700 rounded-3xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 border-4 border-pink-900"
      whileHover={{ scale: 1.05 }} // Hover Animation (Scale effect)
      onHoverStart={() => {
        setShowQuote(true);
        onHoverStart(); // Play the song when hover starts
      }}
      onHoverEnd={() => setShowQuote(false)}  // Hide quote when hover ends
    >
      {showQuote ? (
        <div className="w-full h-full flex items-center justify-center px-4">
          <motion.p
            className="text-center text-pink-100 text-base font-semibold leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {quote}
          </motion.p>
        </div>
      ) : (
        <img
          src={img}
          alt="flashcard"
          className="w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
}

function App() {
  const audioRef = useRef(null); // Reference to the audio element
  const [isSongPlayed, setIsSongPlayed] = useState(false); // Track if the song has started

  const handleHoverStart = () => {
    if (!isSongPlayed) {
      setIsSongPlayed(true);
      audioRef.current.play(); // Start the audio when any card is hovered
    }
  };

  return (
    <motion.div
      className="min-h-screen w-full bg-gradient-to-b from-pink-900 via-pink-700 to-pink-600 flex flex-col items-center py-10 px-4 space-y-12 overflow-x-hidden"
    >
      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={song} type="audio/mp3" />
        Your browser does not support the audio tag.
      </audio>

      {/* Heading */}
      <motion.div
        animate={{
          x: ["-10px", "10px", "-10px"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="text-center max-w-md"
      >
        <h1 className="text-4xl font-bold text-white mb-3 drop-shadow-md">
          Happy Birthday, PRATIKSHA 🌸🌸
        </h1>
        <p className="text-pink-200 text-base font-medium">
          Wishing you a day as magical as sakura petals in the sunset 💗
        </p>
      </motion.div>

      {/* Cards */}
      <div className="flex flex-col items-center space-y-8 w-full">
        <Card
          img={p1}
          quote="Your smile is like Wi-Fi. Instant connection, pure magic. You're basically the sun, but cooler. 🌞"
          onHoverStart={handleHoverStart}  // Start playing the song when hover starts
        />
        <Card
          img={p2}
          quote="Not to be dramatic, but the world looks 1000% better with you in it. You're basically 💖"
          onHoverStart={handleHoverStart}
        />
        <Card
          img={p3}
          quote="You’re the secret ingredient that turns 'okok' days into ‘woow’ days. Beauty in the most unexpected places. ✨"
          onHoverStart={handleHoverStart}
        />
        <Card
          img={sakura}
          quote="You're like sakura petals in the monsoon—delicate yet powerful, leaving everyone in awe, just like a Bollywood heroine in slow motion! 🌸"
          onHoverStart={handleHoverStart}
        />
      </div>

      {/* Video Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center max-w-sm space-y-4"
      >
        <h2 className="text-2xl font-semibold text-white">
          And now... a lil surprise 🎥
        </h2>
        <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-800">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default App;
 App;
