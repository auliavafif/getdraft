/* eslint-disable no-underscore-dangle */
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { PersistGate } from 'redux-persist/integration/react';

import createStore from '../store';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <Provider store={store}>
        <PersistGate persistor={store.__PERSISTOR} loading={null}>
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
