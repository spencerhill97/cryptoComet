import { useState, useRef } from "react";
import CoinRow from "./CoinRow";
import CoinsPagination from "./Pagination/CoinsPagination";
import { useTheme } from "@mui/material/styles";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Container,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CoinTable = ({ coins, navigateToSearchBar }) => {
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);

  const theme = useTheme();
  const SM = useMediaQuery("(min-width: 600px)");

  const numberOfPages = Math.ceil((coins.length - 1) / rows);

  const startingIndex = (page - 1) * rows;
  const endingIndex = startingIndex + rows;

  const handleChange = (e, newPage) => {
    setPage(newPage);
    return;
  };

  const tableStyles = {
    "&.MuiContainer-root": {
      minWidth: "100%",
      paddingLeft: "0",
      paddingRight: "0",
      backgroundColor: theme.palette.purple[50],
      paddingBottom: SM && "35px",
      paddingTop: SM && "35px",
    },
    "& .MuiTableContainer-root": {
      width: (SM && "80%") || "100%",
      maxWidth: "1280px",
      margin: "0 auto",
      borderRadius: SM && "8px",
      border: SM && "1px solid" + theme.palette.purple[100],
    },
    "& .MuiTableHead-root": {
      backgroundColor: theme.palette.purple[300],
      th: {
        fontSize: {
          xxs: "16px",
          sm: "20px",
        },
        textAlign: "center",
        color: "white",
      },
    },
    "& .MuiTableBody-root": {
      backgroundColor: "white",
    },
  };

  return (
    <Container sx={tableStyles} component="section">
      <TableContainer component="article">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h Change</TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coins.slice(startingIndex, endingIndex).map((coin) => {
              return <CoinRow key={coin.id} {...coin} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CoinsPagination
        handleChange={handleChange}
        numberOfPages={numberOfPages}
        navigateToSearchBar={navigateToSearchBar}
      />
    </Container>
  );
};

export default CoinTable;
