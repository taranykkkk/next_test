import InputField from '../InputField/InputField';

function Description({ value, onChange, text, id }) {
  return <InputField value={value} onChange={onChange} text={text} id={id} />;
}

export default Description;
