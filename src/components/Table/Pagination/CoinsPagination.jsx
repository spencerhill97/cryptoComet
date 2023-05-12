import { Stack, Pagination } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useGlobalContext } from "../../../context/GobalContext";

const CoinsPagination = ({ handleChange, numberOfPages }) => {
  const { navigateToSearchBar } = useGlobalContext();
  const XXS = useMediaQuery("(max-width: 330px)");
  const SM = useMediaQuery("(min-width: 330px)");

  const theme = useTheme();

  const paginationStyles = {
    "& .MuiButtonBase-root": {
      backgroundColor: theme.palette.custom.white,
    },
  };

  return (
    <Stack
      direction="row"
      sx={{
        justifyContent: "center",
        paddingTop: "25px",
        paddingBottom: "25px",
      }}
    >
      <Pagination
        variant="outlined"
        defaultPage={1}
        size={(XXS && "medium") || (SM && "large")}
        onChange={handleChange}
        count={numberOfPages}
        sx={paginationStyles}
        siblingCount={0}
        color="primary"
        onClick={navigateToSearchBar}
      />
    </Stack>
  );
};

export default CoinsPagination;
