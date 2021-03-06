import React from "react";

export const Card = ({ id, name, email, username }) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-3 tc">
    <img src={`https://robohash.org/${id}200x200?set=set2`} alt="" />
    <div>
      <h2>{name}</h2>
      <h3>{username.toLowerCase()}</h3>
      <p>{email.toLowerCase()}</p>
    </div>
  </div>
);
