import { render, screen } from '@testing-library/react';
import Clock from '../components/Clock';

test('renders Card', () => {
  render(
    <Clock city={'Jakarta'} handleRemove={() => {}} currentTime={new Date()}/>
  );

  const content = screen.getByText(/Hometown/i);
  expect(content).toBeInTheDocument();
});
