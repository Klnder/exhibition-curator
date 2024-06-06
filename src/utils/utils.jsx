export function filterGallery(filters, user) {
  let galleryFilter = [];

  if (filters.mygallery === true) {
    galleryFilter = [...user.mygallery];
  } else if (filters.from === "All") {
    galleryFilter = [...user.galleryCleveland, ...user.galleryChicago];
  } else if (filters.from === "Cleveland") {
    galleryFilter = [...user.galleryCleveland];
  } else if (filters.from === "Chicago") {
    galleryFilter = [...user.galleryChicago];
  }

  if (filters.sortBy === "ascendant") {
    galleryFilter.sort((a, b) => {
      if (a.title < b.title) return -1;
      if (a.title > b.title) return 1;
      return 0;
    });
  } else {
    galleryFilter.sort((a, b) => {
      if (a.title < b.title) return 1;
      if (a.title > b.title) return -1;
      return 0;
    });
  }
  if (filters.search !== "") {
    galleryFilter = galleryFilter.filter((artwork) => artwork.title.toLowerCase().includes(filters.search.toLowerCase()));
  }

  return galleryFilter;
}
