import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import JobTableTitle from '../components/HomeHeader/table/JobTableTitle';
import { InfoCircleFilled, SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';

describe('JobTableTitle', () => {
  const mockFilterDataSource = jest.fn();
  const mockSetShowJobModal = jest.fn();

  beforeEach(() => {
    render(
      <JobTableTitle
        filterDataSource={mockFilterDataSource}
        setshowJobModal={mockSetShowJobModal}
      />
    );
  });

  it('renders the title text', () => {
    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  it('displays informative text with an InfoCircleFilled icon', () => {
    expect(screen.getByText('Informative piece of text that can be used regarding this modal.')).toBeInTheDocument();
    expect(screen.getByLabelText('info-circle')).toBeInTheDocument();
  });

  it('calls filterDataSource when input changes', () => {
    const input = screen.getByPlaceholderText('Search jobsite');
    fireEvent.change(input, { target: { value: 'search term' } });
    expect(mockFilterDataSource).toHaveBeenCalledWith(expect.any(Object));
  });

  it('calls setshowJobModal when the Create button is clicked', () => {
    const button = screen.getByText('Create');
    fireEvent.click(button);
    expect(mockSetShowJobModal).toHaveBeenCalled();
  });
});
