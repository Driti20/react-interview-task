import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import JobSiteMenu from "../components/jobsite/JobSiteMenu";

const mockNavigate = jest.fn();
const mockSetSearchParams = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
  useSearchParams: () => [new URLSearchParams(), mockSetSearchParams],
}));

describe("JobSiteMenu Component", () => {
  const mockFilteredData = [
    {
      name: "Test Job Site",
      category: ["Scaffold", "Shoring", "Sidewalk Shed"],
    },
  ];

  test("renders JobSiteMenu component with title and categories", () => {
    render(
      <BrowserRouter>
        <JobSiteMenu filteredData={mockFilteredData} />
      </BrowserRouter>
    );

    // Check for title
    expect(screen.getByText("Test Job Site")).toBeInTheDocument();

    // Check for category buttons
    mockFilteredData[0].category.forEach((category) => {
      expect(screen.getByText(category)).toBeInTheDocument();
    });
  });

  test("calls updateParam when a category button is clicked", () => {
    render(
      <BrowserRouter>
        <JobSiteMenu filteredData={mockFilteredData} />
      </BrowserRouter>
    );

    // Click on the first category button
    const categoryButton = screen.getByText("Scaffold");
    fireEvent.click(categoryButton);

    // Check that setSearchParams was called
    expect(mockSetSearchParams).toHaveBeenCalled();
  });

  test("navigates back when the 'Go back' button is clicked", () => {
    render(
      <BrowserRouter>
        <JobSiteMenu filteredData={mockFilteredData} />
      </BrowserRouter>
    );

    // Click the 'Go back' button
    const goBackButton = screen.getByText("Go back");
    fireEvent.click(goBackButton);

    // Check that navigate was called
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });
});
