
export default function TeamBadge({src, alt}: {src: string, alt: string}) {
  return (
    <div className="w-30 h-30 flex items-center justify-center overflow-hidden">
        <img className="object-contain w-full h-full" src={src} alt={alt}/>
    </div>
  )
}
