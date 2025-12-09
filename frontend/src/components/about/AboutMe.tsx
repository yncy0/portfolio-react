import { useAbout } from "@/hooks/useAbout";

export default function AboutMe() {
  const { data: about, isLoading, error } = useAbout();

  return (
    <>
      {about?.map((item) => (
        <p className="text-lg">{item.description}</p>
      ))}
    </>
  );
}
