import { useState } from 'react';
import styles from './ImageUploader.module.scss';

// function ImageUploader({ onChange, imageValue }) {
function ImageUploader({ register, imageValue, setValue }) {
  const [image, setImage] = useState(imageValue);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
        setValue('image', selectedImage);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleDeleteImg = () => {
    setImage(null);
    setValue('image', '');
  };

  return (
    <div className={styles.uploader_container}>
      <h3>Upload image</h3>
      <input
        type="file"
        accept="image/*"
        // {...register, {
        //   onChange:(e) => handleImageChange(e),
        // }}
        {...register('image', {
          onChange: (e) => handleImageChange(e),
        })}
        id="imageInput"
      />
      <div>
        <label htmlFor="imageInput">Added Image</label>
        <button style={{ marginLeft: '10px' }} onClick={handleDeleteImg}>
          Delete Image
        </button>
      </div>

      {image && <img src={image} />}
    </div>
  );
}

export default ImageUploader;
