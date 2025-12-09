import { useBadges } from "@/hooks/useBadges";
import { Badge } from "../ui/badge";

export default function BadgesList() {
  const { data: badges, isLoading, error } = useBadges();

  return (
    <div className="flex flex-col lg:flex-row gap-3 max-w-screen w-full font-fira-code">
      {badges?.map((item) => (
        <Badge className="text-md bg-gradient-to-r from-ctp-blue-200 to-ctp-sapphire-200 text-black">
          {item.title}
        </Badge>
      ))}
    </div>
  );
}
