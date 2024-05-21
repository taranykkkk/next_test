import CardPost from '../CardPost/CardPost';
import { useEffect, useState } from 'react';

const PostList = ({ posts = [], onDelete }) => {
  const [viewedData, setViewedData] = useState(new Set());

  useEffect(() => {
    setViewedData(new Set(JSON.parse(localStorage.getItem('viewed') || '[]')));
  }, []);
  return (
    <>
      {posts.map((post) => {
        const isViewed = viewedData.has(post.id.toString());
        return (
          <CardPost
            key={post.id}
            {...post}
            onDelete={onDelete}
            isViewed={isViewed}
          />
        );
      })}
    </>
  );
};

export default PostList;
