import { getFinals, getSemiResults, getSemis, getWinner } from "@/api/api-functions"
import { type Finals, type SemiResults, type Semis, type Winner } from "@/lib/types"
import { useEffect, useState } from "react"
import { Spinner } from "./ui/spinner"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Trophy, Swords, Crown } from "lucide-react"

export default function Knockout() {
  const [loading, setLoading] = useState(true)
  const [semiFinals, setSemiFinals] = useState<Semis | null>(null)
  const [semiResults, setSemiResults] = useState<SemiResults | null>(null)
  const [finalists, setFinalists] = useState<Finals | null>(null)
  const [champion, setChampion] = useState<Winner | null>(null)

  const date = new Date()
  const year = date.getFullYear()

  useEffect(() => {
    async function loadData() {
      try {
        setLoading(true)
        const [semis, sResults, finals, winner] = await Promise.all([
          getSemis(),
          getSemiResults(),
          getFinals(),
          getWinner(),
        ])

        setSemiFinals(semis)
        setSemiResults(sResults)
        setFinalists(finals)
        setChampion(winner)
      } catch (err) {
        console.error("Error loading knockout data:", err)
      } finally {
        setLoading(false)
      }
    }
    loadData()
  }, [])

  if (loading) {
    return (
      <div className="w-full flex justify-center py-8">
        <Spinner className="size-8 text-primary" />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <Swords className="size-5 text-primary" />
        <h3 className="text-lg font-bold text-foreground">Knockout Rounds</h3>
      </div>

      {/* Champion Banner if decided */}
      {champion && (
        <Card className="border-amber-500/40 bg-linear-to-r from-amber-500/20 via-card to-amber-500/20 shadow-md">
          <CardContent className="p-6 text-center space-y-2">
            <Crown className="size-10 text-amber-500 mx-auto animate-bounce" />
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">
              {champion.name}
            </h2>
            <p className="text-sm font-semibold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
              🏆 {year - 1}/{year} DYD Cup Champions ({champion.score} pts in Final)
            </p>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Semi-Finals Card */}
        <Card className="border border-border bg-card shadow-sm overflow-hidden">
          <CardHeader className="pb-3 border-b border-border bg-muted/20 flex flex-row items-center justify-between">
            <CardTitle className="text-base font-bold text-foreground">
              Semi-Finals
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Gameweek 37
            </Badge>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {semiResults ? (
              Object.entries(semiResults).map(([semiId, semiResult]) => (
                <div
                  key={semiId}
                  className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border/60 text-xs sm:text-sm"
                >
                  <span
                    className={`flex-1 text-right truncate pr-2 ${
                      semiResult.home_score > semiResult.away_score
                        ? "font-bold text-foreground"
                        : "text-muted-foreground"
                    }`}
                    title={semiResult.home}
                  >
                    {semiResult.home}
                  </span>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-muted font-mono font-bold text-xs text-foreground">
                    {semiResult.home_score} - {semiResult.away_score}
                  </span>
                  <span
                    className={`flex-1 text-left truncate pl-2 ${
                      semiResult.away_score > semiResult.home_score
                        ? "font-bold text-foreground"
                        : "text-muted-foreground"
                    }`}
                    title={semiResult.away}
                  >
                    {semiResult.away}
                  </span>
                </div>
              ))
            ) : semiFinals ? (
              Object.entries(semiFinals).map(([semiId, semifinal]) => (
                <div
                  key={semiId}
                  className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border/60 text-xs sm:text-sm"
                >
                  <span
                    className="font-semibold text-foreground flex-1 text-right truncate pr-2"
                    title={semifinal.home}
                  >
                    {semifinal.home}
                  </span>
                  <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-muted font-bold text-xs text-muted-foreground">
                    vs
                  </span>
                  <span
                    className="font-semibold text-foreground flex-1 text-left truncate pl-2"
                    title={semifinal.away}
                  >
                    {semifinal.away}
                  </span>
                </div>
              ))
            ) : (
              <div className="text-center py-6 text-xs sm:text-sm text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground">
                  Matchups decided at the end of Group Stage:
                </p>
                <p>SF1: 1st Place vs 4th Place</p>
                <p>SF2: 2nd Place vs 3rd Place</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Finals Card */}
        <Card className="border border-border bg-card shadow-sm overflow-hidden">
          <CardHeader className="pb-3 border-b border-border bg-muted/20 flex flex-row items-center justify-between">
            <CardTitle className="text-base font-bold text-foreground">
              Grand Final
            </CardTitle>
            <Badge variant="outline" className="text-xs">
              Gameweek 38
            </Badge>
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {finalists && finalists.home.score !== null ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border/60 text-xs sm:text-sm">
                <span
                  className={`flex-1 text-right truncate pr-2 ${
                    (finalists.home.score ?? 0) > (finalists.away.score ?? 0)
                      ? "font-bold text-foreground"
                      : "text-muted-foreground"
                  }`}
                  title={finalists.home.name}
                >
                  {finalists.home.name}
                </span>
                <span className="shrink-0 px-2.5 py-0.5 rounded-md bg-muted font-mono font-bold text-xs text-foreground">
                  {finalists.home.score} - {finalists.away.score}
                </span>
                <span
                  className={`flex-1 text-left truncate pl-2 ${
                    (finalists.away.score ?? 0) > (finalists.home.score ?? 0)
                      ? "font-bold text-foreground"
                      : "text-muted-foreground"
                  }`}
                  title={finalists.away.name}
                >
                  {finalists.away.name}
                </span>
              </div>
            ) : finalists ? (
              <div className="flex items-center justify-between p-3 rounded-xl bg-background/60 border border-border/60 text-xs sm:text-sm">
                <span
                  className="font-semibold text-foreground flex-1 text-right truncate pr-2"
                  title={finalists.home.name}
                >
                  {finalists.home.name}
                </span>
                <span className="shrink-0 px-2.5 py-0.5 rounded-full bg-muted font-bold text-xs text-muted-foreground">
                  vs
                </span>
                <span
                  className="font-semibold text-foreground flex-1 text-left truncate pl-2"
                  title={finalists.away.name}
                >
                  {finalists.away.name}
                </span>
              </div>
            ) : (
              <div className="text-center py-6 text-xs sm:text-sm text-muted-foreground space-y-1">
                <Trophy className="size-6 text-amber-500/50 mx-auto mb-2" />
                <p className="font-semibold text-foreground">
                  Winner SF1 vs Winner SF2
                </p>
                <p className="text-xs">Played in the final Gameweek of the season</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
