import { Badge } from "../ui/badge";

export default function BadgesList() {
  return (
    <div className="flex flex-col lg:flex-row gap-3 max-w-screen w-full font-fira-code">
      <Badge className="text-md bg-gradient-to-r from-ctp-red-200 to-ctp-yellow-200 text-black">
        Front-end Developer
      </Badge>
      <Badge className="text-md bg-gradient-to-r from-ctp-green-200 to-ctp-teal-200 text-black">
        Vue/Nuxt Developer
      </Badge>
      <Badge className="text-md bg-gradient-to-r from-ctp-blue-200 to-ctp-sapphire-200 text-black">
        React/NextJS Developer
      </Badge>
    </div>
  );
}
