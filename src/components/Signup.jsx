import React from 'react'
import signup from "../assets/signup.png";

export default function Signup() {
  return (
    <div className="signup">
      <div className="conteiner">
        <div className="content">
          <p className="sub-title">Launching Soon</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Don't miss out on the realese of our new NFT.
            Sign-up below to recieve updates when we go live.
          </p>
          <button>Sign Up</button>
        </div>
        <div className="image-conteiner">
          <div className="image">
            <img src={signup} alt="signup" />
          </div>
          <div className="ellipse-conteiner">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
