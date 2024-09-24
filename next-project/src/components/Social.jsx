import { useTheme } from "next-themes";
import GithubIcon from "../svg/social/GithubIcon";
import TwitterIcon from "../svg/social/TwitterIcon";
import FigmaIcon from "../svg/social/FigmaIcon";
import DarkGitHubIcon from "../svg/social/DarkGitHubIcon";
import DarkTwitterIcon from "@/svg/social/DarkTwitterIcon";
import DarkFigmaIcon from "../svg/social/DarkFigmaIcon";

export const Social = () => {
  const { theme } = useTheme();

  return (
    <div className="flex gap-1">
      {theme == "dark" ? <DarkGitHubIcon /> : <GithubIcon />}
      {theme == "dark" ? <DarkTwitterIcon /> : <TwitterIcon />}
      {theme == "dark" ? <DarkFigmaIcon /> : <FigmaIcon />}
    </div>
  );
};
