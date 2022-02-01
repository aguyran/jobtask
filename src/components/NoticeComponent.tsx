import { useEffect, useRef, useState } from "react";
import { AiFillCloseCircle } from "react-icons/ai";
const NoticeComponent = function () {
  const [visible, setVisible] = useState<boolean>(true);
  const timer = useRef<number | undefined>(undefined);
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const now = new Date();
    const current = now.getHours() * 60 + now.getMinutes();
    if (current >= 0 && current < 720) {
      setTime("Good Morning");
    } else if (current >= 720 && current < 1020) {
      setTime("Good Afternoon");
    } else {
      setTime("Good Evening");
    }

    timer.current = setTimeout(() => {
      setVisible(false);
    }, 10000);
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <div
      className={
        "absolute w-72 bg-yellowOwl  z-20 text-owlLegend text-center rounded-br-2xl rounded-bl-2xl my-4 mx-auto   top-0 left-0 " +
        (!visible ? "hidden" : "")
      }
    >
      <div className="relative h-full w-full">
        <div className=" p-4">{time}</div>
        <div className="absolute -top-2 -right-2">
          <AiFillCloseCircle
            className="text-2xl bg-owlBlack rounded-xl text-yellowOwl cursor-pointer"
            onClick={() => {
              clearTimeout(timer.current);
              setVisible(false);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default NoticeComponent;
