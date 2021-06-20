const api = 'https://60cf9e924a030f0017f67dc3.mockapi.io/api/zenprojectlist';
axios.get(api + 'users')
    .then((response) => console.log(response))
    .catch((error) => console.log(error));