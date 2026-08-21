
export default function TeamBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="size-14 sm:size-16 flex items-center justify-center overflow-hidden rounded-xl bg-card ring-1 ring-border shadow-2xs shrink-0 p-1">
      <img className="object-contain w-full h-full" src={src} alt={alt} />
    </div>
  )
}
