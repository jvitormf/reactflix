import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categories`;

function create(category) {
  return fetch(URL_CATEGORIES, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(category),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Could not create data!');
    });
}

function remove(catgoryId) {
  return fetch(`${URL_CATEGORIES}/${catgoryId}`, {
    method: 'DELETE',
    // headers: {
    //   'Content-type': 'application/json',
    // },
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Could not remove data!');
    });
}

function getAll() {
  return fetch(URL_CATEGORIES)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Could not fetch data!');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Could not fetch data!');
    });
}

export default {
  create,
  remove,
  getAll,
  getAllWithVideos,
};
