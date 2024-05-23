const style = {
  container: (base) => ({
    ...base,
    width: '100%',
  }),
  control: (base) => ({
    ...base,
    border: 0,
    backgroundColor: 'black',
    boxShadow: 'none',
    color: 'white',
    width: '100%',
  }),
  input: (base) => ({
    ...base,
    color: 'white',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: 'black',
    color: 'white',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#8f9394' : 'black',
    color: state.isFocused ? 'black' : 'inherit',
  }),
};

export default style;
