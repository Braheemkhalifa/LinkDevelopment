import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SingleSlide from './SingleSlide';
import VideoPop from './VideoPop';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const SliderComponent = () => {
  const [slidesError, setSlidesError] = useState(null);
  const [isSlidesLoaded, setIsSlidesLoaded] = useState(false);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    fetch(`https://api.npoint.io/fee177346e7875554413/slides`)
      .then(res => res.json())
      .then(
        result => {
          setIsSlidesLoaded(true);
          setSlides(result);
        },
        error => {
          setIsSlidesLoaded(true);
          setSlidesError(error);
        }
      );
  }, []);

  const [isVideoOpen, setVideoOpen] = useState(false);
  const [videoUrl, setvideoUrl] = useState('QFaFIcGhPoM');

  return (
    <>
      <VideoPop videoUrl={videoUrl} isVideoOpen={isVideoOpen} setVideoOpen={setVideoOpen} />
      {slidesError && <p className="alert"> Something Wrong Happend, sorry cannot get Slides </p>}

      {!isSlidesLoaded && !slidesError && <p className="alert"> Loading ... </p>}
      <Slider {...settings}>
        {slides.length !== 0 &&
          !slidesError &&
          slides.map(slide => (
            <div key={slide.id}>
              <SingleSlide
                brief={slide.brief}
                title={slide.title}
                itemUrl={slide.itemUrl}
                category={slide.category}
                colorCode={slide.colorCode}
                setVideoOpen={setVideoOpen}
                setvideoUrl={setvideoUrl}
                videoID={slide.videoUrl ? slide.videoUrl : '7X8II6J-6mU'}
              />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
