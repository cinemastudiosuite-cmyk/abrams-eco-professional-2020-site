import type { IconName } from "../lib/content";

const common = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  strokeWidth: 1.8,
};

export function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 24 24"
      {...common}
    >
      {name === "building" && (
        <>
          <path d="M4 21V5.8c0-.8.6-1.4 1.4-1.4h8.2c.8 0 1.4.6 1.4 1.4V21" />
          <path d="M15 9.5h3.6c.8 0 1.4.6 1.4 1.4V21" />
          <path d="M8 8h3M8 12h3M8 16h3M4 21h17" />
        </>
      )}
      {name === "chart" && (
        <>
          <path d="M4 19.5h16" />
          <path d="M7 16V9M12 16V5M17 16v-4" />
          <path d="M5 5.5h3M10.5 10.5h3M15.5 7.5h3" />
        </>
      )}
      {name === "tools" && (
        <>
          <path d="M14.5 6.5 17 4l3 3-2.5 2.5" />
          <path d="m3.8 20.2 7.8-7.8" />
          <path d="M8.5 5.3a4.3 4.3 0 0 0 5.7 5.7l5.2 5.2a2 2 0 0 1-2.8 2.8l-5.2-5.2a4.3 4.3 0 0 1-5.7-5.7" />
        </>
      )}
      {name === "alarm" && (
        <>
          <circle cx="12" cy="13" r="7" />
          <path d="M12 9v4l2.6 2.2" />
          <path d="M5 4.5 2.8 6.7M19 4.5l2.2 2.2M7.5 20l-1 1.5M16.5 20l1 1.5" />
        </>
      )}
      {name === "sparkles" && (
        <>
          <path d="M12 3.5 13.8 8l4.7 1.8-4.7 1.8L12 16l-1.8-4.4-4.7-1.8L10.2 8 12 3.5Z" />
          <path d="m18.5 14.5.8 2 2.2.8-2.2.8-.8 2-.8-2-2.2-.8 2.2-.8.8-2Z" />
          <path d="m5.5 15 .5 1.2 1.2.5-1.2.5-.5 1.3-.5-1.3-1.2-.5 1.2-.5.5-1.2Z" />
        </>
      )}
      {name === "users" && (
        <>
          <path d="M16 20v-1.4c0-1.9-1.8-3.4-4-3.4s-4 1.5-4 3.4V20" />
          <circle cx="12" cy="9" r="3" />
          <path d="M4.5 19v-1c0-1.5 1.2-2.7 2.9-3.2" />
          <path d="M19.5 19v-1c0-1.5-1.2-2.7-2.9-3.2" />
          <path d="M6.8 11.2a2.4 2.4 0 0 1 0-4.4" />
          <path d="M17.2 11.2a2.4 2.4 0 0 0 0-4.4" />
        </>
      )}
      {name === "leaf" && (
        <>
          <path d="M5 19c8 0 14-6 14-14v-.5h-.5C10.5 4.5 5 10 5 18.2V19Z" />
          <path d="M5 19 16 8" />
        </>
      )}
      {name === "clock" && (
        <>
          <circle cx="12" cy="12" r="8" />
          <path d="M12 7.5V12l3 2" />
        </>
      )}
      {name === "shield" && (
        <>
          <path d="M12 21s7-3.4 7-10V5.8L12 3 5 5.8V11c0 6.6 7 10 7 10Z" />
          <path d="m9 12 2 2 4-4" />
        </>
      )}
      {name === "phone" && (
        <path d="M7.2 4.5 9.3 4c.7-.2 1.4.2 1.6.9l.8 2.5c.2.6 0 1.2-.5 1.6l-1.3 1a10.5 10.5 0 0 0 4.1 4.1l1-1.3c.4-.5 1-.7 1.6-.5l2.5.8c.7.2 1.1.9.9 1.6l-.5 2.1c-.2.8-.9 1.3-1.7 1.3A13.8 13.8 0 0 1 6 6.2c0-.8.5-1.5 1.2-1.7Z" />
      )}
      {name === "mail" && (
        <>
          <rect x="3.5" y="5.5" width="17" height="13" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </>
      )}
      {name === "map" && (
        <>
          <path d="M12 21s6-5.2 6-11a6 6 0 1 0-12 0c0 5.8 6 11 6 11Z" />
          <circle cx="12" cy="10" r="2.2" />
        </>
      )}
      {name === "check" && <path d="m5 12.5 4 4L19 6.5" />}
      {name === "file" && (
        <>
          <path d="M6 3.8h7l5 5V20a1.2 1.2 0 0 1-1.2 1.2H6A1.2 1.2 0 0 1 4.8 20V5A1.2 1.2 0 0 1 6 3.8Z" />
          <path d="M13 4v5h5" />
          <path d="M8 13h8M8 16.5h6" />
        </>
      )}
      {name === "menu" && (
        <>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </>
      )}
      {name === "x" && (
        <>
          <path d="M6 6l12 12M18 6 6 18" />
        </>
      )}
      {name === "arrowUp" && (
        <>
          <path d="M12 19V5" />
          <path d="m6.5 10.5 5.5-5.5 5.5 5.5" />
        </>
      )}
      {name === "sun" && (
        <>
          <circle cx="12" cy="12" r="4.2" />
          <path d="M12 3v2.4M12 18.6V21M4.4 4.4l1.7 1.7M17.9 17.9l1.7 1.7M3 12h2.4M18.6 12H21M4.4 19.6l1.7-1.7M17.9 6.1l1.7-1.7" />
        </>
      )}
      {name === "handshake" && (
        <>
          <path d="M3.5 12.5 7 9l3 2.3c.7.5.8 1.5.2 2.2l-.3.3a1.5 1.5 0 0 1-2.1.1L6 12.4" />
          <path d="M20.5 12.5 17 9l-3 2.3c-.7.5-.8 1.5-.2 2.2l.3.3c.6.6 1.5.6 2.1.1L18 12.4" />
          <path d="M9 10.5 12 13l3-2.5" />
          <path d="m3.5 12.5 2 3.3c.4.6 1.1.9 1.8.7l1-.3M20.5 12.5l-2 3.3c-.4.6-1.1.9-1.8.7l-1-.3" />
        </>
      )}
    </svg>
  );
}
