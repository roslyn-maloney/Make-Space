import {Link} from "react-router-dom";

export default function Posting() {
  return (
    <body>
    <h1 className="sectionHeader">Recommended For You</h1>
       <Link to="/Make-Space/Post123" className="gridContainer">
          <div className="card">
            <img className="itemImg" src="" alt="item img"/>
            <h1 style={{textAlign: "left", marginLeft: "10px"}}>Item Name</h1>
            <h1 style={{textAlign: "right", marginRight: "10px"}}>$0</h1>
            <h3 className="itemDesc" style={{marginLeft: "10px"}}>
              Item Description...</h3>
            <button> Tag 1 </button><button> Tag2 </button>
          </div>
        </Link>
      <h1 className="sectionHeader">Latest</h1>
      <Link to="/Make-Space/Post123" className="gridContainer">
          <div className="card">
            <img className="itemImg" src="" alt="item img"/>
            <h1 style={{textAlign: "left", marginLeft: "10px"}}>Item Name</h1>
            <h1 style={{textAlign: "right", marginRight: "10px"}}>$0</h1>
            <h3 className="itemDesc" style={{marginLeft: "10px"}}>
              Item Description...</h3>
            <button> Tag 1 </button><button> Tag2 </button>
          </div>
      </Link>
    </body>
  );
}
