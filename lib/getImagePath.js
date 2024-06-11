const getImagePath = (imagePath, fullSize) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}${imagePath}`
    : "/movieGeneric.jpg";
};

export default getImagePath;
