import React from 'react'
import Image from 'next/image'
import Author from './author';
import fetcher from "../lib/fetcher";
import Spinner from "./spinner";
import Error from "./error";
import Link from 'next/link';

const Related = () => {
  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner />;
  if (isError) return <Error />;
  return (
    <section id='blog'>
      <div className="flex flex-col gap-10">
        <h3 className="font-bold text-3xl">Related</h3>
        {
          data.map((value) => (
            <Post data={value} key={value.id} />
          ))
        }
      </div>
    </section>
  );
}

function Post({data}) {
  const {id, img, title, category, published, author} = data
    return (
      <div className="flex gap-3" key={id}>
        <Link href={`/posts/${id}`}></Link>
        <Image
          src={img}
          width={100}
          height={40}
          alt="gambar"
          className="object-cover"
        />
        <Link href={`/posts/${id}`}>
          <div className="flex flex-col">
            <div className="flex gap-1">
              <h3 className="font-semibold text-sm text-orange-500">
                {category}
              </h3>
              <h3 className="font-semibold text-sm text-gray-800">{published}</h3>
            </div>
            <h3 className="font-bold text-sm text-gray-700">{title}</h3>
            {author ? <Author {...author} /> : <></>}
          </div>
        </Link>
      </div>
    );
}

export default Related