import { Suspense, useState } from "react";
import React from 'react'
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import SuspanceLoader from "../components/common/SuspanceLoader";
import { Box ,styled} from "@mui/material";

const Wrapper = styled(Box)`
    display: flex;
`;

const Main = () => {
  const [openDrawer, setopenDrawer] = useState(true);

  const toggleOpenDrawer = () => {
    setopenDrawer(prevState => !prevState);
  };
  return (
    <>
      <Header toggleOpenDrawer={toggleOpenDrawer} />
      <Wrapper>
        <Sidebar openDrawer={openDrawer} />

        <Suspense fallback={<SuspanceLoader />}>
          <Outlet context={{openDrawer}} />
        </Suspense>
      </Wrapper>
    </>
  )
}

export default Main
