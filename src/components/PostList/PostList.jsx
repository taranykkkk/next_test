import CardPost from '../CardPost/CardPost';

const PostList = ({ posts = [], setPosts }) => {
  return (
    <>
      {posts.map((post) => (
        <CardPost key={post.id} {...post} setPosts={setPosts} />
      ))}
    </>
  );
};

export default PostList;
