import styles from './Posts.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Pagination from '@/components/Pagination/Pagination';
import PostList from '@/components/PostList/PostList';

function PostsPage({ postsArray = [], query, metaData }) {
  const router = useRouter();

  const [posts, setPosts] = useState(postsArray);
  const [searchValue, setSearchValue] = useState(query.search);
  const [currentPage, setCurrentPage] = useState(metaData.current_page);

  async function filteredPosts() {
    try {
      if (searchValue.length > 0) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}?search=${searchValue}`,
        );

        const dataPosts = await res.json();
        router.push({ pathname: 'posts', query: { search: searchValue } });
        setPosts(dataPosts.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function previewPost(value) {
    try {
      router.push(`?page=${metaData.current_page}&per_page=${value}`);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleShowMore() {
    const page = currentPage;
    const page_last = metaData.last_page;
    const per_page = metaData.per_page;

    try {
      if (page < page_last) {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}?page=${
            page + 1
          }&per_page=${per_page}`,
        );
        const data = await res.json();
        const showMoreData = data.data;
        router.push(`?page=${page + 1}&per_page=${per_page}`, undefined, {
          shallow: true,
        });
        setCurrentPage((prev) => prev + 1);
        setPosts((prev) => [...prev, ...showMoreData]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className={styles.posts_container}>
      <h1>Posts</h1>
      <div className={styles.search_container}>
        <div className={styles.search_bar}>
          <input
            placeholder="Search post..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button disabled={!searchValue} onClick={filteredPosts}>
            Search
          </button>
        </div>
      </div>

      <div className={styles.post_list}>
        <PostList posts={posts} setPosts={setPosts} />
      </div>
      {metaData.last_page !== currentPage && (
        <div className={styles.show_more}>
          <button onClick={handleShowMore}>Show more</button>
        </div>
      )}
      <Pagination
        handleSelect={previewPost}
        metaData={metaData}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const page = query.page ? query.page : '1';
  const per_page = query.per_page ? query.per_page : '5';
  const search = query.search ? query.search : '';

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}?page=${page}&per_page=${per_page}&search=${search}`,
    );

    const data = await res.json();
    const last_page = data.last_page;
    if (data.last_page < page || data.per_page < per_page) {
      console.log(page);
      return {
        redirect: {
          destination: `?page=${last_page}&per_page=5`,
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
        // key: data.current_page,
      },
    };
  } catch (error) {
    console.log(error);
  }
}

export default PostsPage;
