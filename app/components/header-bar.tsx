import { Box, Flex, Link } from "@chakra-ui/react";
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
    <Box className="bg-charcoal text-white h-10">
      <Flex
        backgroundColor={"samon"}
        className="container mx-auto px-5 max-w-84rem h-full"
        gap={4}
        justifyContent={["center", "center", "flex-end"]} // center on base/sm, flex-end on md and up
      >
        {socialLinks.map((link, index) => (
          <Link
            _hover={{ color: "#FFF1E0" }}
            flexShrink={0}
            href={link.hyperlink}
            key={index}
            my={"auto"}
            rel="noopener noreferrer"
            target="_blank"
          >
            {link.icon}
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default HeaderBar;
