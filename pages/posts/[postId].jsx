import React, { useDebugValue } from 'react'
import Layout from '../../layout'
import Author from '../../components/author'
import Related from '../../components/related'
import Image from 'next/image'
import getPost from '../../lib/helper';
import fetcher from '../../lib/fetcher'
import Loading from '../../components/spinner';
import Error from '../../components/error';
import { useRouter } from 'next/router'
import { SWRConfig } from 'swr'
import Link from 'next/link'

export default function Page({fallback}) {

  const router    = useRouter()
  const {postId}  = router.query;

  const {data, isLoading, isError} = fetcher(`api/posts/${postId}`);

  if(isLoading) return <Loading />
  if(isError) return <Error />

  return (
    <SWRConfig value={{ fallback }}>
      <Article {...data} />
    </SWRConfig>
  );
}

const Article = ({id, img, title, subtitle, description, category, author, published}) => {
  return (
    <Layout>
      <section className="mx-auto py-16 relative" key={id}>
        <div className="flex gap-10">
          <div className="flex flex-col w-full">
            <div className="flex justify-center">
              {author ? <Author /> : <></>}
            </div>
            <div className="py-10">
              <h1 className="font-bold text-4xl text-center pb-5">{title}</h1>
              <p className="text-gray-700 text-center">{subtitle}</p>
              <div className="py-10">
                <Link href={`/posts/${id}`}>
                  <Image
                    src={img}
                    alt={title}
                    width={900}
                    height={600}
                    className="object-cover object-center"
                  />
                </Link>
              </div>
              <div className="flex flex-col text-gray-600 text-lg gap-4">
                <p>{description}</p>
              </div>
            </div>
          </div>
          <div className="sticky top-0">
            <Related />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps ({params}) {
  const post = await getPost(params.postId);
  return { 
    props: {
      fallback: {
        '/api/posts': post
      }
    }
   }
}

export async function getStaticPaths() {
  const posts = await getPost();
  const paths = posts.map((post) => {
    return {
      params: {
        postId: post.id.toString()
      }
    }
  })
  return {
    paths, fallback: false
  }
}