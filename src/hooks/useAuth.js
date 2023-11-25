import { useSelector } from 'react-redux';
import {
  selectUser,
  selectToken,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsLoading,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoading = useSelector(selectIsLoading);

  return { user, token, isLoggedIn, isRefreshing, isLoading };
};
