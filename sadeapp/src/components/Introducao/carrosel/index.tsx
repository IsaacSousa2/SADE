'use client';
import Image from "next/image";
import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Imagem1 from "../../../../public/images/Tutorialimg/Imagem1.png";


export default function Carrosel() {

    return (

        <div className="w-[700px] max-w-full">

            <Swiper slidesPerView={1} modules={[Navigation]} navigation={true} loop={true} className={`w-[700px] max-w-full rounded-3xl bg-white`}>

                <SwiperSlide><Image src={Imagem1} alt="Imagem do sistema 1" draggable="false" loading="eager"/></SwiperSlide>
                <SwiperSlide><Image src={Imagem1} alt="Imagem do sistema 1" draggable="false" loading="eager"/></SwiperSlide>
                <SwiperSlide><Image src={Imagem1} alt="Imagem do sistema 1" draggable="false" loading="eager"/></SwiperSlide>
               
            </Swiper>


        </div>
    );
};
