import { useLayoutEffect, useState } from "react";

const NoticeComponent = function () {
  const [visible, setVisible] = useState<boolean>(true);
  let time:string|undefined;
  useLayoutEffect(() => {
      console.log(new Date().getTime())
  }, []);
  return <div className={"" + (!visible ? "hidden" : "")}>Hello</div>;
};
export default NoticeComponent;
