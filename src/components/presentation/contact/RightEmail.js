import { useEffect, useState } from "react";
import { StyledRightEmail } from "./ContactStyles";

const RightEmail = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(()=> {
      setIsVisible(true);
    }, 3000)
  }, []);

  return (
    <StyledRightEmail>
      <div className={isVisible ? "" : "hidden"}>
        <a href="mailto:estanislaovl@gmail.com">estanislaovl@gmail.com</a>
      </div>
    </StyledRightEmail>
  );
};

export default RightEmail;
