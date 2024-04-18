import { AppstoreOutlined, MailOutlined, UserOutlined } from "@ant-design/icons";
import { FaUserTie, FaUserMd } from "react-icons/fa";
import { MdOutlinePets } from "react-icons/md";
import { SiPetsathome } from "react-icons/si";

import React from "react";
import { Link } from "react-router-dom";

export const items = [
  {
    key: "1",
    icon: <SiPetsathome />,
    label: <Link to="/">Home</Link>
  },
  {
    key: "2",
    icon: <FaUserTie />,
    label: <Link to="/owners">Owners</Link>
  },
  {
    key: "3",
    icon: <FaUserMd />,
    label: <Link to="/veterinarians">Veterinarians</Link>
  },

  {
    key: "4",
    icon: <MdOutlinePets />,
    label: <Link to="/petshop">Pet Shop</Link>
  },

];
