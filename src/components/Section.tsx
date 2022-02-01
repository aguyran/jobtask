import { ReactNode } from "react";

const Section = function (props: { children: ReactNode; className?: string }) {
  return (
    <div className={"p-4 rounded-md my-12 " + props.className}>
      {props.children}
    </div>
  );
};
export default Section;
