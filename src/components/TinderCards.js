import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "../css/TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Julia Jacson",
      url: "https://cdn.pixabay.com/photo/2018/01/13/19/39/fashion-3080644_960_720.jpg",
    },
    {
      name: "Kathrine Pooth",
      url: "https://cdn.pixabay.com/photo/2016/11/22/06/05/girl-1848454_960_720.jpg",
    },
    {
      name: "Dooly Remsh",
      url: "https://images.pexels.com/photos/1508336/pexels-photo-1508336.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Fury Jils",
      url: "https://cdn.pixabay.com/photo/2018/01/29/17/01/woman-3116587_960_720.jpg",
    },
    {
      name: "Akan Tin",
      url: "https://images.pexels.com/photos/725458/pexels-photo-725458.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Cha Man",
      url: "https://images.pexels.com/photos/1446161/pexels-photo-1446161.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Jia Pik",
      url: "https://images.pexels.com/photos/1139627/pexels-photo-1139627.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Sreli Del",
      url: "https://images.pexels.com/photos/908602/pexels-photo-908602.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Julia Pril",
      url: "https://images.pexels.com/photos/1642228/pexels-photo-1642228.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Manny Beli",
      url: "https://images.pexels.com/photos/1308885/pexels-photo-1308885.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Jackie Jnth",
      url: "https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Jenieth Poost",
      url: "https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      name: "Seria Mulk",
      url: "https://images.pexels.com/photos/1386604/pexels-photo-1386604.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
  ]);
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              className="card"
              style={{ backgroundImage: `url(${person.url})` }}
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
