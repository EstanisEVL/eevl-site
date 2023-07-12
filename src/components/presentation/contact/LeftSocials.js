import { SocialsList } from "../../utils/SocialsList";

const LeftSocials = () => {
  return (
    <div className="left-socials-container" orientation="left">
      <ul className="left-socials-ul">
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
    </div>
  );
};

export default LeftSocials;
