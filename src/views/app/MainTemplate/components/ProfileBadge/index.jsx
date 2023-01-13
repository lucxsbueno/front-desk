import { ArrowUpRight } from "lucide-react";
import React from "react";

import "./styles.css";

const ProfileBadge = () => {
  return (
    <a href="/#" className="profile-badge">
      <div className="profile-badge__wrapper">
        <div className="avatar avatar--sm">
          <img
            alt="Profile user information"
            src="https://cdn.dribbble.com/users/230875/screenshots/12078079/media/c08285d2e039896a565cffeb5eb44a15.jpg?compress=1&resize=400x300&vertical=top"
            className="avatar__img"
          />
        </div>

        <span className="profile-badge__title">
          Olá, <span className="profile-badge__title--bold">Lucas Bueno</span>
        </span>
      </div>

      <ArrowUpRight />
    </a>
  );
};

export default ProfileBadge;
