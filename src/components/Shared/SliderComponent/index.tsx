import { useEffect, useState } from 'react';
import Slider from 'react-slick';
import SingleSlide from './SingleSlide';

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

  return (
    <>
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
                videoUrl={slide.videoUrl}
                colorCode={slide.colorCode}
              />
            </div>
          ))}
      </Slider>
    </>
  );
};

export default SliderComponent;
