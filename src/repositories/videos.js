import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}?_embed=videos`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Could not create data!');
    });
}

function remove(videoId) {
  return fetch(`${URL_VIDEOS}/${videoId}`, {
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

function getAllWithCategory() {
  return fetch(`${URL_VIDEOS}?_expand=category`)
    .then(async (response) => {
      if (response.ok) {
        const data = await response.json();

        return data;
      }

      throw new Error('Could not fetch data!');
    });
}

export default {
  getAllWithCategory,
  create,
  remove,
};
