import { render, screen } from '@testing-library/react';
import NoService from '../components/jobsite/noService';

describe('NoService Component', () => {
  test('renders NoService component with title, image, and message', () => {
    render(<NoService />);

    // Check for the title
    expect(screen.getByText('Data Grid')).toBeInTheDocument();

    // Check for the image
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', 'noService.png'); // Adjust path as per setup

    // Check for message content
    expect(screen.getByText('No Service Selected')).toBeInTheDocument();
    expect(screen.getByText('Please select a service on your left to proceed.')).toBeInTheDocument();
  });
});
