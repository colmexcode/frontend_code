// var base64 = require('base-64');
const API = 'https://cozyplace.herokuapp.com/';

export const UpdateUser = async (form, token, id) => {
  const apiURL = `${API}api/user/${id}`;
  try {
    const response = await fetch(apiURL, {
      method: 'PUT',
      mode: 'cors',
      headers: new Headers({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        id: `${id}`,
      }),
      body: JSON.stringify(form),
    });
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.log('Fetch Error', error);
  }
};
