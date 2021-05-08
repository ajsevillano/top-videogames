import { fetchSearch } from '../../actions/gamesAction';
import { useDispatch } from 'react-redux';

const useNavigation = (textInput, setTextInput, buttonRef) => {
  const dispatch = useDispatch();

  const submitOk = () => {
    dispatch(fetchSearch(textInput));
    return (buttonRef.current.style.display = 'none');
  };

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };
  const submitSearch = (e) => {
    e.preventDefault();
    !textInput ? (buttonRef.current.style.display = 'block') : submitOk();
    setTextInput('');
  };

  return [inputHandler, submitSearch];
};

export default useNavigation;
