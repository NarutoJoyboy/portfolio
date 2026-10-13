import Image from "next/image";

/**
 * The hero object is the work itself. Two shipped screens in browser frames,
 * angled in CSS 3D — the headline says SHIPPED, so this shows something that
 * actually was. Pure CSS and next/image: no canvas, no WebGL, no client JS.
 */

const SHOTS = [
  {
    src: "/projects/onlymaple.png",
    alt: "OnlyMaple — a directory for verifying Canadian-owned businesses",
    // sits behind and higher, reading as further away
    wrapper: "left-0 top-[6%] w-[76%]",
    transform: "rotateY(-22deg) rotateX(9deg) translateZ(-60px)",
    opacity: "opacity-70",
  },
  {
    src: "/projects/americar.jpg",
    alt: "Americar — a vehicle maintenance and service-provider platform",
    wrapper: "right-0 bottom-[6%] w-[82%]",
    transform: "rotateY(-22deg) rotateX(9deg) translateZ(40px)",
    opacity: "opacity-100",
  },
];

const frame =
  "border-[color-mix(in_srgb,var(--foreground)_14%,transparent)]";

export default function WorkPreview({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative h-full w-full" style={{ perspective: "1600px" }}>
        <div
          className="pointer-events-none absolute inset-[-18%] rounded-full"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent), transparent 65%)",
          }}
        />
        {SHOTS.map((shot) => (
          <figure
            key={shot.src}
            className={`absolute ${shot.wrapper} ${shot.opacity} overflow-hidden rounded-xl border bg-surface shadow-[0_30px_60px_-15px_rgba(0,0,0,0.7)] ${frame}`}
            style={{ transform: shot.transform }}
          >
            <div className={`flex items-center gap-1.5 border-b px-3 py-2 ${frame}`}>
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="h-1.5 w-1.5 rounded-full bg-[color-mix(in_srgb,var(--foreground)_22%,transparent)]"
                />
              ))}
            </div>
            <div className="relative aspect-video">
              <Image
                src={shot.src}
                alt={shot.alt}
                fill
                sizes="(max-width: 1024px) 0px, 40vw"
                className="object-cover object-top"
              />
            </div>
          </figure>
        ))}
      </div>
    </div>
  );
}
