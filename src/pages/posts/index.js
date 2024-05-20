import styles from './Posts.module.scss';
import { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Pagination from '@/components/Pagination/Pagination';
import PostList from '@/components/PostList/PostList';
import SearchBar from '@/components/SearchBar/SearchBar';
import MyAsyncSelect from '@/components/SearchSelect/SearchSelect';

function PostsPage({ postsArray = [], query, metaData }) {
  const router = useRouter();

  const [posts, setPosts] = useState(postsArray);
  const [metaDataState, setMetaDataState] = useState(metaData);

  const filteredPosts = useCallback(async (search) => {
    const url = new URL(process.env.NEXT_PUBLIC_BACKEND_URL);
    const params = { search };
    url.search = new URLSearchParams(params).toString();

    try {
      if (search) {
        const res = await fetch(url);

        const dataPosts = await res.json();
        router.push({ pathname: 'posts', query: { search } });
        setPosts(dataPosts.data);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function previewPost(value) {
    try {
      router.push({ query: { page: metaData.current_page, per_page: value } });
    } catch (error) {
      console.log(error);
    }
  }

  const handleShowMore = useCallback(async () => {
    const page = metaDataState.current_page;
    const page_last = metaData.last_page;
    const per_page = metaData.per_page;

    const url = new URL(process.env.NEXT_PUBLIC_BACKEND_URL);
    const params = { page: page + 1, per_page };
    url.search = new URLSearchParams(params).toString();

    try {
      if (page < page_last) {
        const res = await fetch(url);
        const data = await res.json();

        const showMoreData = data.data;

        router.push({ query: { page: page + 1, per_page } }, undefined, {
          shallow: true,
        });
        setMetaDataState((prev) => ({
          ...prev,
          current_page: prev.current_page + 1,
        }));
        setPosts((prev) => [...prev, ...showMoreData]);
      }
    } catch (error) {
      console.log(error);
    }
  }, [metaDataState, metaData]);

  const handleDeletePost = useCallback(
    async (id) => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/${id}`,
          {
            method: 'DELETE',
          },
        );
        setPosts((prev) => prev.filter((elem) => elem.id !== id));
        setMetaDataState(metaData);

        router.push({
          pathname: '',
          query: {
            page: metaDataState.current_page,
            per_page: metaDataState.per_page,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },
    [posts],
  );

  useEffect(() => {
    setPosts(postsArray);
  }, [postsArray]);

  useEffect(() => {
    setMetaDataState(metaData);
  }, [metaData]);

  return (
    <div className={styles.posts_container}>
      <h1>Posts</h1>
      {/* <SearchBar search={query.search} onSearchClick={filteredPosts} /> */}
      <MyAsyncSelect onSearchClick={filteredPosts} />

      <div className={styles.post_list}>
        <PostList posts={posts} onDelete={handleDeletePost} />
      </div>
      {metaData.last_page !== metaDataState.current_page && (
        <div className={styles.show_more}>
          <button onClick={handleShowMore}>Show more</button>
        </div>
      )}
      <Pagination
        handleSelect={previewPost}
        metaData={metaData}
        metaDataState={metaDataState}
      />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page ? query.page : 1;
  const per_page = query.per_page ? query.per_page : 5;
  const search = query.search ? query.search : '';

  try {
    const url = new URL(process.env.NEXT_PUBLIC_BACKEND_URL);
    const params = { page, per_page, search };
    url.search = new URLSearchParams(params).toString();

    const res = await fetch(url);

    const data = await res.json();

    const last_page = data.last_page;
    const maxPerPage = 15;

    if (data.last_page < page || maxPerPage < per_page) {
      return {
        redirect: {
          destination: `?page=${last_page}&per_page=${
            per_page > maxPerPage ? maxPerPage : per_page
          }`,
          permanent: false,
        },
      };
    }

    const postsArray = data.data;
    const metaData = {
      current_page: data.current_page,
      last_page: data.last_page,
      per_page: data.per_page,
      total: data.total,
    };

    return {
      props: {
        postsArray,
        query,
        metaData,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default PostsPage;
