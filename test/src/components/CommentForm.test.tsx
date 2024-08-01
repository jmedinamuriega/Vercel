import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CommentForm from './CommentForm'; 
import React from 'react';

describe('CommentForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { getByLabelText, getByText } = render(<CommentForm />);
    expect(getByLabelText(/Title/i)).toBeInTheDocument();
    expect(getByLabelText(/Body/i)).toBeInTheDocument();
    expect(getByText(/Post Comment/i)).toBeInTheDocument();
  });

  it('handles input changes', () => {
    const { getByLabelText } = render(<CommentForm />);
    const titleInput = getByLabelText(/Title/i) as HTMLInputElement;
    const bodyTextarea = getByLabelText(/Body/i) as HTMLTextAreaElement;

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(bodyTextarea, { target: { value: 'Test Body' } });

    expect(titleInput.value).toBe('Test Title');
    expect(bodyTextarea.value).toBe('Test Body');
  });

  it('submits the form and stores comment in localStorage', () => {
    // Mock localStorage
    const setItemMock = jest.spyOn(Storage.prototype, 'setItem');
    const { getByLabelText, getByText } = render(<CommentForm />);
    const titleInput = getByLabelText(/title/i) as HTMLInputElement;
    const bodyTextarea = getByLabelText(/body/i) as HTMLTextAreaElement;
    const submitButton = getByText(/Post Comment/i);

    fireEvent.change(titleInput, { target: { value: 'Test Title' } });
    fireEvent.change(bodyTextarea, { target: { value: 'Test Body' } });
    fireEvent.click(submitButton);

    expect(setItemMock).toHaveBeenCalledWith(
      expect.stringMatching(/^comment-/),
      JSON.stringify({ title: 'Test Title', body: 'Test Body' })
    );

    const storedComment = JSON.parse(localStorage.getItem(setItemMock.mock.calls[0][0]) ?? '{}');
    expect(storedComment.title).toBe('Test Title');
    expect(storedComment.body).toBe('Test Body');
  });
});
