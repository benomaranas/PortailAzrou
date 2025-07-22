import React, { useState } from 'react';

const DemoVideoModal = ({ isOpen, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // Here you would integrate with your video player
    // For now, this could redirect to a video hosting platform
    window.open('https://youtu.be/your-demo-video-id', '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 max-w-4xl w-full mx-4 relative">
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
        >
          ×
        </button>

        {/* Video Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            🎥 Platform Demonstration
          </h2>
          <p className="text-gray-600">
            See how our digital municipal platform transforms citizen services
          </p>
        </div>

        {/* Video Player Area */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-6">
          {!isPlaying ? (
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform duration-300 shadow-lg">
                <button 
                  onClick={handlePlayVideo}
                  className="text-white text-4xl"
                >
                  ▶️
                </button>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Municipal Services Demo
              </h3>
              <p className="text-gray-600 mb-4">
                3 minutes • Full Platform Walkthrough
              </p>
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={handlePlayVideo}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                >
                  🎬 Watch Demo Video
                </button>
              </div>
            </div>
          ) : (
            <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
              <div className="text-white text-center">
                <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                <p>Loading video player...</p>
              </div>
            </div>
          )}
        </div>

        {/* Video Features */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="text-center p-4 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg">
            <div className="text-2xl mb-2">📱</div>
            <h4 className="font-semibold text-gray-800">Mobile First</h4>
            <p className="text-sm text-gray-600">Responsive design for all devices</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-lg">
            <div className="text-2xl mb-2">⚡</div>
            <h4 className="font-semibold text-gray-800">Fast & Efficient</h4>
            <p className="text-sm text-gray-600">Complete tasks in minutes</p>
          </div>
          <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg">
            <div className="text-2xl mb-2">🔒</div>
            <h4 className="font-semibold text-gray-800">Secure & Reliable</h4>
            <p className="text-sm text-gray-600">Your data is protected</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            📋 Try Services Now
          </button>
          <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
            📞 Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoVideoModal;
