import { useEffect, useState } from 'react';
import styles from './ImageUploader.module.scss';

function ImageUploader({ onChange, redactValue }) {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];

    if (selectedImage) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        onChange('image', selectedImage);
      };
      reader.readAsDataURL(selectedImage);
    }
  };
  useEffect(() => {
    if (!!redactValue) {
      setImage(redactValue);
    }
  }, [redactValue]);

  const handleDeleteImg = () => {
    setImage(null);
    onChange('image', '');
  };

  return (
    <div className={styles.uploader_container}>
      <h3>Upload image</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
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
