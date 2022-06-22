import NewsSection from 'components/Shared/NewsSection/index';
import SliderComponent from 'components/Shared/SliderComponent';
import ThingsWeDo from 'components/Shared/ThingsWeDo';

const Home = () => {
  
  return (
    <div>
      <SliderComponent />
      <ThingsWeDo />
      <NewsSection subTitle="Media" title="Top News" />
    </div>
  );
};

export default Home;
