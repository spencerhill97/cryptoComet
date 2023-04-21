import { Stack, Pagination } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CoinsPagination = ({ handleChange, numberOfPages }) => {
  const XXS = useMediaQuery("(max-width: 330px)");
  const SM = useMediaQuery("(min-width: 330px)");
  const MD = useMediaQuery("(min-width: 600px)");

  return (
    <Stack direction="row" sx={{ justifyContent: "center" }}>
      <Pagination
        variant="outlined"
        defaultPage={1}
        size={(XXS && "small") || (SM && "medium") || (MD && "large")}
        onChange={handleChange}
        count={numberOfPages}
        sx={{ paddingTop: "25px", paddingBottom: "25px" }}
      />
    </Stack>
  );
};

export default CoinsPagination;
