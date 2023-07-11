import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SearchIcon from "@mui/icons-material/Search";

export default function MobileBottomNav() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="bottom-nav">
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Explore" icon={<SearchIcon />} />
        <BottomNavigationAction
          label="Wishlists"
          icon={<FavoriteBorderIcon />}
        />
        <BottomNavigationAction
          label="Log in"
          icon={<AccountCircleOutlinedIcon />}
        />
      </BottomNavigation>
    </div>
  );
}
