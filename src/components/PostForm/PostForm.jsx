import ImageUploader from '@/components/ImageUploader/ImageUploader';
import styles from './PostForm.module.scss';
import TextEditor from '@/components/TextEditor/TextEditor';
import { useState } from 'react';
import { useRouter } from 'next/router';
import InputField from '../InputField/InputField';

function PostForm({ namePage, redactValue }) {
  const [post, setPost] = useState(
    redactValue || {
      title: '',
      short_description: '',
      body: '',
      image: '',
    },
  );

  const router = useRouter();

  const changePostValue = (key) => {
    return (value) => {
      setPost((prev) => ({ ...prev, [key]: value }));
    };
  };

  const onSubmit = async () => {
    const formData = new FormData();
    const { image, ...otherData } = post;
    Object.entries(otherData).forEach(([key, value]) =>
      formData.append(key, value),
    );

    if (image instanceof File) {
      formData.append('image', image);
    }
    if (redactValue) formData.append('_method', 'PATCH');

    const URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}/${
      redactValue ? redactValue.id : ''
    }`;

    try {
      const response = await fetch(URL, {
        method: 'POST',
        mode: 'cors',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      const json = await response.json();
      router.push('/posts');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className={styles.container}>
      <h1>{namePage}</h1>

      <div className={styles.card}>
        <InputField
          onChange={changePostValue('title')}
          value={post.title}
          text="Title"
        />

        <InputField
          onChange={changePostValue('short_description')}
          value={post.short_description}
          text="Description"
        />

        <ImageUploader
          onChange={changePostValue('image')}
          imageValue={post.image}
        />
        <TextEditor onChange={changePostValue('body')} value={post.body} />
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default PostForm;
