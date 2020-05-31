import React from "React"

import Appear from "./appear"

const AppearGroup = ({ children }) => (
  <>
    {React.Children.map(children, (child, i) => (
      <Appear delay={i * 200}>{child}</Appear>
    ))}
  </>
)

export default AppearGroup
