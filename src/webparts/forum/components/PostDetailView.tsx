import * as React from "react";
import '../components/PostDetailView.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShare } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
 
 
const PostDetailView =  () => {      
 
 
  return (
    <div className="container-fluid">
      <div className=" shadow-lg mx-auto mt-3 p-3 bg-white rounded">
         
          <div className="row">
           
 
            <div className="  col-auto "  >
              <div className="rounded-circle bg-light" style={{ height: '3rem', width: "3rem" }}></div>
            </div>
 
            <div className="col">
            <div className="d-flex align-items-center justify-content-between gap-3">
                {/* Profile image */}
                <div>
                  <strong>Bilal</strong>
                  <br />
                  <small className="text-muted">2 hours ago</small>
                </div>
 
                  {/* Action Buttons */}
              <div className="d-flex gap-3 mt-2 mt-md-0">
                <button className="border-0 bg-transparent edit-btn  d-flex align-items-center gap-1">
                  <CiEdit /> Edit
                </button>
                <button className="border-0 bg-transparent edit-btn  d-flex align-items-center gap-1">
                  <FaShare /> Share
                </button>
              </div>
 
              </div>
 
 
              <hr />
 
              {/* Post Content */}
              <div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s.
                </p>
 
                <button  className=" bg-transparent comm-btn border-0 mt-3">
                  Comments
                </button>
 
                <hr />  
 
                {/* Comments Section */}
                <div className="mt-4">
                  <div className="d-flex align-items-start gap-2 mt-2">
                    <div className="rounded-circle bg-light prof2" style={{ width: "40px", height: "40px" }}></div>
                    <div className="com-content border p-2 rounded w-100">
                      <strong>Bilal</strong> &nbsp; <span className="text-muted">2 days ago</span>
                      <p className="mb-0">Great post! Thanks for sharing.</p>
                    </div>
                  </div>
 
                  <div className="d-flex align-items-start gap-2 mt-2">
                    <div className="rounded-circle bg-light prof2" style={{ width: "40px", height: "40px" }}></div>
                    <div className="com-content border p-2 rounded w-100">
                      <strong>Bilal</strong> &nbsp; <span className="text-muted">2 days ago</span>
                      <p className="mb-0">Great post! Thanks for sharing.</p>
                    </div>
                  </div>
 
                  {/* Comment Input */}
                  <div className="mt-4 d-flex row gap-2">
                    <input type="text" className="col rounded border comment-feild border-light" placeholder="Drop a comment" />
                    <button className="btn btn-primary col-auto">Add Comment</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
     
      </div>
    </div>
  );
};
 
export default PostDetailView;