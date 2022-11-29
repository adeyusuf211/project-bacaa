import React from 'react'
import Image from 'next/image'
import Author from './author'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Autoplay } from 'swiper'
import Link from 'next/link'
import fetcher from "../lib/fetcher"
import Spinner from "./spinner"
import Error from "./error"
import 'swiper/css'

const sectionOne = () => {
    const { data, isLoading, isError } = fetcher("api/trending");
    if (isLoading) return <Spinner />;
    if (isError) return <Error />;

    SwiperCore.use([Autoplay])

    return (
        <section>
            <Swiper
                slidesPerView={1}
                loop={true}
                autoplay={{
                    delay: 5000
                }}
            >
                {
                    data.map((value) => (
                        <SwiperSlide key={value.id}><Slide data={value} /></SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
    )
}

function Slide({ data }) {
    const {id, img, title, description, category, author, published} = data;
    return (
      <div className="grid md:grid-cols-2 py-10 items-center gap-5" key={id}>
        <Link href={`/posts/${id}`}>
          <div className="flex flex-col justify-center h-full">
            <div className="flex gap-2">
              <h3 className="font-semibold text-orange-500">{category}</h3>
              <h3 className="font-semibold text-gray-800">{published}</h3>
            </div>
            <h3 className="font-medium text-5xl text-gray-700">{title}</h3>
            <p className="text-gray-600 py-3">{description}</p>
            {author ? <Author {...author} /> : <></>}
          </div>
        </Link>
        <div className="flex w-full">
          <Link href={`/posts/${id}`}>
            <Image
              src={img}
              alt={title}
              width={2000}
              height={2000}
              className="object-cover"
            />
          </Link>
        </div>
      </div>
    );
}

export default sectionOne