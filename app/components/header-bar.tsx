import React from "react";
import { FaTwitter } from "react-icons/fa";

interface SocialLink {
  icon: JSX.Element;
  hyperlink: string;
}

interface HeaderBarProps {
  socialLinks: SocialLink[];
}

const socialLinks: SocialLink[] = [
  {
    icon: (
      <FaTwitter color="#7A8450" style={{ height: "100%", width: "auto" }} />
    ),
    hyperlink: "text",
  },
];

const HeaderBar: React.FC = () => {
  return (
    <div className="bg-charcoal p-3 text-white">
      <div className="container mx-auto flex justify-end items-center space-x-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderBar;
