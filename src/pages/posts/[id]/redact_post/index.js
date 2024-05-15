import PostForm from '@/components/PostForm/PostForm';

function RedactPostPage({ post }) {
  return <PostForm namePage="Redact post" redactValue={post} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_DB_URL}/${params.id}`);
  const post = await res.json();
  return {
    props: {
      post: {
        id: post.id,
        title: post.title,
        short_description: post.short_description,
        body: post.body,
        image: post.image_path,
      },
    },
  };
}

export default RedactPostPage;
