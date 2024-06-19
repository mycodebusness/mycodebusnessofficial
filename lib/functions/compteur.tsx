"use client";
import React, { useEffect, useState } from "react";

type DurationProps = {
  creationDate: string;
};

function formatDuration(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44)
  );
  const days = Math.floor(
    (diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24)
  );
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  if (years > 0) {
    return `il y a ${years} ${years === 1 ? "an" : "ans"}`;
  }
  if (months > 0) {
    return `il y a ${months} mois`;
  }
  if (days > 0) {
    return `il y a ${days} ${days === 1 ? "jour" : "jours"}`;
  }
  if (hours > 0) {
    return `il y a ${hours} ${hours === 1 ? "heure" : "heures"}`;
  }
  if (minutes > 0) {
    return `il y a ${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  }
  return `il y a ${seconds} ${seconds === 1 ? "seconde" : "secondes"}`;
}

const Duration: React.FC<DurationProps> = ({ creationDate }) => {
  const [formattedDuration, setFormattedDuration] = useState<string>("");

  useEffect(() => {
    const creationDateObj = new Date(creationDate);
    if (isNaN(creationDateObj.getTime())) {
      console.error("Invalid date passed to Duration component.");
      return;
    }

    const updateDuration = () => {
      setFormattedDuration(formatDuration(creationDateObj));
    };

    updateDuration();
    const interval = setInterval(updateDuration, 1000);

    return () => clearInterval(interval);
  }, [creationDate]);

  return <span>{formattedDuration}</span>;
};

export default Duration;
