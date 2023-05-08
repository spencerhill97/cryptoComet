import { useState } from "react";
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
import { useGlobalContext } from "../../context/GobalContext";

const CoinTable = () => {
  const { coinList } = useGlobalContext();
  const [page, setPage] = useState(1);
  const [rows, setRows] = useState(10);

  const theme = useTheme();
  const tableStyles = {
    "&.MuiContainer-root": {
      minWidth: "100%",
      paddingLeft: "0",
      paddingRight: "0",
      backgroundColor: theme.palette.purple[50],
      paddingBottom: {
        sm: "35px",
      },
      paddingTop: {
        sm: "35px",
      },
    },
    "& .MuiTableContainer-root": {
      width: {
        xxs: "100%",
        sm: "80%",
      },
      maxWidth: "1280px",
      margin: "0 auto",
      borderRadius: {
        sm: "8px",
      },
      border: {
        sm: "1px solid" + theme.palette.purple[100],
      },
    },
    "& .MuiTableHead-root": {
      backgroundColor: theme.palette.purple[300],
      th: {
        fontSize: {
          xxs: "16px",
          sm: "20px",
        },
        textAlign: "center",
        color: "#0d0046",
      },
      "th:first-of-type": {
        textAlign: "left",
        paddingLeft: "30px",
      },
    },
    "& .MuiTableBody-root": {
      backgroundColor: "white",
    },
  };

  const numberOfPages = Math.ceil((coinList.length - 1) / rows);

  const startingIndex = (page - 1) * rows;
  const endingIndex = startingIndex + rows;

  const handleChange = (e, newPage) => {
    setPage(newPage);
    return;
  };

  return (
    <Container component="section" sx={tableStyles}>
      <TableContainer component="article">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Coin</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>24h Change</TableCell>

              <TableCell sx={{ display: { xxs: "none", md: "table-cell" } }}>
                7d Change
              </TableCell>
              <TableCell sx={{ display: { xxs: "none", md: "table-cell" } }}>
                30d Change
              </TableCell>
              <TableCell>Market Cap</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {coinList.slice(startingIndex, endingIndex).map((coin) => {
              return <CoinRow key={coin.id} {...coin} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <CoinsPagination
        handleChange={handleChange}
        numberOfPages={numberOfPages}
        page={page}
      />
    </Container>
  );
};

export default CoinTable;
