import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Scrollbar } from "swiper/modules";
import "swiper/css";
import 'swiper/css/scrollbar';
import 'swiper/css/pagination';

const CategoryProductCards = () => {
  return (
    <Swiper
    modules={[ Pagination, Scrollbar]}
    scrollbar={{ draggable: true }}
    pagination={{ clickable: true }}
    spaceBetween={10}
    breakpoints={{
        0: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        500: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      className="mySwiper mt-4  w-[1250px] mb-40"
    >
      <SwiperSlide>
        <article className="mb-24 w-[300px]">
          <header className="rounded-xl overflow-hidden grid-flow-row ">
              <img
                className=" w-full aspect-square object-cover"
                src="/images/cartera.jpg"
                alt=""
              />
            
          </header>
          <h4 className=" justify-center font-boogaloo text-4xl mt-2 line-clamp-1 uppercase">accesorios</h4>
          <h5 className="font-light text-slate-400">holaaa</h5>
        </article>
      </SwiperSlide>

      <SwiperSlide>
        <article className="w-[300px]">
          <header className="rounded-xl overflow-hidden grid-flow-row ">
              <img
                className="w-full aspect-square object-cover"
                src="/images/niña.jpg"
                alt=""
              />
            
          </header>
          <h4 className=" font-boogaloo text-4xl font-semibold mt-2 line-clamp-1 uppercase ">niña</h4>
          <h5 className="font-light text-slate-400">holaaa</h5>
        </article>
      </SwiperSlide>

      <SwiperSlide>
        <article className="w-[300px]">
          <header className="rounded-xl overflow-hidden grid-flow-row ">
              <img
                className="w-full aspect-square object-cover"
                src="/images/niño.jpg"
                alt=""
              />
            
          </header>
          <h4 className="font-boogaloo text-4xl font-semibold mt-2 line-clamp-1 uppercase ">niño</h4>
          <h5 className="font-light text-slate-400">holaaa</h5>
        </article>
      </SwiperSlide>

      <SwiperSlide>
        <article className="w-[300px]">
          <header className="rounded-xl overflow-hidden grid-flow-row ">
              <img
                className="w-full aspect-square object-cover"
                src="/images/bebe.jpg"
                alt=""
              />
            
          </header>
          <h4 className=" font-boogaloo text-4xl font-semibold mt-2 line-clamp-1 uppercase">bebe</h4>
          <h5 className="font-light text-slate-400">holaaa</h5>
        </article>
      </SwiperSlide>
      <SwiperSlide>
        <article className="w-[300px]">
          <header className="rounded-xl overflow-hidden grid-flow-row ">
              <img
                className="w-full aspect-square object-cover"
                src="/images/amigoru.jpg"
                alt=""
              />
            
          </header>
          <h4 className=" font-boogaloo text-4xl font-semibold mt-2 line-clamp-1 uppercase">amigorumi</h4>
          <h5 className="font-light text-slate-400">holaaa</h5>
        </article>
      </SwiperSlide>
    </Swiper>
  );
};

export default CategoryProductCards;
