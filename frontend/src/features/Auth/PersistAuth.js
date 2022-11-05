import { useLocation, Navigate, Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";

const PersistAuth = () => {
  const token = useSelector(selectCurrentToken);
  const authEffectRan = useRef(false);
  const location = useLocation();

  console.log("PersistAuth: authEffectRan: ", authEffectRan.current);

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  const verifyRefreshToken = async () => {
    console.log("verifying refresh token");
    try {
      //const response =
      await refresh();
      //const { accessToken } = response.data
    } catch (err) {
      console.error("err", err);
    }
  };

  useEffect(() => {
    console.log(authEffectRan.current);
    if (authEffectRan.current === false) {
      // React 18 Strict Mode
      if (!token) verifyRefreshToken();
      console.log("Persist Inside Auth: token: ", token);
    }
    return () => {
      console.log("Clearing AuthEffectRan");
      authEffectRan.current = true;
    };

    // eslint-disable-next-line
  }, []);
  console.log("Success", isSuccess);

  let content = <Outlet />;

  if (isSuccess) {
    console.log("PersistAuth: isSuccessful");
    return content;
  } else if (isError) {
    console.log("PersistAuth: isError");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return content;
};
export default PersistAuth;
