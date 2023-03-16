import logo from "./logo.svg";
// import './App.css';
import { Link } from "react-router-dom";
function Component() {
  return (
    <div>
      <img src="afqwefwa.png" alt="This should be an image" />
      <ul>
        <li>
          <Link to="/"> Home </Link>
        </li>
        <li>
          <Link to="/about"> About</Link>
        </li>
      </ul>
    </div>
  );
}

export default Component;
