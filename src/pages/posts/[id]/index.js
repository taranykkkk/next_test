import Post from '@/components/Post/Post';

function PostPage({ post }) {
  return (
    <div style={{ padding: '40px', height: '100%' }}>
      <Post {...post} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://test.millionflowers.com.ua/api/posts/${params.id}`,
  );
  const post = await res.json();

  return { props: { post } };
}
export default PostPage;
