"use client";
import { useEffect, useState } from "react";
export default function Compteur({
  dateInscrit = new Date(),
}: {
  dateInscrit: Date | string | number;
}) {
  const ecouler = new Date(dateInscrit).getTime();
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const dateNow = Date?.now();
      const dateDif = (dateNow - ecouler) / 1000;
      const d = Math.round(dateDif / 86400);
      const day_dif = dateDif % 86400;
      const h = Math.round(day_dif / 3600);
      const hour_dif = day_dif % 3600;
      const m = Math.round(hour_dif / 60);
      const s = Math.round(hour_dif % 60);
      setDay(d);
      setHour(h);
      setMin(m);
      setSec(s);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  });
  return (
    <>
      <span>{day?.toString()}j</span>
      <span>{hour?.toString()}h</span>
      <span>{min?.toString()}m</span>
      <span>{sec?.toString()}s</span>
    </>
  );
}
