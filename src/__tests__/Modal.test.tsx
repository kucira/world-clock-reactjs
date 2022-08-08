import { render, screen } from '@testing-library/react';
import Modal from '../components/Modal';

test('renders Main Clock', () => {
  render(
    <Modal title="Add City" subtitle="Please Select City to Add" onCancel={() => {}} onOk={() => {}}>
      <p>content</p>
    </Modal>
  );

  const content = screen.getByText(/content/i);
  expect(content).toBeInTheDocument();

  const title = screen.getByText(/Add City/i);
  expect(title).toBeInTheDocument();

  const subtitle = screen.getByText(/Please Select City to Add/i);
  expect(subtitle).toBeInTheDocument();
});
