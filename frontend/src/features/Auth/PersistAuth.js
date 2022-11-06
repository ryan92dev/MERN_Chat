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

  const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
    useRefreshMutation();

  const verifyRefreshToken = async () => {
    try {
      //const response =
      await refresh();
      //const { accessToken } = response.data
    } catch (err) {}
  };

  useEffect(() => {
    if (authEffectRan.current === false) {
      // React 18 Strict Mode
      if (!token) verifyRefreshToken();
    }
    return () => {
      authEffectRan.current = true;
    };

    // eslint-disable-next-line
  }, []);

  let content = <Outlet />;

  if (isSuccess) {
    return content;
  } else if (isError) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return content;
};
export default PersistAuth;
