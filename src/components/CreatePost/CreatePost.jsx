import ImageUploader from '@/components/ImageUploader/ImageUploader';
import styles from './CreatePost.module.scss';
import Title from '@/components/Title/Title';
import Description from '@/components/Description/Description';
import TextEditor from '@/components/TextEditor/TextEditor';
import { useState } from 'react';
import { useRouter } from 'next/router';

function CreatePost({ namePage, redactValue }) {
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

  // const onSubmit = async () => {
  //   const formData = new FormData();
  //   Object.entries(post).forEach(([key, value]) => formData.append(key, value));
  //   try {
  //     const response = await fetch(
  //       `https://test.millionflowers.com.ua/api/posts/`,
  //       {
  //         method: 'POST',
  //         mode: 'cors',
  //         body: formData,
  //         headers: {
  //           Accept: 'application/json',
  //         },
  //       },
  //     );
  //     const json = await response.json();
  //     router.push('/posts');
  //   } catch (error) {
  //     console.error('Error:', error);
  //   }
  // };

  const onSubmit = async () => {
    const formData = new FormData();
    // Object.entries(post).forEach(([key, value]) => formData.append(key, value));

    for (let [key, value] of Object.entries(post)) {
      if (key === 'image' && typeof value === 'string') {
        continue;
      } else {
        formData.append(key, value);
      }
    }
    const URL = redactValue
      ? `https://test.millionflowers.com.ua/api/posts/${redactValue.id}?_method=PATCH`
      : `https://test.millionflowers.com.ua/api/posts/`;

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
        <Title
          onChange={changePostValue('title')}
          value={post.title}
          text="Title"
          id="title"
        />
        <Description
          onChange={changePostValue('short_description')}
          value={post.short_description}
          text="Description"
          id="description"
        />
        <ImageUploader
          onChange={changePostValue('image')}
          redactValue={post.image}
        />
        <TextEditor onChange={changePostValue('body')} value={post.body} />
      </div>
      <button type="submit" onClick={onSubmit}>
        Submit
      </button>
    </div>
  );
}

export default CreatePost;
