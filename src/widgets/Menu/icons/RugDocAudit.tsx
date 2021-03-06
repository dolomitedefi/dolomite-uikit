import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface TechRateAuditProps extends SvgProps {
  isDark: boolean;
}

const RugDocAudit: React.FC<TechRateAuditProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg viewBox="0 0 370 121" {...props}>
      <image width="370" height="121" href={isDark ? '/images/egg/RugDocAuditDark.png' : '/images/egg/RugDocAuditWhite.png'}/>
    </Svg>
  )
};

export default RugDocAudit;
