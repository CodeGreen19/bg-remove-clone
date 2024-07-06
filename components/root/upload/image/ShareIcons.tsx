import Link from "next/link";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoTiktok,
  BiLogoTwitter,
} from "react-icons/bi";

const ShareIcons = () => {
  let icons = [
    { icons: <BiLogoFacebookCircle />, link: "#" },
    { icons: <BiLogoInstagram />, link: "#" },
    { icons: <BiLogoTwitter />, link: "#" },
    { icons: <BiLogoTiktok />, link: "#" },
  ];
  return (
    <div>
      <ul className="flex_center hidden gap-3 text-lg lg:flex">
        <li>share</li>

        {icons.map((icon, i) => (
          <Link href={icon.link} key={i}>
            <li>{icon.icons}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ShareIcons;
