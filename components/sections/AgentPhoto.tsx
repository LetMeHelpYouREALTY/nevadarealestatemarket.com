import Image from "next/image";

type AgentPhotoProps = {
  /** Which portrait variant to show */
  variant?: "primary" | "on-call" | "portrait";
  alt?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  /** Aspect ratio container classes */
  frameClassName?: string;
};

const VARIANT_SRC = {
  primary: "/images/agent/dr-jan-duffy.jpg",
  "on-call": "/images/agent/dr-jan-duffy-on-call.jpg",
  portrait: "/images/agent/dr-jan-duffy-portrait.jpg",
} as const;

/**
 * Dr. Jan Duffy portrait for About, Contact, and agent-led sections.
 */
export function AgentPhoto({
  variant = "primary",
  alt = "Dr. Jan Duffy, REALTOR® — Berkshire Hathaway HomeServices Nevada Properties",
  className = "object-cover object-top",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 480px",
  frameClassName = "relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100",
}: AgentPhotoProps) {
  return (
    <div className={frameClassName}>
      <Image
        src={VARIANT_SRC[variant]}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={className}
      />
    </div>
  );
}
