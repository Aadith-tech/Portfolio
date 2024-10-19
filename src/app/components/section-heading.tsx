import React from "react";
import { ReactNode } from "react";
type SectionHeadingProps = {
  children: ReactNode;
};

const SectionHeading = ({ children }: SectionHeadingProps) => {
  return (
    <div className="text-3xl font-medium capitalize mb-8 text-center">
      {children}
    </div>
  );
};

export default SectionHeading;
