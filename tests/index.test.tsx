import '@testing-library/jest-dom';
import { render } from "@testing-library/react";
import IndexPage from "../pages";

describe('/pages/', () => {
  test('should render Home Page', async () => {
    const wrapper = render(
      <IndexPage />
    );

    expect(await wrapper.findByText('Welcome to Lotus AI')).toBeInTheDocument();
  });

  test('should render Link to patient page', async () => {
    const wrapper = render(
      <IndexPage />
    );

    expect(wrapper.getByRole('link', { name: 'Patient Summary' })).toBeInTheDocument();
  });
});
