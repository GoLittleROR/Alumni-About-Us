import React from "react";
import "./Chat.css";
import alumniImage from "../assets/alumni.jfif";

function Chat() {
  return (
    <div className="container">
      <div className="nav-list">
        <div className="heading">
          <h3>
            <i className="fa-regular fa-comments"></i> Chats
          </h3>
        </div>

        <div className="Direct-message">
          <p>Messages</p>
          <ul>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              Samay
            </li>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              Tanmay
            </li>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              Abhi
            </li>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              Kunal
            </li>
          </ul>
        </div>

        <div className="groups">
          <p>Channels</p>
          <ul>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              Btech
            </li>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              B3 batch
            </li>
            <li>
              <span>
                <img src={alumniImage} alt="" />
              </span>
              Code Quest
            </li>
          </ul>
        </div>
      </div>

      <div className="user-profile">
        <div className="profile-photo">
          <img src={alumniImage} alt="Profile" />
        </div>
        <div className="user-name">
          <h2>Abhi</h2>
          <p>TY CSE</p>
        </div>
      </div>

      <div className="chatting-container">
        <div className="send-msg">
          <input
            type="text"
            name="msg"
            id="msg"
            placeholder="Type your text message..."
          />
          <button>
            <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Chat;
