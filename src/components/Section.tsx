import { ReactNode } from "react";

const Section = function (props: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      className={"p-4 rounded-md mt-24 mb-24  " + props.className}
      id={props.id}
    >
      {props.children}
    </section>
  );
};
export default Section;
