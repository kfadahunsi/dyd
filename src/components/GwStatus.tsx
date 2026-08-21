import { getGwStatus, getHomeStats } from "@/api/api-functions"
import type { GwStatus, HomeStatsList } from "@/lib/types"
import { useEffect, useState } from "react"
import { Badge } from "./ui/badge"
import { Card, CardContent } from "./ui/card"
import { Skeleton } from "./ui/skeleton"
import { ErrorCard } from "./ui/error-card"
import { Trophy, TrendingDown, Activity, Clock, ArrowRightLeft } from "lucide-react"

export default function GwStatus() {
  const [status, setStatus] = useState<GwStatus | null>(null)
  const [homeData, setHomeData] = useState<HomeStatsList | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadGwData() {
    try {
      setLoading(true)
      setError(null)
      const [gwStatus, homeStats] = await Promise.all([
        getGwStatus(),
        getHomeStats(),
      ])
      setStatus(gwStatus)
      setHomeData(homeStats)
    } catch (err) {
      console.error("Error fetching GW info:", err)
      setError("Unable to connect to FPL API. The servers might be updating or in preseason maintenance.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadGwData()
  }, [])

  if (loading) {
    return (
      <div className="w-full space-y-4">
        <Skeleton className="h-14 w-full rounded-2xl" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
          <Skeleton className="h-24 rounded-xl" />
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="w-full">
        <ErrorCard
          title="Gameweek Stats Unavailable"
          message={error}
          onRetry={loadGwData}
          isRetrying={loading}
        />
      </div>
    )
  }

  if (!status || !homeData) {
    return null
  }

  const hasPoints = !homeData.every((gwData) => gwData.event_points === 0)
  const topScorer = homeData[0]
  const bottomScorer = homeData[homeData.length - 1]
  const avgPoints = (
    homeData.reduce((acc, data) => acc + data.event_points, 0) / homeData.length
  ).toFixed(1)

  return (
    <div className="w-full space-y-4">
      {/* Gameweek header and status badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-2xl bg-card border border-border shadow-xs">
        <div className="flex items-center gap-2.5">
          <Clock className="size-5 text-primary" />
          <h3 className="text-lg font-bold text-foreground">
            Gameweek {status.current_event}
          </h3>
          <Badge
            variant={status.current_event_finished ? "default" : "secondary"}
            className="text-xs"
          >
            {status.current_event_finished ? "Finished" : "In Progress"}
          </Badge>
        </div>

        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border/60">
            <ArrowRightLeft className="size-3.5 text-muted-foreground" />
            <span className="text-muted-foreground">Trades:</span>
            <span className={status.trades_time_for_approval ? "text-emerald-500 font-semibold" : "text-muted-foreground font-medium"}>
              {status.trades_time_for_approval ? "Open" : "Closed"}
            </span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted/60 border border-border/60">
            <span className="text-muted-foreground">Waivers:</span>
            <span className={status.waivers_processed ? "text-emerald-500 font-semibold" : "text-amber-500 font-semibold"}>
              {status.waivers_processed ? "Processed" : "Pending"}
            </span>
          </div>
        </div>
      </div>

      {/* Stats Cards Grid */}
      {hasPoints ? (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
          {/* Top Scorer */}
          <Card className="border-emerald-500/30 bg-linear-to-br from-emerald-500/10 via-card to-card hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                  <Trophy className="size-3.5" /> GW Top Scorer
                </span>
                <p className="font-bold text-foreground truncate max-w-[170px]" title={topScorer.name}>
                  {topScorer.name}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-emerald-600 dark:text-emerald-400">
                  {topScorer.event_points}
                </span>
                <span className="text-xs text-muted-foreground block">pts</span>
              </div>
            </CardContent>
          </Card>

          {/* Bottom Scorer */}
          <Card className="border-rose-500/30 bg-linear-to-br from-rose-500/10 via-card to-card hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-rose-600 dark:text-rose-400 uppercase tracking-wider flex items-center gap-1">
                  <TrendingDown className="size-3.5" /> GW Lowest
                </span>
                <p className="font-bold text-foreground truncate max-w-[170px]" title={bottomScorer.name}>
                  {bottomScorer.name}
                </p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-rose-600 dark:text-rose-400">
                  {bottomScorer.event_points}
                </span>
                <span className="text-xs text-muted-foreground block">pts</span>
              </div>
            </CardContent>
          </Card>

          {/* League Average */}
          <Card className="border-blue-500/30 bg-linear-to-br from-blue-500/10 via-card to-card hover:shadow-md transition-shadow">
            <CardContent className="p-4 flex items-center justify-between">
              <div className="space-y-1">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider flex items-center gap-1">
                  <Activity className="size-3.5" /> GW Average
                </span>
                <p className="font-bold text-foreground">League Mean</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400">
                  {avgPoints}
                </span>
                <span className="text-xs text-muted-foreground block">pts</span>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <div className="text-center py-4 px-4 rounded-xl bg-card border border-border text-muted-foreground text-sm">
          ⏳ Gameweek matches haven't started or points are being calculated.
        </div>
      )}
    </div>
  )
}
