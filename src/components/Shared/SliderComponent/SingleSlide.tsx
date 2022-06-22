import DecoreIon from 'components/Icons/DecoreIon';
import YoutubeIcon from 'components/Icons/YoutubeIcon';
import Link from 'next/link';
import { useEffect } from 'react';
const SingleSlide = ({
  brief,
  title,
  itemUrl,
  category,
  colorCode,
  setVideoOpen,
  setvideoUrl,
  videoID
}) => {
  useEffect(() => {
    setvideoUrl(videoID);
  });

  return (
    <div className="slide-content">
      <div className="decore">
        <DecoreIon color={colorCode} />
      </div>
      <div className="container">
        <div className="left-section">
          <div className="banner-content">
            <div className="category" style={{ color: `#${colorCode}` }}>
              {category}
            </div>
            <h2 className="title">
              {title}
              <div className="title-vector" style={{ backgroundColor: `#${colorCode}` }}></div>
            </h2>
            <p className="breif">{brief}</p>
            <div className="btn-actions">
              <div className="more-btn btn">
                <Link href={itemUrl}>Find out more</Link>
              </div>
              <div className="video-btn btn" onClick={() => setVideoOpen(true)}>
                <YoutubeIcon /> Play Demo
              </div>
            </div>
          </div>
        </div>
        <div className="banner-img">
          <div
            className="img"
            style={{
              background: 'url(https://linkdevelopment.com/app/uploads/2020/11/1-1.jpg)'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};
export default SingleSlide;
