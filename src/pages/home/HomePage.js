import React from "react";
import giphy from "../../utils/giphy";
import SearchResults from "../../components/SearchResults/SearchResults";
import Header from "../../components/common/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import LoadMore from "../../components/LoadMore/LoadMore";
import Modal from "../../components/Modal/Modal";

class HomePage extends React.Component {
  render() {
    return (
      <div className="d-flex flex-column justify-content-center">
        <Header />
        <SearchForm />
        <SearchResults />
        <LoadMore />
        <Modal />
      </div>
    );
  }
}

export default HomePage;
