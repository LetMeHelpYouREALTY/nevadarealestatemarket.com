import { HeadingPhoto } from "@/components/sections/SectionImage";

type SectionHeadingProps = {
  as?: "h2" | "h3";
  children: string;
  className?: string;
  photo?: boolean;
  photoClassName?: string;
};

/**
 * H2/H3 plus heading-matched photography (Cloudflare Images when configured).
 */
export function SectionHeading({
  as = "h2",
  children,
  className = "",
  photo = true,
  photoClassName,
}: SectionHeadingProps) {
  const Tag = as;
  return (
    <>
      <Tag className={className}>{children}</Tag>
      {photo ? (
        <HeadingPhoto heading={children} className={photoClassName} />
      ) : null}
    </>
  );
}
