/* export const fetchDataSuccess = (data) => ({
  type: 'FETCH_DATA_SUCCESS',
  payload: data,
});

export const fetchDataFailure = (error) => ({
  type: 'FETCH_DATA_FAILURE',
  payload: error,
});

export const fetchData = () => {
  return async (dispatch) => {
    try {
      const response = await fetch('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen', {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '71e77567f7msh51f9c14c4bd1592p106c39jsn9269e4c33e0e',
          'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      dispatch(fetchDataSuccess(data.data || []));
    } catch (error) {
      dispatch(fetchDataFailure('Errore nella richiesta API'));
    }
  };
}; */