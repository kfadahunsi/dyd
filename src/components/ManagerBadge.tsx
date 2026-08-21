export default function ManagerBadge({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="size-20 sm:size-24 flex items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/20 bg-muted shadow-sm shrink-0">
      <img className="object-cover w-full h-full" src={src} alt={alt} />
    </div>
  )
}