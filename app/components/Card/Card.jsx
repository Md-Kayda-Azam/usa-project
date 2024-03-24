import AnimatedCard from '../AnimationCard/AnimatedCard';
import Slider from 'react-slick';

const Card = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="hidden sm:block">
        <div className="flex items-center justify-between m-10">
          <AnimatedCard
            title="Affordable Auto Insurance"
            description="USA Underwriters offers affordable rates on quality coverage."
          />
          <AnimatedCard
            title="Accidents Can Add Up"
            description="Accidents and infractions can linger long after the fines are paid and the car is repaired."
          />
          <AnimatedCard
            title="Price Conscious"
            description="Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
          />
        </div>
      </div>
      <div className="block sm:hidden items-center flex-wrap justify-between m-10">
        <Slider {...settings}>
          <AnimatedCard
            title="Affordable Auto Insurance"
            description="USA Underwriters offers affordable rates on quality coverage."
          />
          <AnimatedCard
            title="Accidents Can Add Up"
            description="Accidents and infractions can linger long after the fines are paid and the car is repaired."
          />
          <AnimatedCard
            title="Price Conscious"
            description="Price conscious consumers choose USA Underwriters for affordable auto insurance solutions."
          />
        </Slider>
      </div>
    </>
  );
};

export default Card;
