
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See <span className="text-theme-blue">AMR Technology</span> in Action
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Watch how our Autonomous Mobile Robots revolutionize warehouse operations with precision and efficiency
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-theme-blue/20 group">
            <video
              ref={videoRef}
              className="w-full h-auto aspect-video object-cover"
              poster="/placeholder.svg"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" type="video/mp4" />
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            
            {/* Play/Pause overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <button
                onClick={togglePlay}
                className="bg-theme-blue/90 hover:bg-theme-blue text-white rounded-full p-4 transition-all duration-300 hover:scale-110 shadow-lg"
              >
                {isPlaying ? (
                  <Pause size={32} />
                ) : (
                  <Play size={32} className="ml-1" />
                )}
              </button>
            </div>

            {/* Video controls overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <div className="text-white">
                <h3 className="text-xl font-semibold mb-2">Warehouse Automation in Motion</h3>
                <p className="text-gray-300 text-sm">
                  Advanced AMR systems streamlining inventory management and order fulfillment
                </p>
              </div>
            </div>
          </div>

          {/* Video highlights */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 hover:border-theme-blue/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="text-theme-blue text-2xl mb-3">🤖</div>
              <h4 className="text-white font-semibold mb-2">Autonomous Navigation</h4>
              <p className="text-gray-400 text-sm">AI-powered robots navigate complex warehouse layouts with precision</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 hover:border-theme-blue/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <div className="text-theme-blue text-2xl mb-3">📦</div>
              <h4 className="text-white font-semibold mb-2">Smart Inventory</h4>
              <p className="text-gray-400 text-sm">Real-time tracking and automated inventory management systems</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800/30 hover:border-theme-blue/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: '1s' }}>
              <div className="text-theme-blue text-2xl mb-3">⚡</div>
              <h4 className="text-white font-semibold mb-2">24/7 Operations</h4>
              <p className="text-gray-400 text-sm">Continuous operation capability for maximum productivity</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
