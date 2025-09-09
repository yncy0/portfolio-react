import SocialsList from "../socials/SocialsList";
import ToggleTheme from "../toggle/ToggleTheme";

export default function Header() {
  return (
    <header className="flex flex-row justify-between items-center pt-5 w-full max-w-screen dark:text-ctp-green-200 px-5 md:px-44 lg:px-80">
      <SocialsList />
      <ToggleTheme />
    </header>
  );
}
