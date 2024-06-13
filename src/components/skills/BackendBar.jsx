import ProgressBar from "./ProgressBar";

const backEndSkills = [
  {
    name: "ExpressJS",
    percentage: "70%",
    color: "progressYellow",
    animationDelay: 0.7,
  },
  {
    name: "MongoDB",
    percentage: "75%",
    color: "progressGreen",
    animationDelay: 0.7,
  },
  {
    name: "SQL",
    percentage: "80%",
    color: "progressRed",
    animationDelay: 0.7,
  }
];
const BackendBar = () => {
  return (
    <div>
      <ProgressBar skills={backEndSkills} />
    </div>
  );
};
export default BackendBar;
