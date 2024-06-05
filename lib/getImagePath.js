const getImagePath = (imagePath, fullSize) => {
  return imagePath
    ? `http://image.tmdb.org/t/p/${fullSize ? "original" : "w500"}${imagePath}`
    : "http://localhost:3000/vercel.svg";
};

export default getImagePath;
