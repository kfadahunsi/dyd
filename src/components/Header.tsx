import { Link } from 'react-router'
import { ModeToggle } from './mode-toggle'

export default function Header() {
  return (
    <header className="w-full border-b border-border/40 bg-background/60 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-2.5 sm:px-6">
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src="/dydsmall.jpeg"
            alt="Delete Your Drafts Logo"
            className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl object-cover ring-1 ring-border shadow-xs group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
              DYD League
            </h1>
            <span className="text-xs text-muted-foreground font-medium hidden sm:inline">
              Delete Your Drafts FPL
            </span>
          </div>
        </Link>
        <div className="flex items-center gap-2">
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}