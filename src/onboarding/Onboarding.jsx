import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// 이미지
import Slide1 from '../assets/login-on-1.png';
import Slide2 from '../assets/login-on-2.png';
import Slide3 from '../assets/login-on-3.png';

const Onboarding = () => {
  return (
    <>
      <div id="wrap" className="loading-wrap">
        <div className="inner">
          <Swiper
            className='onboarding-s-custom'
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true }} 
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
          >
            <SwiperSlide className="swiper-on">
              <h1 className="sign-schedule-tit">
                부모님의 하루,<br />걱정 없이 확인하세요
              </h1>
              <p className="sign-schedule-subtit">
                지금 집에 계신지, 잘 주무셨는지<br />
                하루의 모습을 편하게 살펴볼 수 있어요.
              </p>
              <img src={Slide1} alt="" />
            </SwiperSlide>

            <SwiperSlide className="swiper-on">
              <h1 className="sign-schedule-tit">
                눈에 보이지 않아도,<br />곁에 있는 마음
              </h1>
              <p className="sign-schedule-subtit">
                센서가 살펴주고, 위험한 순간은<br />
                빠르게 알려드려 안심할 수 있어요.
              </p>
              <img src={Slide2} alt="" />
            </SwiperSlide>

            <SwiperSlide className="swiper-on">
              <h1 className="sign-schedule-tit">
                기록되는 건강, <br />챙겨주는 알림
              </h1>
              <p className="sign-schedule-subtit">
                생활 리포트로 변화도 쉽게 확인하고<br />
                약 드실 시간도 잊지 않게 알려드려요.
              </p>
              <img src={Slide3} alt="" />
            </SwiperSlide>
          </Swiper>

          <Link to="/login" className='btn-login'>
            <button type="button" className="btn-big-01">건너뛰기</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Onboarding;
