import React from "react";
import NavLinksIcon from "../../molecules/navlinks-icons";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

import Exit from "../../assests/svg/exit.svg";
import PlainLogo from "../../assests/svg/plainlogo.svg";
import Chats from "../../assests/svg/chats.svg";
import Polls from "../../assests/svg/polls.svg";
import Group from "../../assests/svg/group.svg";
import Settings from "../../assests/svg/settings.svg";
import Notification from "../../assests/svg/notification.svg";
import Avatar from "../../assests/png/avatar.png";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.top}>
        <Image src={PlainLogo} />
        <Image className={styles.avatar} src={Avatar} alt="avatar" />
      </div>
      <div className={styles.navs}>
        <div className={styles.nav_links}>
          <NavLinksIcon text="Activity" icon={Notification} />
          <NavLinksIcon text="Chat" icon={Chats} />
          <NavLinksIcon text="Polls" icon={Polls} />
          <NavLinksIcon text="Explore" icon={Group} />
          <NavLinksIcon text="Settings" icon={Settings} />
        </div>
        <div className={styles.exit}>
          <NavLinksIcon icon={Exit} text="" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
