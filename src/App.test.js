import React from 'react';
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import App from './App';

// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   expect(1).toEqual(1);
//   // const linkElement = getByText(/learn react/i);
//   // expect(getByText).toBeInTheDocument();
// });


it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
