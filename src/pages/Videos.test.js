import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Videos from './Videos';

describe('Videos', () => {
  it('should render videos and search functionality', async () => {
    const user = userEvent.setup();
    render(<Videos />);

    expect(screen.getByText('Videos')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Tìm kiếm video...')).toBeInTheDocument();

    // Check if videos are rendered
    expect(screen.getByText('Video 1')).toBeInTheDocument();
    expect(screen.getByText('Video 2')).toBeInTheDocument();
  });

  it('should filter videos based on search', async () => {
    const user = userEvent.setup();
    render(<Videos />);

    const searchInput = screen.getByPlaceholderText('Tìm kiếm video...');
    await user.type(searchInput, 'Video 1');

    expect(screen.getByText('Video 1')).toBeInTheDocument();
    expect(screen.queryByText('Video 2')).not.toBeInTheDocument();
  });
});