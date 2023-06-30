import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Component } from 'react';
import { fetchImagesApi } from 'services/imageApi';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    images: [],
    searchValue: '',
    isLoading: false,
    error: null,
    page: 1,
  };

  handleSubmit = async searchValue => {
    this.setState({ searchValue: searchValue, page: 1 });
    console.log(searchValue);
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      prevState.searchValue !== this.state.searchValue ||
      prevState.page !== this.state.page
    ) {
      this.showPhotos();
    }
  }

  async showPhotos() {
    this.setState({ isLoading: true });
    try {
      const { searchValue, page } = this.state;
      const images = await fetchImagesApi(searchValue, page);
      console.log(images);
      if (this.state.page === 1) {
        this.setState({ images });
      } else {
        this.setState({ images: this.state.images.concat(images) });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  scrollToBottom() {
    this.el.scrollIntoView({ behavior: 'smooth' });
  }

  render() {
    const { images, isLoading } = this.state;
    return (
      <div>
        <SearchBar onSubmit={this.handleSubmit}></SearchBar>
        <ImageGallery images={images} />
        {images.length >= 12 ? <Button onClick={this.handleLoadMore} /> : ''}
        {isLoading && <Loader />}
      </div>
    );
  }
}
