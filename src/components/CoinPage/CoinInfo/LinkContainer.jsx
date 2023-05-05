import { Stack, Typography } from "@mui/material";
import RedditIcon from "@mui/icons-material/Reddit";
import TwitterIcon from "@mui/icons-material/Twitter";
import LanguageIcon from "@mui/icons-material/Language";
import FacebookIcon from "@mui/icons-material/Facebook";

const LinkContainer = ({ coin }) => {
  const { links } = coin;

  const linkStyles = {
    a: {
      color: "white",
      transition: "all 500ms",
      margin: "15px 0",
      cursor: "pointer",
    },
    svg: {
      fontSize: "3rem",
    },
    "a:hover": {
      animation: "shake",
    },
  };

  return (
    <Stack
      direction="row"
      margin="0 auto"
      padding="15px au"
      alignItems="center"
      justifyContent="center"
      spacing={3}
      sx={linkStyles}
      className="linkContainer"
    >
      {links.homepage[0] && (
        <a target="_blank" href={links.homepage[0]}>
          <LanguageIcon type="submit" color="white" />
        </a>
      )}
      {links.twitter_screen_name && (
        <a
          target="_blank"
          href={`http://www.twitter.com/${links.twitter_screen_name}`}
        >
          <TwitterIcon type="submit" color="white" />
        </a>
      )}
      {links.subreddit_url && (
        <a target="_blank" href={links.subreddit_url}>
          <RedditIcon type="submit" color="white" />
        </a>
      )}
      {links.facebook_username && (
        <a
          target="_blank"
          href={`http://www.facebook.com/${links.facebook_username}`}
        >
          <FacebookIcon type="submit" color="white" />
        </a>
      )}
    </Stack>
  );
};

export default LinkContainer;
