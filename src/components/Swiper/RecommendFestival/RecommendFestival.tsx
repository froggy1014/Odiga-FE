"use client";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import Link from "next/link";
import { Session } from "next-auth";
import { FC } from "react";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { RecommendFestivalResponse } from "@/apis/festivals/recommendFestival/recommendFestivalType";
import RecommendFestivalHeader from "@/app/(route)/(home)/_components/FestivalRecommend/RecommendFestivalHeader";
import { formatToKoreanDate } from "@/lib/dayjs";

interface Props {
  recommendFestivals?: RecommendFestivalResponse;
  session: Session;
}

const RecommendFestivalList: FC<Props> = ({ recommendFestivals, session }) => {
  return (
    <section className="relative h-full w-full px-[24px] py-[35px]">
      <RecommendFestivalHeader session={session} />
      <Swiper
        autoplay={{
          delay: 3000,
          pauseOnMouseEnter: true,
        }}
        loop={!!recommendFestivals?.festivals.length}
        pagination={{
          type: "fraction",
          el: ".pagination_fraction",
          renderFraction: function (currentClass, totalClass) {
            return (
              '<span class="' +
              currentClass +
              '"></span>' +
              " / " +
              '<span class="' +
              totalClass +
              '"></span>'
            );
          },
        }}
        modules={[Pagination, Autoplay]}
        className="relative flex h-[289px] w-full items-center justify-center rounded-[18px]"
      >
        {recommendFestivals?.festivals.map((festival) => (
          <SwiperSlide
            key={festival.festivalId}
            className="relative flex h-[289px] w-full cursor-pointer items-center justify-center"
          >
            <Image
              src={festival.thumbnailImage}
              alt="image"
              fill
              className="rounded-[18px]"
            />
            <Link
              href={`/festivals/${festival.festivalId}`}
              className="absolute bottom-[20px] left-[10px] z-[2] flex h-auto w-auto flex-col gap-[4px] rounded-[10px] px-[12px] py-[8px]"
            >
              <h2 className="text-body2-bold text-gray-scale-0">
                {`${festival.sido} ${festival.sigungu} | ${formatToKoreanDate(festival.startDate)} - ${formatToKoreanDate(festival.endDate)}`}
              </h2>
              <h1 className="text-title-bold text-gray-scale-0">
                {festival.name}
              </h1>
            </Link>
            <div className="absolute left-0 top-0 h-full w-full bg-gray-scale-900/20" />
          </SwiperSlide>
        ))}
        <button className="absolute right-[10px] top-[10px] z-[4] rounded-[40px]  bg-gray-scale-900/50 px-[12px] py-[8px] text-button2-medium text-white">
          <span className="pagination_fraction"></span>
        </button>
      </Swiper>
    </section>
  );
};

export default RecommendFestivalList;
