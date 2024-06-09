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

if (filters.type !== "All") {
  galleryFilter = galleryFilter.filter((artwork) => {
    return artwork.type && typeof artwork.type === "string" && artwork.type.toLowerCase() === filters.type.toLowerCase();
  });
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

export function getUniqueGalleryTypes(gallery) {
  const typesLowerCase = [];

  gallery.forEach((item) => {
    if (item.type) {
      const lowerCaseType = item.type.toLowerCase();
      if (!typesLowerCase.includes(lowerCaseType)) {
        typesLowerCase.push(lowerCaseType);
      }
    }
  });

  return typesLowerCase;
}
