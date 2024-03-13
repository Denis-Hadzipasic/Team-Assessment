import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <>
      {!user ? (
        <NavLink to={"login"}>Anmelden</NavLink>
      ) : (
        <NavLink onClick={logout}>Abmelden</NavLink>
      )}
    </>
  );
}
