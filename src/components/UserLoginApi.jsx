import { useState, useEffect } from "react";

function UserLoginApi() {
  const [data, setData] = useState("");

  const getData = () => {
    fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
      }),
    })
      .then((res) => res.json())
      .then(console.log)
      .then((res) => {
        setData(res.accessToken);
        console.log(res.accessToken);
        console.log(data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  window.addEventListener("unload", (event) => {
    getData();
    console.log("API call after page reload");
  });

  return (
    <div>
      <h1>GeeksforGeeks</h1>
      <h3>{data}</h3>
    </div>
  );
}

export default UserLoginApi;
