import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import IndexPage from '../../pages/timeline';

describe('Patient Timeline', () => {
  const setup = (): Promise<void> => {
    return act(async () => {
      render(<IndexPage />);
    });
  };

  test('should render Patient Timeline', async () => {
    await setup();

    expect(screen.getAllByText('Patient Timeline')).toBeTruthy();
  });

  test('should render Link to home page', async () => {
    const wrapper = render(<IndexPage />);

    expect(wrapper.getByRole('link', { name: 'Back to Home Page' })).toBeInTheDocument();
  });

  test('should render Link to Patient Summary', async () => {
    const wrapper = render(<IndexPage />);

    expect(wrapper.getByRole('link', { name: 'Patient Summary' })).toBeInTheDocument();
  });
});
