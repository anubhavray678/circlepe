"use client";
import React, { useState } from "react";
import { Drawer, Button, Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import VerifiedIcon from "@mui/icons-material/Verified";
import Link from "next/link";
const PayButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  return (
    <div>
      <button
        onClick={toggleDrawer(true)}
        className="bg-blue-400 text-white p-3 rounded-xl capitalize"
      >
        Pay With Circle
      </button>
      <Drawer anchor="bottom" open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          className="p-5 flex flex-col justify-center items-center"
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <p className="font-bold text-xl">
            Rent at <span className="text-blue-400">Zero</span> security deposit
          </p>
          <VerifiedIcon className="text-blue-200 scale-150 mt-5 mb-5" />
          <button
            onClick={toggleDrawer(true)}
            className="bg-blue-200 p-2 rounded-md capitalize text-blue-500 font-bold"
          >
            Approved
          </button>
          <div className="mt-5 gap-5 flex flex-col">
            <div className="flex gap-5 font-semibold w-full">
              <CheckCircleIcon className="text-blue-400" />
              <p>
                New Rent Offer <span className="text-blue-400">20000</span>
              </p>
            </div>
            <div className="flex gap-5 font-semibold w-full">
              <CheckCircleIcon className="text-blue-400" />
              <p>
                Zero security deposit{" "}
                <span className="text-blue-400">move-in</span>
              </p>
            </div>
            <div className="flex gap-5 font-semibold w-full">
              <CheckCircleIcon className="text-blue-400" />
              <p>
                3-months <span className="text-blue-400">salary cover</span>
              </p>
            </div>
          </div>
          <Link href={"/"}>
            <button className="bg-blue-400 text-white p-3 rounded-xl capitalize mt-10 font-bold">
              Pay With Circle
            </button>
          </Link>
        </Box>
      </Drawer>
    </div>
  );
};

export default PayButton;
