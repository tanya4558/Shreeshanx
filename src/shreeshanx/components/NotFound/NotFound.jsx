import { Link } from "react-router-dom";
import { FaLeaf } from "react-icons/fa";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="nf">
      <div className="container nf__inner">
        <span className="nf__mark"><FaLeaf /></span>
        <h1>404</h1>
        <p>This page has wandered off the field.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </div>
  );
}
