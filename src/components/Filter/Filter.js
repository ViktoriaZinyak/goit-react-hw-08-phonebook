import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/filterSlice';
import { Input } from 'components/RegisterForm/RegisterForm.styled';
import { Wrap } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const onChange = e => {
    dispatch(setFilter(e.currentTarget.value.toLowerCase().trim()));
  };

  return (
    <Wrap>
      <label>
        <span>Find contacts by name</span>
        <Input type="text" onChange={onChange}></Input>
      </label>
    </Wrap>
  );
};

export default Filter;
