import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const Slide = () => {
  return(
    <>
    
      <button
        type="button"
        className="btn-big-01 back gender-btn"
        onClick={handleNext}
      >
        건너뛰기
      </button>
    </>
  )
}

export default Slide