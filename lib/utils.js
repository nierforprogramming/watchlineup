import { DAYS } from "@/data/lineup";

export function getYear(dateString) {
  if (!dateString) return "N/A";
  return dateString.split("-")[0];
}

export function truncateText(text, maxLength = 160) {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
}

export function getTodayDayName() {
  const todayIndex = new Date().getDay();
  return DAYS[todayIndex];
}
