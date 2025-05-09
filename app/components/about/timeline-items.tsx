import Link from "next/link"

interface TimelineItemProps {
  position: string
  company: string
  companyLink: string
  time: string
  address: string
  work: string
}

export const ExperienceItem = ({ position, company, companyLink, time, address, work }: TimelineItemProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <TimelineIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <Link href={companyLink} target="_blank" className="capitalize text-primary dark:text-primary-dark">
            @{company}
          </Link>
        </h3>
        <span className="capitalize text-foreground/75 font-medium dark:text-background/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </div>
    </li>
  )
}

interface EducationItemProps {
  type: string
  time: string
  place: string
  info: string
}

export const EducationItem = ({ type, time, place, info }: EducationItemProps) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]">
      <TimelineIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">{type}</h3>
        <span className="capitalize text-foreground/75 font-medium dark:text-background/50 xs:text-sm">
          {time} | {place}
        </span>
        <p className="font-medium w-full md:text-sm">{info}</p>
      </div>
    </li>
  )
}

const TimelineIcon = () => {
  return (
    <figure className="stroke-foreground absolute left-0 dark:stroke-background">
      <svg
        className="-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]"
        width="75"
        height="75"
        viewBox="0 0 100 100"
      >
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="stroke-primary stroke-1 fill-none dark:stroke-primary-dark"
        ></circle>
        <circle
          cx="75"
          cy="50"
          r="20"
          pathLength="1"
          className="fill-background stroke-[5px] dark:fill-background"
          strokeDashoffset="0px"
          strokeDasharray="0px 1px"
        ></circle>
        <circle
          cx="75"
          cy="50"
          r="10"
          pathLength="1"
          className="animate-pulse stroke-1 fill-primary dark:fill-primary-dark"
        ></circle>
      </svg>
    </figure>
  )
}
