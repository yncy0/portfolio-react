import { Button } from "../ui/button";
import { Icon } from "@iconify-icon/react";

export default function HireMeButton() {
  const link = "mailto:yncyncy0@gmail.com";

  return (
    <a href={link} >
      <Button
        aria-label="Hire Me button (I use Neovim btw!)"
        className="dark:bg-ctp-green-200 bg-cat-text text-cat-base w-full max-w-screen hover:bg-cat-text text-md">
        Hire me I use Neovim btw!
        <Icon icon="lucide:arrow-right" />
      </Button>
  </a >

  )
}
