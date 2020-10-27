// var base64 = require('base-64');
const API = 'https://cozyplace.herokuapp.com/';

const createUser = async (form) => {
  const apiURL = `${API}api/user/signup`;
  // const fori = JSON.stringify({
  //   fullname: 'martin',
  //   email: 'correo12245@ejemplo2asd.com',
  //   username: 'ejemplo123123',
  //   password: 'asdqweq1we81e8128e',
  // });
  // console.log(fori);
  console.log(apiURL);
  try {
    const response = await fetch(apiURL, {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
      // credentials: 'same-origin', // include, *same-origin, omit
      headers: new Headers({
        'Content-Type': 'application/json',
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
export default createUser;
