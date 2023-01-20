import React, { useState } from 'react';
import { useEffect } from 'react';

function ShapeButton() {
  const [shape, setShape] = useState('circle');
  const [showIframe, setShowIframe] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const circleWidth = 50;
  const squareWidth = circleWidth * 5;
  let audioPlayer;

  useEffect(() => {
    if (shape === 'square' && showIframe && !audioPlaying) {
      setAudioPlaying(true);
      audioPlayer = new Audio(
        'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ericadanielsmusic'
      );
      audioPlayer.play();
      return () => {
        audioPlayer.pause();
        setAudioPlaying(false);
      };
    }
  }, [shape, showIframe, audioPlaying]);




  const handleClick = () => {
    if (shape === 'circle') {
      setTimeout(() => {
        setShape('square');
        setShowIframe(true);
      }, 1100);
    } else {
      setTimeout(() => {
        setShape('circle');
        setShowIframe(false);
      }, 1100);
    }
  };
  
  return (
    <div 
        style={{
          width: shape === 'circle' ? `${circleWidth}px` : `${squareWidth}px`,
          height: shape === 'circle' ? `${circleWidth}px` : `${squareWidth}px`,
          borderRadius: shape === 'circle' ? '50%' : '0',
          transition: 'all 1s ease-in-out',
          position: 'relative',
        }}
    >
      <button
        style={{
          backgroundColor: shape === 'circle' ? '#F2412E' : '#F2412E',
          width: '100%',
          height: '100%',
          borderRadius: shape === 'circle' ? '50%' : '0',
        }}
        onClick={handleClick}
      >
        {shape}
      </button>
      {shape === 'square' && showIframe && (
        <iframe 
          style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          scrolling="no" 
          frameborder="none"
      src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/ericadanielsmusic"
    ></iframe>
  )}
</div>
  );
}

export default ShapeButton;