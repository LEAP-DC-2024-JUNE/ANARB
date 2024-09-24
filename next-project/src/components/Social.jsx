import { useTheme } from "next-themes";
import GithubIcon from "../svg/social/Github-icon";
import TwitterIcon from "../svg/Twitter-icon";
import FigmaIcon from "../svg/Figma-icon";
import DarkGitHubIcon from "@/svg/DarkGitHubIcon";
import DarkTwitterIcon from "@/svg/DarkTwitterIcon";
import DarkFigmaIcon from "../svg/DarkFigmaIcon";

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
