import React from 'react'
import icon from "../assets/icon.png"
import Card from './Card'
import super1 from "../assets/super1.png"
import release2 from "../assets/release2.png"

export default function Free() {
  return (
    <div className="free">
      <div className="conteiner">
        <div className="background">
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </div>
        <div className="content">
          <div className="image">
            <img src={icon} alt="icon" />
          </div>
          <h2 className="title">Free NFT for early birds</h2>
          <p className="description">
            Sign up today and you'll get a free NFT when we launch
          </p>
        </div>
      </div>
      <div className="cards">
        <div className="card1">
          <Card
            image={super1}
            series="Floop Series"
            title="Purple Man"
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card
              image={release2}
              series="Gloop Series"
              title="Purple Man"
              price={3.95}
              tag={12983}
              time={2}
            />
        </div>
      </div>
    </div>
  );
}
