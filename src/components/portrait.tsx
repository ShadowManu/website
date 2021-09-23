import React from "react";

import { StaticImage } from "gatsby-plugin-image";

interface Props {
  className?: string;
}

const Portrait: React.FC<Props> = ({ className }) => {
  return (
    <StaticImage
      className={className}
      src="../images/portrait.jpg"
      alt="portrait"
      imgStyle={imgStyle}
    />
  );
};

const imgStyle = { objectPosition: "50% 20%" };

export default Portrait;
