import { Box, IconButton, useTheme } from "@mui/material";
import { FaArrowCircleRight, FaArrowCircleLeft, FaPager } from "react-icons/fa";

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (event: React.MouseEvent<HTMLButtonElement>, newPage: number) => void;
}

export function TablePaginationActions(props: TablePaginationActionsProps) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        sx={{ color: "#f4900c" }}
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
        title="primeira página"
      >
        {theme.direction === "rtl" ? <FaPager /> : <FaPager />}
      </IconButton>
      <IconButton
        sx={{ color: "#f4900c" }}
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
        title="anterior"
      >
        {theme.direction === "rtl" ? <FaArrowCircleRight /> : <FaArrowCircleLeft />}
      </IconButton>
      <IconButton
        sx={{ color: "#f4900c" }}
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
        title="próximo"
      >
        {theme.direction === "rtl" ? <FaArrowCircleLeft /> : <FaArrowCircleRight />}
      </IconButton>
      <IconButton
        sx={{ color: "#f4900c" }}
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
        title="ultima página"
      >
        {theme.direction === "rtl" ? <FaPager /> : <FaPager />}
      </IconButton>
    </Box>
  );
}
