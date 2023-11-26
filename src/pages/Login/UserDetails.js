import React, { useEffect, useState } from "react";

const UserDetails = () => {
  const [userData, setUserData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/userVerify", {
          method: "POST",
          crossDomain: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          body: JSON.stringify({
            token: window.localStorage.getItem("token"),
          }),
        });

        const data = await response.json();
        console.log(data, "userData");
        setUserData(data.data);

        //   if (data.data === "token expired") {
        //     alert("Token expired. Please log in again.");
        //     window.localStorage.clear();
        //     window.location.href = "./sign-in";
        //   }
      } catch (error) {
        console.error("Error fetching user verification data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <div>
          Name<h1>{userData.firstName} {userData.lastName}</h1>
          Email <h1>{userData.email}</h1>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
