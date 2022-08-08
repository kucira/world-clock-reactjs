import { render, screen } from '@testing-library/react';
import MainClock from '../components/MainClock';

test('renders Main Clock', () => {
  render(<MainClock city={'Jakarta'} time={new Date()} />);

  const content = screen.getByText(/Jakarta/i);
  expect(content).toBeInTheDocument();
});
