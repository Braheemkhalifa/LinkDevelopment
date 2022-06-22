import React from 'react';
import ModalVideo from 'react-modal-video';
const VideoPop = ({ isVideoOpen, videoUrl, setVideoOpen }) => {
  return (
    <ModalVideo
      channel="youtube"
      autoplay
      isOpen={isVideoOpen}
      videoId={videoUrl}
      onClose={() => setVideoOpen(false)}
    />
  );
};
export default VideoPop;
