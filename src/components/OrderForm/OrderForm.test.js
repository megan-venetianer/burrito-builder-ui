import React from 'react';
import OrderForm from './OrderForm.js';
import { render, fireEvent, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from '../../reducers';
import '@testing-library/jest-dom';

describe('OrderForm', () => {
  it('should render the ingredients to the page', () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <OrderForm
        name={'beans'}
      />
    </Provider>

    const { getByText } = render(testWrapper)
    const nameEl = getByText('beans')

    expect(nameEl).toBeInTheDocument();
  });

  it('should enable the submit button when ingredients are selected', async () => {
    const testStore = createStore(rootReducer);
    const testWrapper = <Provider store={testStore}>
      <OrderForm
      />
    </Provider>

    const { getByText } = render(testWrapper)

    const beansBtn = getByText('carnitas')

    fireEvent.click(beansBtn);

    const submitBtn = await waitFor(() => getByText('Submit Order'))

    fireEvent.click(submitBtn);
  })
})
