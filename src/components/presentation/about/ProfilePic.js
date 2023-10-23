import useObserver from "../../../hooks/useObserver";
import {
  StyledProfilePicContainer,
  StyledProfilePicDiv,
  StyledProfilePicImgContainer,
} from "./ProfilePicStyles";

const ProfilePic = () => {
  const { isIntersecting, fromRef } = useObserver({ treshold: 1, rootMargin: "300px 0px 0px 0px" });
  return (
    <StyledProfilePicDiv ref={fromRef}>
      <StyledProfilePicContainer className={isIntersecting ? "" : "hidden scroll-in"} delay={"2s"}>
        <StyledProfilePicImgContainer>
          <div>
            <img
              alt="presentation"
              aria-hidden="true"
              src="data:image/svg+xml;charset=utf-8,%3Csvg height='500' width='500' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E"
            />
          </div>

          <div aria-hidden="true" data-placeholder-image></div>

          <picture>
            <source type="image/webp" srcSet="https://i.ibb.co/8bTvqHB/Estanislao-Elias-Varela-Lucius-Frontend-Developer.webp"></source>
            <img alt="profile pic" src="https://i.ibb.co/8bTvqHB/Estanislao-Elias-Varela-Lucius-Frontend-Developer.webp" />
          </picture>
        </StyledProfilePicImgContainer>
      </StyledProfilePicContainer>
    </StyledProfilePicDiv>
  );
};

export default ProfilePic;
