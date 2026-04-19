// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainHaven title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainHaven/i);
    expect(titleElement).toBeInTheDocument();
});
