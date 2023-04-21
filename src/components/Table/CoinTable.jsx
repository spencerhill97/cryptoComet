import { useState, useEffect } from "react";
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

const CoinTable = ({ coins }) => {
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState(10);

  console.log(coins.length);

  const numberOfPages = Math.ceil((coins.length - 1) / rows);

  console.log(numberOfPages);

  const handleChange = (e, newPage) => {
    setPage(newPage);
    return;
  };

  const startingIndex = page * rows;
  const endingIndex = page * rows + rows;

  const theme = useTheme();
  const SM = useMediaQuery("(min-width: 600px)");

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
      margin: "0 auto",
      width: (SM && "80%") || "100%",
      borderRadius: SM && "8px",
      border: SM && "1px solid" + theme.palette.purple[100],
    },
    "& .MuiTableHead-root": {
      backgroundColor: theme.palette.purple[200],
      th: {
        textAlign: "center",
        color: theme.palette.custom.purpleFont,
      },
      "th:first-of-type": {
        textAlign: "left",
      },
    },
    "& .MuiTableBody-root": {
      backgroundColor: "white",
    },
  };

  return (
    <Container sx={tableStyles}>
      <TableContainer>
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
      />
    </Container>
  );
};

export default CoinTable;
