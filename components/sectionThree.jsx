import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from "swiper";
import Image from 'next/image';
import Author from './author';
import fetcher from "../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";
import Link from 'next/link';

const sectionThree = () => {
    const { data, isLoading, isError } = fetcher("api/popular");
    if (isLoading) return <Spinner />;
    if (isError) return <Error />;

    SwiperCore.use([Autoplay]);

    return (
      <div className="w-full h-full">
        <h3 className="font-bold text-3xl text-center py-10">Most Popular</h3>
        {/* swiper */}
        <Swiper
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }}
          autoplay={{
            delay: 5000,
          }}
        >
          {data.map((value) => (
            <SwiperSlide key={value.id}>
              <Post data={value} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
}

function Post( {data} ) {
  const { id, img, title, description, category, author, published } = data;
  return (
    <div className="relative w-full" key={id}>
      <Link href={`/posts/${id}`}>
        <div className="flex">
          <Image
            src={img}
            alt="gambar"
            width={1000}
            height={1000}
            className="object-cover"
          />
        </div>
      </Link>
      <Link href={`/posts/${id}`}>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <h3 className="font-semibold text-orange-500">{category}</h3>
            <h3 className="font-semibold text-gray-800">{published}</h3>
          </div>
          <div className="block">
            <h3 className="font-medium md:text-4xl text-3xl text-gray-700">
              {title}
            </h3>
            <p className="text-md font-gray-700 my-2">{description}</p>
          </div>
          {author ? <Author {...author} /> : <></>}
        </div>
      </Link>
    </div>
  );
}

export default sectionThree