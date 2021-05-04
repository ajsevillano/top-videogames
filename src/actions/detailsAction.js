import axios from 'axios';
import useApi from '../utils/useApi';

export const loadDetail = (id) => async (dispatch) => {
  const [gameDetailsURL] = useApi();

  //FETCH AXIOS
  const detailData = await axios.get(gameDetailsURL(id));

  dispatch({
    type: 'GET_DETAIL',
    payload: {
      game: detailData.data,
    },
  });
};
