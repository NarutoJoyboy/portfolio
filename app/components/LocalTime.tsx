"use client";
import { useSyncExternalStore } from "react";

const format = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Kolkata",
  hour: "2-digit",
  minute: "2-digit",
});

const subscribe = (onChange: () => void) => {
  const id = setInterval(onChange, 15_000);
  return () => clearInterval(id);
};

/** Current time in India, so a client can see whether it is a sane hour to write. */
export default function LocalTime() {
  const time = useSyncExternalStore(subscribe, () => format.format(new Date()), () => "");
  return <span>{time ? `${time} IST` : "IST"}</span>;
}
