// JobSiteTableTitle.test.jsx
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"; // For simulating router context
import JobSiteTableTitle from "../components/jobsite/jobSiteTable/JobSiteTableTitle";

describe("JobSiteTableTitle", () => {
  const mockSetSearchTerm = jest.fn();

  beforeEach(() => {
    render(
      <MemoryRouter>
        <JobSiteTableTitle setSearchTerm={mockSetSearchTerm} />
      </MemoryRouter>
    );
  });

  test("renders the JobSiteTableTitle with title and search input", () => {
    // Check if the title is rendered
    expect(screen.getByText(/title/i)).toBeInTheDocument();

    // Check if the search input is rendered
    expect(screen.getByPlaceholderText(/search a driver/i)).toBeInTheDocument();
  });

  test("calls setSearchTerm when typing in the search input", () => {
    const searchInput = screen.getByPlaceholderText(/search a driver/i);

    // Simulate typing in the search input
    fireEvent.change(searchInput, { target: { value: "Concrete" } });

    // Verify that setSearchTerm is called with the correct value
    expect(mockSetSearchTerm).toHaveBeenCalledWith("Concrete");
  });
});
