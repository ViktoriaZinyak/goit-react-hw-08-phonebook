import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Button } from 'components/RegisterForm/RegisterForm.styled';
import { Wrap } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrap>
      <p>
        Welcome, <span>{user.name}</span>{' '}
      </p>
      <Button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </Wrap>
  );
};
