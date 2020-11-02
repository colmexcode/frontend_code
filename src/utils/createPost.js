const URL = 'https://cozyplace.herokuapp.com/api/post/create';

export async function createPost(form, token) {
  // country: "Colombia"
  // date: "2020-11-18"
  // description: "asascas"
  // duration: "1.5 Hour"
  // image: "blob:http://localhost:3000/86746b1e-de70-4654-831e-a0a65f1f9f09"
  // location: "Mexico"
  // rating: 3
  // tags: "5f9ba37acac3fc0017310021"
  // title: "aaaa"
  // user: "5f9d846adad0c80017e9eb07"

  const response = await fetch(URL, {
    method: 'POST',
    mode: 'cors',
    headers: {
      // 'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    // body: JSON.stringify(form),
    body: form,
  });
  return response;
}
