import { Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material";

const LoginTabs = ({ toggleActiveTab, currentTab }) => {
  const theme = useTheme();

  const tabsStyles = {
    "&.MuiTabs-root": {
      width: "350px",
      backgroundColor: theme.palette.purple[100],
      borderRadius: "4px 4px 0 0",
    },
  };

  return (
    <Tabs
      value={currentTab}
      textColor="primary"
      indicatorColor="primary"
      sx={tabsStyles}
      onChange={toggleActiveTab}
    >
      <Tab value="one" sx={{ width: "50%" }} label="Sign In" />
      <Tab value="two" sx={{ width: "50%" }} label="Sign Up" />
    </Tabs>
  );
};

export default LoginTabs;
