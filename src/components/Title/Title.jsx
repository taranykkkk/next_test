import InputField from '../InputField/InputField';

function Title({ value, onChange, text, postKey }) {
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

export default Title;
