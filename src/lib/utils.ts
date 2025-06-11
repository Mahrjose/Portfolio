import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { format, parse, differenceInDays, differenceInMonths } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getDuration(start?: string, end?: string) {
  if (!start) return "Unknown";

  const startDate = parse(start, "dd-MM-yyyy", new Date());
  if (isNaN(startDate.getTime())) return "Invalid start date";

  const endDate = end ? parse(end, "dd-MM-yyyy", new Date()) : new Date();
  if (isNaN(endDate.getTime())) return "Invalid end date";

  const days = differenceInDays(endDate, startDate);
  const months = differenceInMonths(endDate, startDate);

  if (!end) {
    return `Started ${format(startDate, "MMMM yyyy")}`;
  }

  if (days < 7) {
    return `${days} day${days === 1 ? "" : "s"}`;
  }

  if (days === 7) return "1 week";
  if (days === 14) return "2 weeks";
  if (days === 21) return "3 weeks";
  if (days >= 27 && days < 30) return "4 weeks";
  if (days < 30) return `${days} days`;
  if (days >= 30 && months < 12) {
    return `${months} month${months === 1 ? "" : "s"}`;
  }

  // For over a year
  const years = Math.floor(months / 12);
  const remMonths = months % 12;
  const parts = [];
  if (years) parts.push(`${years} year${years > 1 ? "s" : ""}`);
  if (remMonths) parts.push(`${remMonths} month${remMonths > 1 ? "s" : ""}`);
  return parts.length ? parts.join(" • ") : "Less than 1 month";
}
