import React from 'react';
import { render, screen } from '@testing-library/react';
import StatusCounter from '../components/HomeHeader/StatusCounter/StatusCounter';


const mockDataSource = [
  { status: { props: { children: 'On Hold' } } },
  { status: { props: { children: 'Completed' } } },
  { status: { props: { children: 'On Hold' } } },
  { status: { props: { children: 'On Progress' } } },
  { status: { props: { children: 'Completed' } } },
  { status: { props: { children: 'On Progress' } } },
  { status: { props: { children: 'Completed' } } },
  { status: { props: { children: 'On Hold' } } },
  { status: { props: { children: 'Completed' } } },
  { status: { props: { children: 'On Progress' } } },
];

describe('StatusCounter', () => {
  test('renders correct counts for job statuses', () => {
    render(<StatusCounter dataSource={mockDataSource} />);

    expect(screen.getByText(/3 On road/i)).toBeInTheDocument(); // 3 jobs with "On Progress"
    expect(screen.getByText(/4 Completed/i)).toBeInTheDocument(); // 4 jobs with "Completed"
    expect(screen.getByText(/3 On hold/i)).toBeInTheDocument(); // 3 jobs with "On Hold"
  });
});
