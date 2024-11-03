import {Link} from "react-router-dom";

export default function Posting() {
  return (
    <div id="wd-home-postings">
      <div className="wd-home-post">
        <Link
          className="wd-home-post-link"
          to="/Make-Space/Post123">
          {/* the image of the post */}
          
          <div>
            <h5>Full Length Mirror</h5>
            <p className="wd-home-post-title">A full length mirror that ...</p>
            <button> Label </button><button> Label </button>
          </div>
        </Link>
      </div>
    </div>
  );
}
