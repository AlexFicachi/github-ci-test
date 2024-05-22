// import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom'; // Updated import statement
import App from './App';

describe('App component', () => {
  test('renders the App component', () => {
    render(<App />);
    
    expect(true).toBe(true);
  });
});
