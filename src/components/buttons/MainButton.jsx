import { Link } from "react-router";

function MainButton({ title, link }) {
  return (
    <Link to={link ? link : ""} target="_blanck">
      <button className="custom-btn inline-block">{title}</button>
    </Link>
  );
}
export default MainButton;
