"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider as JotaiProvider } from "jotai";
import { useRouter } from "next/navigation";
import React from "react";
import Header from "./components/Header";

const ManContainer = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <JotaiProvider>
        <Header />
        {children}
      </JotaiProvider>
    </NextUIProvider>
  );
};

export default ManContainer;
