import { getFixtures } from "@/api/api-functions"
import { fixturesRemaining, getErrorMessage, groupFixtures } from "@/lib/functions"
import type { FixtureList } from "@/lib/types"
import { useEffect, useState } from "react"
import { Spinner } from "./ui/spinner"
import { ErrorCard } from "./ui/error-card"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Calendar, CheckCircle2 } from "lucide-react"

export default function FixturesAndResults() {
  const [fixtures, setFixtures] = useState<Record<string, FixtureList> | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadFixtures() {
    try {
      setLoading(true)
      setError(null)
      const leagueFixtures = await getFixtures()
      const groupedFixtures = groupFixtures(leagueFixtures)
      setFixtures(groupedFixtures)
    } catch (err) {
      console.error("Error fetching fixtures:", err)
      setError(getErrorMessage(err, "Unable to load cup fixtures. Please check your connection or retry in a moment."))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadFixtures()
  }, [])

  if (loading) {
    return (
      <div className="w-full flex justify-center py-8">
        <Spinner className="size-8 text-primary" />
      </div>
    )
  }

  if (error) {
    return (
      <ErrorCard
        title="Fixtures Unavailable"
        message={error}
        onRetry={loadFixtures}
        isRetrying={loading}
      />
    )
  }

  if (!fixtures) {
    return null
  }

  const hasRemaining = fixturesRemaining(fixtures)

  // Fixtures that are pending
  const pendingWeeks = Object.entries(fixtures).filter(([, list]) =>
    list.some((f) => f.home_score === null)
  )

  // Fixtures that are completed
  const completedWeeks = Object.entries(fixtures).filter(([, list]) =>
    list.some((f) => f.home_score !== null)
  )

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
      {/* Upcoming Fixtures */}
      <Card className="border border-border bg-card shadow-sm overflow-hidden">
        <CardHeader className="pb-3 border-b border-border bg-muted/20">
          <div className="flex items-center gap-2">
            <Calendar className="size-4 text-primary" />
            <CardTitle className="text-base font-bold text-foreground">
              Upcoming Fixtures
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {hasRemaining && pendingWeeks.length > 0 ? (
            pendingWeeks.map(([weekNo, matchArray]) => (
              <div key={`fixture-week-${weekNo}`} className="space-y-2">
                <div className="flex items-center justify-between pb-1">
                  <Badge variant="outline" className="text-xs font-mono font-semibold">
                    Week {weekNo}
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  {matchArray
                    .filter((f) => f.home_score === null)
                    .map((fixture) => (
                      <div
                        key={`${fixture.home}-${fixture.away}`}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-background/60 border border-border/60 text-xs sm:text-sm"
                      >
                        <span className="font-semibold text-foreground flex-1 text-right truncate pr-2" title={fixture.home}>
                          {fixture.home}
                        </span>
                        <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-muted font-bold text-xs text-muted-foreground">
                          vs
                        </span>
                        <span className="font-semibold text-foreground flex-1 text-left truncate pl-2" title={fixture.away}>
                          {fixture.away}
                        </span>
                      </div>
                    ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-sm text-muted-foreground">
              All cup group fixtures have concluded.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Match Results */}
      <Card className="border border-border bg-card shadow-sm overflow-hidden">
        <CardHeader className="pb-3 border-b border-border bg-muted/20">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="size-4 text-emerald-500" />
            <CardTitle className="text-base font-bold text-foreground">
              Match Results
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          {completedWeeks.length > 0 ? (
            completedWeeks.map(([weekNo, matchArray]) => (
              <div key={`result-week-${weekNo}`} className="space-y-2">
                <div className="flex items-center justify-between pb-1">
                  <Badge variant="secondary" className="text-xs font-mono font-semibold">
                    Week {weekNo}
                  </Badge>
                </div>
                <div className="space-y-1.5">
                  {matchArray
                    .filter((f) => f.home_score !== null)
                    .map((fixture) => {
                      const homeWon = (fixture.home_score ?? 0) > (fixture.away_score ?? 0)
                      const awayWon = (fixture.away_score ?? 0) > (fixture.home_score ?? 0)

                      return (
                        <div
                          key={`${fixture.home}-${fixture.away}`}
                          className="flex items-center justify-between p-2.5 rounded-xl bg-background/60 border border-border/60 text-xs sm:text-sm"
                        >
                          <span
                            className={`flex-1 text-right truncate pr-2 ${
                              homeWon
                                ? "font-bold text-foreground"
                                : "font-medium text-muted-foreground"
                            }`}
                            title={fixture.home}
                          >
                            {fixture.home}
                          </span>
                          <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-muted font-mono font-bold text-xs text-foreground">
                            {fixture.home_score} - {fixture.away_score}
                          </span>
                          <span
                            className={`flex-1 text-left truncate pl-2 ${
                              awayWon
                                ? "font-bold text-foreground"
                                : "font-medium text-muted-foreground"
                            }`}
                            title={fixture.away}
                          >
                            {fixture.away}
                          </span>
                        </div>
                      )
                    })}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-6 text-sm text-muted-foreground">
              No results played yet. Results will appear once cup matchdays start.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
