import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/">
        STAR WARS STARSHIPS
      </Link>
    </div>
  );
}