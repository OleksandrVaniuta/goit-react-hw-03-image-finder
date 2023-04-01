function FetchPhotos(value, page) {
  return fetch(
    `https://pixabay.com/api/?q=${value}&page=${page}&key=33763278-a8135cc0e5b2d03eb2d8094e4&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => response.json());
}

const api = { FetchPhotos };

export default api;
