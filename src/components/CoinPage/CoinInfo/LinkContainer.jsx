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
      margin: "5px 0",
      cursor: "pointer",
    },
    svg: {
      fontSize: "3rem",
      filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.4))",
    },
    "a:hover": {
      animation: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      transform: "translate3d(0, 0, 0)",
      perspective: "1000px",
    },
    "@keyframes shake": {
      "10%, 90%": {
        transform: "translate3d(-1px, 0, 0)",
      },
      "20%, 80%": {
        transform: "translate3d(2px, 0, 0)",
      },
      "30%, 50%, 70%": {
        transform: "translate3d(-2px, 0, 0)",
      },
      "40%, 60%": {
        transform: "translate3d(2px, 0, 0)",
      },
    },
    "a:active": {
      transform: "translateY(4px)",
    },
  };

  return (
    <Stack
      direction="row"
      margin="0 auto"
      padding="5px auto"
      alignItems="center"
      justifyContent="center"
      spacing={2.5}
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
