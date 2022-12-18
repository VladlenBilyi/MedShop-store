import { useToast } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  let { isAuth } = useSelector((store) => store.auth);
  const toast = useToast();
  if (isAuth) {
    return children;
  } else {
    toast({
      title: "You've to Login First",

      status: "warning",
      duration: 2000,
    });
    return <Navigate to="/login" />;
  }
}

export default PrivateRoute;
