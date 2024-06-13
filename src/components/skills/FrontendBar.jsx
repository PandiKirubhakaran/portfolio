import ProgressBar from "./ProgressBar";

const frontEndSkills = [
  {
    name: "HTML5",
    percentage: "98%",
    color: "progressOrange",
    animationDelay: 0.7,
  },
  {
    name: "CSS",
    percentage: "80%",
    color: "progressBlue",
    animationDelay: 0.7,
  },
  {
    name: "JavaScript",
    percentage: "75%",
    color: "progressYellow",
    animationDelay: 0.7,
  },
  {
    name: "MUI",
    percentage: "75%",
    color: "progressRed",
    animationDelay: 0.7,
  },
  {
    name: "ReactJs",
    percentage: "80%",
    color: "progressBlue",
    animationDelay: 0.7,
  },
];
const FrontendBar = () => {
  return (
    <div>
      <ProgressBar skills={frontEndSkills} />
    </div>
  );
};
export default FrontendBar;
