import React from "react";

export default function Home(props) {
  const input = React.useRef(null);
  const handleClick = () => {
    const username = input.current.value;
    props.history.push("/repos-list/" + username);
  };
  return (
    <div className="Home">
      <h1>Home Page</h1>
      <input type="text" ref={input} placeholder="enter username" />
      <button onClick={handleClick}>Search</button>
    </div>
  );
}
