import type { NextPage } from 'next';

import { getAllPosts } from '~/lib/blog/api';
import BlogPost from '~/lib/blog/blog-post';
import configuration from '~/configuration';

import LayoutContainer from '~/components/LayoutContainer';
import PostsList from '~/components/PostsList';
import Header from '~/components/Header';
import Meta from '~/components/Meta';

const BlogHome: NextPage<{
  posts: BlogPost[];
}> = ({ posts }) => {
  return (
    <>
      <Meta />

      <LayoutContainer>
        <div
          className={'align-center flex h-full flex-col justify-center pb-32'}
        >
          {/* <div className={'my-8'}>
            <h1 className={'text-6xl font-extrabold'}>
              {configuration.site.siteName}
            </h1>
          </div>

          <PostsList posts={posts} /> */}
          <div className="my-32 flex flex-col items-center justify-center">
            <div className="inline-flex items-center rounded-md bg-yellow-50 px-4 py-3 text-yellow-800 shadow-sm">
              <svg
                className="mr-2 h-5 w-5 flex-shrink-0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l5.518 9.82c.75 1.334-.213 2.981-1.742 2.981H4.481c-1.529 0-2.492-1.647-1.742-2.98l5.518-9.821zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-3a1 1 0 01-1-1V6a1 1 0 112 0v3a1 1 0 01-1 1z"
                  clipRule="evenodd"
                />
              </svg>

              <span className="text-lg font-medium">Lavori in corso…</span>
            </div>

            <p className="mt-4 max-w-xl text-center text-sm text-gray-500">
              Lanceremo presto il blog: tornaci a trovare.
            </p>
          </div>
        </div>
      </LayoutContainer>
    </>
  );
};

export function getStaticProps() {
  const posts = getAllPosts().slice(0, 6);

  return {
    props: {
      posts,
    },
  };
}

export default BlogHome;
