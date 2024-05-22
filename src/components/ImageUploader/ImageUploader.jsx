import { useId, useState } from 'react';
import styles from './ImageUploader.module.scss';

function ImageUploader({ imageValue, onChange }) {
  const [image, setImage] = useState(imageValue);

  const id = useId();

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage) {
      const reader = new FileReader();

      reader.onload = () => {
        setImage(reader.result);
        onChange(selectedImage);
      };
      reader.readAsDataURL(selectedImage);
    }
  };

  const handleDeleteImg = () => {
    setImage(null);
    onChange('');
  };

  return (
    <div className={styles.uploader_container}>
      <h3>Upload image</h3>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        id={id}
      />
      <div>
        <label htmlFor={id}>Added Image</label>
        <button style={{ marginLeft: '10px' }} onClick={handleDeleteImg}>
          Delete Image
        </button>
      </div>

      {image && <img src={image} />}
    </div>
  );
}

export default ImageUploader;
