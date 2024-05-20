// import TestForm from '@/components/TestForm/TestForm';
import dynamic from 'next/dynamic';

// const PostForm = dynamic(() => import('@/components/PostForm/PostForm'));
const TestForm = dynamic(() => import('@/components/TestForm/TestForm'));

function CreatePostPage() {
  return <TestForm namePage="Create post" />;
  // <PostForm namePage="Create post" />;
}

export default CreatePostPage;
