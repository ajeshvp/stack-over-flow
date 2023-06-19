import React from "react";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";
import { stringAvatar } from "../../utils/Avatar";

function AllQuestions({ data }) {
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  let tags = JSON.parse(data?.tags[0]);

  return (
    <div className="all-questions">
      <div className="all-questions-container">
        <div className="all-questions-left">
          <div className="all-options">
            <div className="all-option">
              <p>0</p>
              <span>votes</span>
            </div>
            <div className="all-option">
              <p>{data?.answerDetails?.length}</p>
              <span>answers</span>
            </div>
            <div className="all-option">
              <small>2 views</small>
            </div>
          </div>
        </div>
        <div className="question-answer">
          <Link to={`/question?q=${data?._id}`}>{data?.title}</Link>

          <div style={{ maxWidth: "90%" }}>
            <div>{ReactHtmlParser(truncate(data?.body, 200))}</div>
          </div>
          <div style={{ display: "flex" }}>
            {tags.map((_tag, index) => (
              <p
                key={index}
                style={{
                  margin: "10px 5px",
                  padding: "5px 10px",
                  backgroundColor: "#007cd446",
                  borderRadius: "3px",
                }}
              >
                {_tag}
              </p>
            ))}
          </div>
          <div className="author">
            <small>{data?.create_at}</small>
            <div className="auth-details">
              <Avatar {...stringAvatar(data?.user?.displayName)} />
              <p>
                {data?.user?.displayName ? data?.user?.displayName : "Natalie Lee"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
