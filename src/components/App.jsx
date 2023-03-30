import React, { Component } from 'react';
import Searchbar from './Searchbar/Swearchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Bytton';
import Loader from './Loader/Loader';
import css from './App.module.css';

class App extends Component {
  state = {
    cards: [],
    value: '',
    page: 1,
    loading: false,
    error: null,
  };

  HanleSubmit = e => {
    e.preventDefault();
    const inputValie = e.target.elements.input.value;
    if (inputValie.trim() === '') {
      return;
    }
    this.setState({ value: inputValie });
  };

  componentDidUpdate(prevProps, prevState) {
    const { value, page } = this.state;
    if (value !== prevState.value) {
      this.setState({ page: 1, cards: [], error: null });
    }

    if (value !== prevState.value || page !== prevState.page) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${this.state.value}&page=${this.state.page}&key=33763278-a8135cc0e5b2d03eb2d8094e4&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(res => {
          if (res.hits.length === 0) {
            return Promise.reject(new Error());
          }
          this.setState(prevState => ({
            cards: [...prevState.cards, ...res.hits],
          }));
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  loadmoreBtnClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { cards, loading, error } = this.state;
    return (
      <div className={css.App}>
        <Searchbar onSubmit={this.HanleSubmit} />
        {error && <h2>Something go wrong, please try again with new value!</h2>}
        {cards.length > 0 && <ImageGallery cards={this.state.cards} />}
        {cards.length > 0 && !loading && (
          <Button onClick={this.loadmoreBtnClick} />
        )}
        {loading && <Loader />}
      </div>
    );
  }
}

export default App;
