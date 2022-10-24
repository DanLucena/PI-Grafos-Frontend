import React from "react";
import type { NextPage } from "next";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SideBarMenu } from "../components/SideBarMenu";
import { ChoosedScreen } from "../components/ChoosedScreen";

const Profile: NextPage = () => {
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    authCheck();

    const hideContent = () => setAuthorized(false);
    router.events.on("routeChangeStart", hideContent);

    router.events.on("routeChangeComplete", authCheck);

    return () => {
      router.events.off("routeChangeStart", hideContent);
      router.events.off("routeChangeComplete", authCheck);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function authCheck() {
    const userToken = localStorage.getItem("userToken");
    if (!userToken) {
      setAuthorized(false);
      router.push("/");
    } else {
      setAuthorized(true);
    }
  }

  return authorized ? (
    <div className="flex h-screen">
      <SideBarMenu />
      <ChoosedScreen />
    </div>
  ) : (
    <></>
  );
};

export default Profile;
