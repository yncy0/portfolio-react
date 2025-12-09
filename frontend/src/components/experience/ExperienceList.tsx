import { useExperiences } from "@/hooks/useExperiences";
import PlaceholderCard from "../card/PlaceholderCard";

export default function ExperienceList() {
  const { data: exp, isLoading, error } = useExperiences();

  return (
    <>
      {exp ? (
        exp.map((item) => <p key={item.id}>{item.title}</p>)
      ) : (
        <PlaceholderCard label="No experience yet!" />
      )}
    </>
  );
}
