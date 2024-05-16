import CardPost from '../CardPost/CardPost';

const PostList = ({ posts = [], onDelete }) => {
  return (
    <>
      {posts.map((post) => (
        <CardPost key={post.id} {...post} onDelete={onDelete} />
      ))}
    </>
  );
};

export default PostList;
