import CardPost from '@/components/CardPost/CardPost';
import styles from './Posts.module.scss';
import { useState } from 'react';
import { useRouter } from 'next/router';

function PostsPage({ postsArray = [], query }) {
  const [posts, setPosts] = useState(postsArray);
  const [searchValue, setSearchValue] = useState(query.search);

  const router = useRouter();

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
  return (
    <div className={styles.posts_container}>
      <h1>Posts</h1>
      <div className={styles.search_container}>
        <input
          placeholder="Search post..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button disabled={!searchValue} onClick={filteredPosts}>
          Search
        </button>
      </div>

      <div className={styles.post_list}>
        {posts.map((post) => (
          <CardPost key={post.id} {...post} setPosts={setPosts} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps({ query }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}?search=${
      query.search ? query.search : ''
    }`,
  );

  const data = await res.json();
  const postsArray = data.data;

  return { props: { postsArray, query } };
}
export default PostsPage;
