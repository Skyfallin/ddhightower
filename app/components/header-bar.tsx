import React from "react";
import {
  FaDiscord,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

interface SocialLink {
  icon: JSX.Element;
  hyperlink: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaDiscord size={"24"} />,
    hyperlink: "https://x.com/",
  },
  {
    icon: <FaInstagram size={"24"} />,
    hyperlink: "https://x.com/",
  },
  {
    icon: <FaTiktok size={"24"} />,
    hyperlink: "https://x.com/",
  },
  {
    icon: <FaXTwitter size={"24"} />,
    hyperlink: "https://x.com/",
  },
  {
    icon: <FaYoutube size={"24"} />,
    hyperlink: "https://x.com/",
  },
];

const HeaderBar: React.FC = () => {
  return (
    <div className="bg-charcoal text-white h-10">
      <div className="container mx-auto px-5 max-w-84rem flex space-x-4 h-full">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.hyperlink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 flex-shrink-0 my-auto"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </div>
  );
};

export default HeaderBar;
