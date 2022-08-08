import { render, screen } from '@testing-library/react';
import Button from '../components/Button';

test('renders Button', () => {
  render(<Button styleContainer="pb-12" label="Add City" onClick={() => {}} />);

  const button = screen.getByText(/Add City/i);
  expect(button).toBeInTheDocument();
});
