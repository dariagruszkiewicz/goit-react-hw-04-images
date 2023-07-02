import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { useState, useEffect } from 'react';
import { fetchImagesApi } from 'services/imageApi';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export const App = () => {
  // state = {
  //   images: [],
  //   searchValue: '',
  //   isLoading: false,
  //   error: null,
  //   page: 1,
  // };

  const [images, setImages] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const handleSubmit = searchValue => {
    setSearchValue(searchValue);
    setPage(1);
    console.log(searchValue);
  };

  // async componentDidUpdate(prevProps, prevState) {
  //   if (
  //     prevState.searchValue !== this.state.searchValue ||
  //     prevState.page !== this.state.page
  //   ) {
  //     this.showPhotos();
  //   }
  // }

  const showPhotos = async () => {
    setIsLoading(true);
    try {
      const images = await fetchImagesApi(searchValue, page);
      console.log(images);
      if (page === 1) {
        setImages(images);
      } else {
        setImages(images.concat(images));
      }
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!searchValue) return;
    showPhotos(searchValue, page);
    // eslint-disable-next-line
  }, [searchValue, page]);

  useEffect(() => {
    if (error) {
      alert(`Error!`);
    }
  }, [error]);

  return (
    <div>
      <SearchBar onSubmit={handleSubmit}></SearchBar>
      <ImageGallery images={images} />
      {images.length >= 12 ? <Button onClick={handleLoadMore} /> : ''}
      {isLoading && <Loader />}
    </div>
  );
};
