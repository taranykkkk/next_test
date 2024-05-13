import CreatedPost from '@/components/CreatedPost/CreatedPost';

function RedactPostPage({ post }) {
  return <CreatedPost namePage="Redact post" redactValue={post} />;
}

export async function getServerSideProps({ params }) {
  const res = await fetch(
    `https://test.millionflowers.com.ua/api/posts/${params.id}`,
  );
  const post = await res.json();

  return { props: { post } };
}

export default RedactPostPage;
