import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import useDarkMode from './useDarkMode';
import { act } from 'react-dom/test-utils';

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

function TestComponent() {
  const [dark, setDark] = useDarkMode();
  return (
    <div>
      <span>{dark ? 'dark' : 'light'}</span>
      <button onClick={() => setDark(!dark)}>toggle</button>
    </div>
  );
}

describe('useDarkMode', () => {
  beforeEach(() => {
    localStorage.clear();
    jest.clearAllMocks();
  });

  it('should default to light mode if no stored value and no prefers-color-scheme', () => {
    localStorage.getItem.mockReturnValue(null);
    window.matchMedia.mockReturnValue({ matches: false });

    render(<TestComponent />);
    expect(screen.getByText('light')).toBeInTheDocument();
  });

  it('should use stored value from localStorage', () => {
    localStorage.getItem.mockReturnValue('dark');

    render(<TestComponent />);
    expect(screen.getByText('dark')).toBeInTheDocument();
  });

  it('should toggle dark mode', async () => {
    const user = userEvent.setup();
    localStorage.getItem.mockReturnValue(null);
    window.matchMedia.mockReturnValue({ matches: false });

    render(<TestComponent />);

    expect(screen.getByText('light')).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /toggle/i }));

    expect(screen.getByText('dark')).toBeInTheDocument();
    expect(localStorage.setItem).toHaveBeenCalledWith('theme', 'dark');
  });
});