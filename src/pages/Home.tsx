import DisplayTeam from "@/components/DisplayTeam";
import GwStatus from "@/components/GwStatus";



//console.log(import.meta.env.VITE_API_BASE_URL)

export default function Home() {
  return (
    <div className="flex flex-col w-full min-h-full items-center px-4 py-6 sm:px-6 max-w-7xl mx-auto space-y-8">
      <div className="w-full text-center py-6 px-4 rounded-3xl bg-linear-to-r from-blue-600/15 via-primary/10 to-indigo-600/15 border border-primary/20 backdrop-blur-xs shadow-sm">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-foreground">
          ⚽ Home of the greatest FPL draft league in the world
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Live Gameweek stats, standings, lineups, and cup fixtures
        </p>
      </div>
      <GwStatus />
      <DisplayTeam />
    </div>
  )
}
