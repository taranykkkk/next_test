import Post from '@/components/Post/Post';

function PostPage({ post }) {
  return (
    <div style={{ padding: '40px', height: '100%' }}>
      <Post {...post} />
    </div>
  );
}

export async function getServerSideProps({ params }) {
  try {
    const response = await fetch(
      `https://test.millionflowers.com.ua/api/posts/${params.id}`,
    );
    const post = await response.json();

    return { props: { post } };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}
export default PostPage;
