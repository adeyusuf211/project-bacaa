import React from 'react'
import Image from 'next/image';
import Author from './author';
import fetcher from "../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";

const sectionFour = () => {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;

  return (
    <div className="w-full h-full">
      <div className="grid grid-cols-2 py-10">
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-3xl">Business</h3>
          {data[1] ? <Post data={data[1]} /> : ""}
          {data[2] ? <Post data={data[2]} /> : ""}
          {data[3] ? <Post data={data[3]} /> : ""}
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-bold text-3xl">Travel</h3>
          {data[4] ? <Post data={data[4]} /> : ""}
          {data[5] ? <Post data={data[5]} /> : ""}
          {data[2] ? <Post data={data[2]} /> : ""}
        </div>
      </div>
    </div>
  );
}

function Post( {data} ) {
    const { id, img, title, description, category, author, published } = data;
    return (
      <div className="flex gap-3">
        <Image src={img} alt={title} width={120} height={80} className="object-cover" />
        <div className="flex flex-col">
          <div className="flex gap-1">
            <h3 className="font-semibold text-sm text-orange-500">{category}</h3>
            <h3 className="font-semibold text-sm text-gray-800">
              {published}
            </h3>
          </div>
          <h3 className="font-bold text-md text-gray-700">
            {title}
          </h3>
          {author ? <Author {...author} />:<></>}
        </div>
      </div>
    );
}

export default sectionFour