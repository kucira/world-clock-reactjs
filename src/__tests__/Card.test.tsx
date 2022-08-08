import { render, screen } from '@testing-library/react';
import Card from '../components/Card';

test('renders Card', () => {
  render(
    <Card>
      <p>hello</p>
    </Card>
  );

  const content = screen.getByText(/hello/i);
  expect(content).toBeInTheDocument();
});
