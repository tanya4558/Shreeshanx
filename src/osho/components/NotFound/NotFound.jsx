import { Link } from "react-router-dom";
import "./NotFound.css";

export default function NotFound() {
  return (
    <div className="nf">
      <div className="container nf__inner">
        <span className="nf__code">404</span>
        <h1>Page not found</h1>
        <p>This page couldn't take root. Let's get you back home.</p>
        <Link to="/" className="btn btn-primary">Back to home</Link>
      </div>
    </div>
  );
}
