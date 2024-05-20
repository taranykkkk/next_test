import dynamic from 'next/dynamic';

const FormPost = dynamic(() => import('@/components/FormPost/FormPost'));

function CreatePostPage() {
  return <FormPost namePage="Create post" />;
}

export default CreatePostPage;
