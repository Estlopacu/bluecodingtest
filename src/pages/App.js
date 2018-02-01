import React, {PropTypes} from 'react';
import Header from "../components/common/Header";
import { Provider } from 'react-redux';
import blueCodingtest from '../reducers';
import { createStore } from 'redux';
require('../images/favicon.png');

class App extends React.Component {
  render() {
    const store = createStore(blueCodingtest);
    return (
      <div className="container-fluid full-width">
        <Provider store={store}>
          {this.props.children}
        </Provider>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired
};

export default App;
