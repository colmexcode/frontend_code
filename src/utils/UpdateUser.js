// var base64 = require('base-64');
const API = 'https://cozyplace.herokuapp.com/';

const UpdateUser = async (form, token, id) => {
  const apiURL = `${API}api/user/${id}`;
  console.log(apiURL);
  try {
    const response = await fetch(apiURL, {
      method: 'PUT', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        id: `${id}`,
      }),
      body: JSON.stringify(form), // body data type must match "Content-Type" header
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
export default UpdateUser;
