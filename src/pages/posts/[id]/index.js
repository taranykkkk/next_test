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
      `${process.env.NEXT_PUBLIC_DB_URL}/${params.id}`,
    );

    if (response.status === 404) {
      return {
        notFound: true,
      };
    }

    const post = await response.json();

    return { props: { post } };
  } catch (error) {
    console.error(error);
  }
}
export default PostPage;
