"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider as JotaiProvider } from "jotai";
import React from "react";
const ManContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <JotaiProvider>{children}</JotaiProvider>
    </NextUIProvider>
  );
};

export default ManContainer;
