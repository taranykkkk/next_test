import ImageUploader from '@/components/ImageUploader/ImageUploader';
import styles from './CreatedPost.module.scss';
import Title from '@/components/Title/Title';
import Description from '@/components/Description/Description';
import TextEditor from '@/components/TextEditor/TextEditor';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function CreatedPost({ namePage, redactValue }) {
  const [post, setPost] = useState({
    title: '',
    short_description: '',
    body: '',
    image: '',
  });

  const router = useRouter();

  const changePostValue = (key, value) => {
    setPost((prev) => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    if (!!redactValue) {
      changePostValue('title', redactValue.title);
      changePostValue('short_description', redactValue.short_description);
      changePostValue('body', redactValue.body);
      changePostValue('image', redactValue.image_path);
    }
  }, [redactValue]);

  const onSubmit = async () => {
    const formData = new FormData();
    Object.entries(post).forEach(([key, value]) => formData.append(key, value));
    try {
      const response = await fetch(
        `https://test.millionflowers.com.ua/api/posts/`,
        {
          method: 'POST',
          mode: 'cors',
          body: formData,
          headers: {
            Accept: 'application/json',
          },
        },
      );
      const json = await response.json();
      // console.log('Ok:', JSON.stringify(json));
      router.push('/posts');
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <div className={styles.container}>
      <h1>{namePage}</h1>

      <div className={styles.card}>
        <Title
          onChange={changePostValue}
          value={post.title}
          text="Title"
          postKey="title"
        />
        <Description
          onChange={changePostValue}
          value={post.short_description}
          text="Description"
          postKey="short_description"
        />
        <ImageUploader
          onChange={changePostValue}
          redactValue={redactValue?.image_path}
        />
        <TextEditor onChange={changePostValue} value={post.body} />
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CreatedPost;
