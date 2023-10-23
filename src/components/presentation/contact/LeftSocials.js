import { useState, useEffect } from "react";
import { SocialsList } from "../../utils/SocialsList";
import { StyledLeftSocials } from "./ContactStyles";

const LeftSocials = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 3000);
  }, []);

  return (
    <StyledLeftSocials orientation="left">
      <ul className={isVisible ? "" : "hidden"}>
        {SocialsList.map((social) => {
          return (
            <li key={social.id}>
              <a
                href={social.href}
                aria-label={social.title}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            </li>
          );
        })}
      </ul>
    </StyledLeftSocials>
  );
};

export default LeftSocials;
