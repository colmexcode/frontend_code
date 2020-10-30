const URL = 'https://cozyplace.herokuapp.com/api/post/create';

export async function createPost(form, token) {
  console.log(form);
  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(form),
  });
  console.log(response);
  const data = await response.json();
  console.log(data);
}
