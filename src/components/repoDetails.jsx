import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";

export default function RepoDetails(props) {
  const repo = { ...props.repo };
  return (
    <div>
      {/* <img
        src={repo.owner.avatar_url}
        height="70px"
        width="70px"
        alt="Repo-imag"
      /> */}
      <h2>{repo.name}</h2>
      <Link to="/set-up-plan" ><button>Set up a plan</button></Link>
      <p>{repo.description}</p>
    </div>
  );
}
