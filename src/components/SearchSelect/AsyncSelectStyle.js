const style = {
  control: (base) => ({
    ...base,
    border: 0,
    backgroundColor: 'black',
    boxShadow: 'none',
    width: '500px',
    marginRight: '20px',
    color: 'white',
  }),
  input: (base) => ({
    ...base,
    color: 'white',
  }),
  menu: (base) => ({
    ...base,
    backgroundColor: 'black',
    color: 'white',
    zIndex: 22,
    maxWidth: '500px',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#8f9394' : 'black',
    color: state.isFocused ? 'black' : 'inherit',
  }),
};

export default style;
