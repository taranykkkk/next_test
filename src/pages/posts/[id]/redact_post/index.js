import CreatedPost from '@/components/CreatePost/CreatePost';

function RedactPostPage({ post }) {
  const redactValue = {
    id: post.id,
    title: post.title,
    short_description: post.short_description,
    body: post.body,
    image: post.image_path,
  };

  return <CreatedPost namePage="Redact post" redactValue={redactValue} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://test.millionflowers.com.ua/api/posts/${params.id}`,
  );
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}

export default RedactPostPage;
