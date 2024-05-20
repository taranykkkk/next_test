import PostForm from '@/components/PostForm/PostForm';
import dynamic from 'next/dynamic';

const TestForm = dynamic(() => import('@/components/TestForm/TestForm'));

function RedactPostPage({ post }) {
  return <TestForm namePage="Redact post" redactValue={post} />;
  // <PostForm namePage="Redact post" redactValue={post} />;
}

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/${params.id}`,
    );
    if (res.status === 404) {
      return {
        notFound,
      };
    }
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
  } catch (error) {
    console.error(error);
  }
}

export default RedactPostPage;
