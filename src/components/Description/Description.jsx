import InputField from '../InputField/InputField';

function Description({ value, onChange, text, postKey }) {
  return (
    <div>
      <InputField
        value={value}
        onChange={onChange}
        text={text}
        postKey={postKey}
      />
    </div>
  );
}

export default Description;
