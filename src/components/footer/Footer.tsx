import SocialsList from "../socials/SocialsList"

export default function Footer() {
  return (
    <footer className="flex flex-col gap-2 py-5 pt-32 text-sm dark:text-ctp-green-200 px-5 md:px-44 lg:px-80">
      <SocialsList />
      <p>
        Hardcoded by Yncy0 <br />
          @ 2025 Yancy Paala | Front-end developer. All rights reserved.
      </p>
    </footer>

  )
}
