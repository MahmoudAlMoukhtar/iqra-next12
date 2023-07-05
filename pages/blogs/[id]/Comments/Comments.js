import {useEffect, useState} from "react";
import jwt_decode from "jwt-decode";
import moment from "moment";
import * as api from "../../../api/index";
import Image from "next/image";
//import {useTranslation} from "react-i18next";

const Comments = ({post}) => {
  const lng = "en";
  const [comment, setComment] = useState("");
  const [user, setUser] = useState();
  const [userDecoded, setUserDecoded] = useState();
  const [commentsData, setCommentsData] = useState([]);

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await api.fetchComments();
        setCommentsData(res.data.filter(c => c.idParent === post?._id));
      } catch (err) {
        console.log("error in fetching comments", err.message);
      }
    }
    setUser(JSON.parse(localStorage.getItem("userIqraa")));

    fetchComments();
  }, [post?._id]);
  useEffect(() => {
    if (user) {
      setUserDecoded(jwt_decode(user.token));
    }
  }, [user]);

  const handleSubmitComment = async e => {
    e.preventDefault();
    // console.log(user);
    // console.log(userDecoded);
    try {
      const res = await api.createComment({
        idParent: post._id,
        idUser: userDecoded.id,
        message: comment,
      });
      if (res.data.idParent === post._id) {
        setCommentsData([...commentsData, res.data]);
      }
      setComment("");
    } catch (err) {
      console.log("error in creating comment", err);
    }
  };

  const handleDeletComment = async idComment => {
    try {
      const res = await api.deletCommentById(idComment);
      if (res.data.idParent === post._id) {
        const filteredComments = commentsData.filter(
          c => c._id !== res.data._id
        );
        setCommentsData(filteredComments);
      }
    } catch (err) {
      console.log("error in deleting comment", err);
    }
  };

  return (
    <div
      className={
        lng === "en"
          ? "flex justify-end flex-col gap-4 w-full"
          : "flex justify-end flex-col gap-4 w-full text-end"
      }
    >
      {user && (
        <div className="flex flex-col gap-2">
          <h3 className="text-md">
            {lng === "en" ? "Write Comment" : "اكتب تعليق"}
          </h3>
          <form
            onSubmit={handleSubmitComment}
            className="flex flex-col sm:flex-row gap-2"
          >
            <textarea
              type="text"
              required
              onChange={e => setComment(e.target.value)}
              className="border-2 border-gray-400 rounded-md w-full"
            />
            <button className="bg-[#2e9175] text-white rounded p-2 w-full sm:w-60">
              {lng === "en" ? "Comment" : "علّق"}
            </button>
          </form>
        </div>
      )}
      <div
        className={
          lng === "en"
            ? "flex flex-col gap-10 w-full"
            : "flex items-end flex-col gap-10 w-full text-end"
        }
      >
        <h3 className="flex flex-col gap-4 font-semibold w-full">
          {commentsData.length} {lng === "en" ? "Comments" : "التعليقات"} <hr />
        </h3>
        <div className="w-full sm:w-96">
          {commentsData.length > 0 ? (
            commentsData.map(
              c =>
                c?._id && (
                  <div
                    className={
                      lng === "en"
                        ? "flex flex-col flex-wrap gap-2 rounded-lg p-2 w-full"
                        : "flex flex-col flex-wrap gap-2 rounded-lg p-2 w-full text-end"
                    }
                    key={c?._id}
                  >
                    <div
                      className={
                        lng === "en"
                          ? "flex items-start justify-start gap-6"
                          : "flex flex-row-reverse items-start justify-start gap-6"
                      }
                    >
                      <Image
                        src="/download.jpg"
                        width={100}
                        height={100}
                        alt="user profile"
                        className="rounded-full w-12 h-12"
                      />
                      <div
                        className={
                          lng === "en"
                            ? "flex justify-between items-start gap-2 p-2 shadow-md w-full"
                            : "flex flex-row-reverse justify-between items-start gap-2 p-2 shadow-md w-full"
                        }
                      >
                        <div>
                          <h4 className="text-lg">
                            {c.firstName + " " + c.lastName}
                          </h4>
                          <h4 className="text-[#ccc] text-sm">
                            {moment(c.createdAt).utc().format("YYYY-MM-DD")}
                          </h4>
                          <p className="text-gray-600 font-semibold text-sm">
                            {c.message}
                          </p>
                        </div>
                        {user && userDecoded.id === c.idUser && (
                          <button
                            className="text-sm bg-black p-1 text-white rounded"
                            onClick={() => handleDeletComment(c?._id)}
                          >
                            Delete
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
            )
          ) : (
            <p className="w-full">
              {lng === "en" ? "Not Comments exist" : "لايوجد تعليقات"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comments;
