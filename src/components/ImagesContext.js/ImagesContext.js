import { createContext, useContext, useState } from 'react';

export const ImageContext = createContext();
export const UseImageContext = () => useContext(ImageContext);

export const ImageProvider = ({ children }) => {
  const [images, setImages] = useState([]);

  return (
    <ImageContext.Provider value={{ images }}>{children}</ImageContext.Provider>
  );
};
