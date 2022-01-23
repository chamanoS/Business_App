import "./single.css";
import {Sidebar, SinglePost} from "../../components";

function Single() {
  return (
    <div className="single">
      <SinglePost/>
      <Sidebar />
    </div>
  );
}
export default Single
