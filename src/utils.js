export function getQueryParams() {
  let query = window.location.search.substring(1);
  let pairs = query.split('&').map((str) => str.split('='));
  return pairs.reduce((memo, pair) => {
    memo[pair[0]] = pair[1];
    return memo;
  }, {});
}

const baseApiUrl = 'https://localhost:3010';

export function fetchUserDetails(options) {
  const { token } = options;
  const url = `${baseApiUrl}/user?token=${token}`;

  return fetch(url, {
    headers: {
      'Accept': 'application/json'
    },
  })
  .then(response => {
    return response.json();
  })
  .catch(error => {
    console.error('Could not fetch user details', error);
  });
}