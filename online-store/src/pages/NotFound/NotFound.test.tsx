import { render, screen } from '@testing-library/react';

import NotFound from './index';

describe('NotFound component', () => {
  test('NotFound render', () => {
    render(<NotFound />);

    expect(screen.getByText('Nothing found')).toBeInTheDocument();
    expect(
      screen.getByText('Unfortunately, the specified page does not exist in our online store'),
    ).toBeInTheDocument();
  });
});
