import CardPost from '@/components/CardPost/CardPost';
import styles from './Posts.module.scss';
import { useState } from 'react';

function PostsPage({ postsArray }) {
  const [posts, setPosts] = useState(postsArray);

  return (
    <div className={styles.posts_container}>
      <h1>Posts</h1>

      <div className={styles.post_list}>
        {posts.map((post) => (
          <CardPost key={post.id} {...post} setPosts={setPosts} />
        ))}
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  const res = await fetch('https://test.millionflowers.com.ua/api/posts');
  const data = await res.json();
  const postsArray = data.data;
  return { props: { postsArray } };
}
export default PostsPage;
