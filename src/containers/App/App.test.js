import React from 'react';
import App from './App.js';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('App', () => {
  it('Can view the homepage when the page loads', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <App />
    </Provider>

    const { getByText } = render(testWrapper)
    const titleEl = getByText('Burrito Builder');

    expect(titleEl).toBeInTheDocument();
  });

  it('should view initial orders when the page loads', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <App />
    </Provider>

    const { getByText, debug } = render(testWrapper)

    let ordersEl = getByText('No orders yet!')
    expect(ordersEl).toBeInTheDocument();
  })
})
