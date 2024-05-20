import { useForm, Controller } from 'react-hook-form';
import styles from './FormPost.module.scss';
import { useRouter } from 'next/router';
import InputField from '../InputField/InputField';
import ImageUploader from '../ImageUploader/ImageUploader';
import TextEditor from '../TextEditor/TextEditor';

function FormPost({ namePage, redactValue }) {
  const { register, handleSubmit, formState, setValue, getValues, control } =
    useForm({
      defaultValues: redactValue || {
        title: '',
        short_description: '',
        body: '',
        image: '',
      },
    });
  const router = useRouter();

  const onSubmit = async (data) => {
    const formData = new FormData();
    const { image, ...otherData } = data;
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
        <InputField register={register('title')} text="Title" />

        <InputField
          register={register('short_description')}
          text="Description"
        />
        <Controller
          control={control}
          name="ImageUploader"
          render={() => (
            <ImageUploader
              register={register('image')}
              imageValue={getValues('image')}
              setValue={setValue}
            />
          )}
        />

        <TextEditor
          value={formState.defaultValues.body}
          register={register('body')}
        />
        <button type="submit" onClick={handleSubmit(onSubmit)}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default FormPost;
