import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function ProfilePage() {
  const { user } = useContext(AuthContext);

  return (
    <div style={{ padding: "0 1.5rem" }}>
      <h1>Profile</h1>

      {user.isAuth ? (
        <>
          <p>Hey {user.name}!</p>
          <p>{user.name}, ready for some popcorn!</p>
        </>
      ) : (
        <p>No user logged in!</p>
      )}
    </div>
  );
}

export default ProfilePage;