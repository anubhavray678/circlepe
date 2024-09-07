"use client";

import React, { useState, useEffect } from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { GoSearch } from "react-icons/go";
import { BsPerson } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { TbClipboardText } from "react-icons/tb";
import { FaClipboard } from "react-icons/fa";
import { BiSolidSearchAlt2 } from "react-icons/bi";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

function BottomNavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [value, setValue] = useState(getPageIndex(pathname));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|window|IEMobile|Opera Mini/i.test(
        userAgent
      )
    );
  }, []);

  function getPageIndex(route) {
    switch (route) {
      case "/":
        return 0;
      case "/community":
        return 1;
      case "/bookings":
        return 2;
      case "/account":
        return 3;
      default:
        return 0;
    }
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 0:
        router.push("/");
        break;

      case 1:
        router.push("/");
        break;
      case 2:
        router.push("/");
        break;
      case 3:
        router.push("/");
        break;
      default:
        break;
    }
  };

  if (!isMobile) {
    return null; // Render nothing on desktop
  }

  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "fixed",
        bottom: "0px",
        left: 0,
        zIndex: 999,
        // backgroundColor: "#FFEFEB",
        backgroundColor: "#fff",
        boxShadow: "0px -1px 10px 0 rgba(0, 0, 0, 20%)",
        "& .MuiBottomNavigationAction-root": {
          fontSize: "1.7rem",
        },
      }}
      value={value}
      elevation={500}
      onChange={handleChange}
      showLabels
    >
      <BottomNavigationAction
        label=""
        value={0}
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 0 ? "#FD9696" : "gray",
            fontWeight: value === 0 ? "bold" : "normal",
            fontFamily: "sans-serif",
          },
        }}
        icon={
          value === 0 ? (
            <GoHomeFill style={{ color: "#21435b" }} />
          ) : (
            <GoHome style={{ color: "#21435b" }} />
          )
        }
      />
      <BottomNavigationAction
        label=""
        value={1}
        icon={
          value === 1 ? (
            <BiSolidSearchAlt2 style={{ color: "#21435b" }} />
          ) : (
            <GoSearch style={{ color: "#21435b" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 1 ? "#FD9696" : "gray",
            fontWeight: value === 1 ? "bold" : "normal",
          },
        }}
      />
      <BottomNavigationAction
        label=""
        value={2}
        icon={
          value === 2 ? (
            <FaHeart style={{ color: "#21435b" }} />
          ) : (
            <CiHeart style={{ color: "#21435b" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 2 ? "#FD9696" : "gray",
            fontWeight: value === 2 ? "bold" : "normal",
            fontFamily: "sans-serif",
          },
        }}
      />

      <BottomNavigationAction
        label=""
        value={3}
        icon={
          value === 3 ? (
            <BsPersonFill style={{ color: "#21435b" }} />
          ) : (
            <BsPerson style={{ color: "#21435b" }} />
          )
        }
        sx={{
          "& .MuiBottomNavigationAction-label": {
            color: value === 3 ? "#FD9696" : "gray",
            fontWeight: value === 3 ? "bold" : "normal",
            fontFamily: "serif",
          },
        }}
      />
    </BottomNavigation>
  );
}

export default BottomNavBar;
