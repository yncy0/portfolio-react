import "./HeroSection.css";

type Props = {
  name: string;
  description: string;
};

export function HeroTitle(props: Props) {
  return (
    <h1 className="text-3xl lg:text-5xl font-fira-code">
      <span className="bg-gradient-to-r from-ctp-mauve-300 to-ctp-pink-300 clip">
        <strong className="text-transparent">It is I,</strong>
      </span>
      <span className="bg-gradient-to-r from-ctp-green-300 to-ctp-teal-300 clip">
        <strong className="text-transparent"> {props.name} </strong>
      </span>
      <br />
      <strong className="text-5xl lg:text-7xl">{props.description}</strong>
    </h1>
  );
}
