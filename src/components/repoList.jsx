import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export default function RepoList(props) {
  const [username, setUsername] = useState(props.match.params.username);
  const [repoList, setRepoList] = useState([]);
  const handleClick = props.handleClick;
  useEffect(() => {
    async function fetchAPIRepos() {
      const response = await Axios.get(
        `https://api.github.com/users/${username}/repos`
      );
      //const newRepoList = { ...response };
      setRepoList(response.data);
    }
    fetchAPIRepos().then(() => console.log(repoList));
  }, []);
  return (
    <>
      <div>
        <h2>
          username: {repoList.length !== 0 ? repoList[0].owner.login : ""}
        </h2>
        <p>userId: {repoList.length !== 0 ? repoList[0].owner.id : ""}</p>
      </div>
      <div className="RepoList">
        {repoList.map((repo) => (
          <div
            key={repo.id}
            className="Repo"
            onClick={() => handleClick(props, repo.owner.login, repo.id, repo)}
          >
            <img
              src={repo.owner.avatar_url}
              height="30px"
              width="30px"
              alt="Repo-image"
            />
            <h2>{repo.name}</h2>
            {repo.description}
          </div>
        ))}
      </div>
    </>
  );
}
