import React from 'react'
import Image from 'next/image';
import Author from './author';
import Fetcher from '../lib/fetcher';
import Spinner from './spinner';
import Error from './error';
import Link from 'next/link';

const sectionTwo = () => {
  const { data, isLoading, isError } = Fetcher('api/posts');
  if(isLoading) return <Spinner />
  if(isError) return <Error />

  return (
    <div className="w-full h-full">
        <h3 className="font-bold text-3xl text-center py-10">Latest Post</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {
              data.map((value, i) => (
                <Post data={value} key={i} />
              ))
            }
        </div>
    </div>
  )
}

function Post({ data }) {
    const { id, img, category, title, author, published } = data;
    return (
      <div className="relative" key={id}>
        <Link href={`/posts/${id}`}>
          <div className="flex">
            <Image
              src={img}
              alt="gambar"
              width={2000}
              height={2000}
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
              <h3 className="font-medium text-xl text-gray-700">{title}</h3>
              <p className="text-md font-gray-700 my-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi
                minus consectetur, aut ratione numquam reiciendis nesciunt
                blanditiis commodi a corrupti?
              </p>
            </div>
            {author ? <Author {...author} /> : <></>}
          </div>
        </Link>
      </div>
    );
}

export default sectionTwo