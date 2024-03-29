import type { Job } from "@/@types/job";
import { START_DATE } from "@/constants";
import format from "date-fns/format";
import formatDuration from "date-fns/formatDuration";
import intervalToDuration from "date-fns/intervalToDuration";

export function formatJobDate(dates: Job["dates"]) {
  const PATTERN = "MMM yyyy";
  const { start, end } = dates;
  const durationDates = {
    start: new Date(start),
    end: end ? new Date(end) : new Date(),
  };
  const startText = format(durationDates.start, PATTERN);
  const endText = end ? format(durationDates.end, PATTERN) : "present";
  const durationText = formatDuration(intervalToDuration(durationDates), {
    format: ["years", "months"],
    delimiter: ", ",
  });

  return `${startText} - ${endText} (${durationText})`;
}

export const experienceDuration = formatDuration(
  intervalToDuration({ start: new Date(START_DATE), end: new Date() }),
  { format: ["years"] },
);
