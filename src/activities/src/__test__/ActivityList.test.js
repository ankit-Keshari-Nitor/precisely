import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ActivityList from '../components/activity-list/activity-list';

describe('ActivityList Component', () => {
  test('renders the component and checks table headers', () => {
    render(<ActivityList />);
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Status')).toBeInTheDocument();
    expect(screen.getByText('Actions')).toBeInTheDocument();
  });

  test('filters names via the search input', async () => {
    render(<ActivityList />);
    const searchInput = screen.getByPlaceholderText('Search by name or status');
    fireEvent.change(searchInput, { target: { value: 'Load balancer 1' } });
    expect(screen.getByText('Load balancer 1')).toBeInTheDocument();
    expect(screen.queryByText('Load balancer 2')).toBeNull();
  });

  test('handles pagination correctly', () => {
    render(<ActivityList />);
    const nextPageButton = screen.getByRole('button', { name: /next page/i });
    userEvent.click(nextPageButton);
    expect(screen.getByText('Load balancer 11')).toBeInTheDocument();
  });

  
});
