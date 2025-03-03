import React, { useEffect, useState } from "react";
import { FaComment } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Feed.css"; // Custom styles
import { FaFileImage } from "react-icons/fa6";
import { ImUsers } from "react-icons/im";
import { SlEmotsmile } from "react-icons/sl";
import { RxCross1 } from "react-icons/rx";
import { Link } from "react-router-dom";

const Feed = () => {

    const [users, setUsers] = useState([] as any)
    const [dialogOpen, setDialogOpen] = useState(false)

    useEffect(() => {
        setUsers([
            {
                Name: "Daniyal",
                UserName: "daniyal@shafiq"
            },
            {
                Name: "Ahmed",
                UserName: "ahmed@kamal"
            },
            {
                Name: "Bilal",
                UserName: "bilal@iqbal"
            }
        ])
    }, [])

    function createPost() {
        const dialog = document.getElementById("dialog") as HTMLDialogElement;
        setDialogOpen(true)
        dialog.showModal()
    }

    function cancelPost() {
        const dialog = document.getElementById("dialog") as HTMLDialogElement;
        setDialogOpen(false)
        dialog.close()
    }

    return (
        <>
            <div className={dialogOpen ? "dialogOpen" : "dialogClosed"}>
                <div className="create-post" ><button onClick={createPost}><b>Create Post</b></button></div >
                {
                    users.map((user: any) => {
                        return (
                            <Link to={"/postDetailView"}  style={{ textDecoration: "none", color: "inherit" }}>
                                <div className="card p-3 shadow-sm rounded discussion-card" >
                                    <div className="d-flex align-items-start">

                                        <img
                                            src="https://randomuser.me/api/portraits/women/44.jpg"
                                            alt="User"
                                            className="rounded-circle me-3 profile-img"
                                        />


                                        <div className="w-100">
                                            <h5 className="mb-1 d-flex align-items-center">
                                                Introduce Yourself!
                                                <span className="badge bg-warning ms-2">
                                                    <i className="bi bi-pin-angle-fill"></i>
                                                </span>
                                            </h5>
                                            <small className="text-muted">
                                                ↩ Latest reply from <strong>{user.UserName}</strong> 5 minutes ago
                                            </small>
                                            <p className="mt-2 text-muted">
                                                Hey @everyone, new member alert here! Thought I’d write a bit about myself
                                                and why I'm here. First off, my name is Harry and I'm 31 years old, massive fan of...
                                            </p>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mt-2">
                                        <div className="d-flex align-items-center comments">
                                            <FaComment className="text-muted me-1" />
                                            <span className="text-muted" style={{ width: 90 }}>25 Comments</span>
                                        </div>
                                    </div>

                                    <span className="badge shadow-sm position-absolute end-0 m-2 text-muted" style={{ backgroundColor: 'white' }}>
                                        <div> </div>Introductions
                                    </span>
                                </div>
                            </Link>
                        )
                    })
                }
            </div>
            <dialog id="dialog" className="rounded" style={{ border: 0, padding: 0, width: 390 }}>
                <div className="container-fluid p-1 px-3 bg-white rounded" style={{ maxWidth: "500px" }}>
                    {/* Header */}
                    <div className="d-flex justify-content-center align-items-center position-relative p-3 border-bottom">
                        <h5 className="m-0 fw-bold">Create post</h5>
                        <button onClick={cancelPost} className=" border-0 d-flex justify-content-center bg-muted align-items-center cross position-absolute end-0">
                            <RxCross1 className="" />
                        </button>
                    </div>


                    {/* User Info */}
                    <div className="p-2 d-flex align-items-center gap-2">

                        <div className="d-flex align-items-center gap-3">
                            <div className="rounded-circle bg-white prof "></div>
                            <div><span className="fw-semibold">Muhammad Usama Jadi</span>
                            </div>
                        </div>
                    </div>

                    {/* Post Input */}
                    <div className="px-2 pb-3 mt-2">
                        <textarea
                            className=" text-area p-2 border-0   w-100"
                            placeholder="What's on your mind, Muhammad Usama"
                            rows={3}
                            style={{ resize: "none" }}
                        ></textarea>

                    </div>

                    {/* Add to Post */}
                    <div className="px-2 pb-2">
                        <div className="border rounded p-2">
                            <div className="d-flex align-items-center gap-2">
                                <span className="text-secondary">Add to your post</span>
                                <div className="d-flex gap-2 ms-auto">
                                    <button className="btn btn-link p-1 text-success">
                                        <FaFileImage style={{ fontSize: "1.2rem", color: "#42a51f" }} />
                                    </button>
                                    <button className="btn btn-link p-1 text-primary">
                                        <ImUsers style={{ fontSize: "1.3rem", color: "#189cc9" }} />
                                    </button>
                                    <button className="btn btn-link p-1 text-warning">
                                        <SlEmotsmile style={{ fontSize: "1.3rem", color: "#d2d20a" }} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Post Button */}
                    <div className="px-2 pb-2">
                        <button className="btn btn-secondary w-100 fw-semibold" disabled>
                            Post
                        </button>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default Feed