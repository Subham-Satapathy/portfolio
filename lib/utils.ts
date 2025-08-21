import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function calculateExperienceDuration(startDate: Date): string {
  const now = new Date();
  const start = new Date(startDate);
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  
  // Adjust for negative months
  if (months < 0) {
    years--;
    months += 12;
  }
  
  // Handle day of month
  if (now.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }
  
  if (years === 0) {
    return months === 1 ? "1 month" : `${months} months`;
  } else if (years === 1) {
    return months === 0 ? "1 year" : months === 1 ? "1 year, 1 month" : `1 year, ${months} months`;
  } else {
    if (months === 0) {
      return `${years} years`;
    } else if (months === 1) {
      return `${years} years, 1 month`;
    } else {
      return `${years} years, ${months} months`;
    }
  }
} 