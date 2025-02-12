import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import AdminLeft from "../AdminLeft/AdminLeft";
import CustomerLeft from '../CustomerLeft/CustomerLeft';
const LeftContainer = () => {
  const { user, role, setRole } = useContext(AuthContext);
  // const email = user?.email;
  // useEffect(() => {
  //   fetch(`https://capital-trust-bank-server.vercel.app/customer/${email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setRole(data.role);
  //     });
  // }, [user]);
  // console.log(role)
  return (
    <div className="">
      {role === "customer" ? <CustomerLeft></CustomerLeft> : undefined}
      {role === "admin" ? <AdminLeft></AdminLeft> : undefined}

      {/* {
        role === 'admin' ? <AdminLeft ? 
      } */}
    </div>
  );
};

export default LeftContainer;
