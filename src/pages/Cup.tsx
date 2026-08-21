import { getCupTable } from "@/api/api-functions"
import FixturesAndResults from "@/components/FixturesAndResults"
import Knockout from "@/components/Knockout"
import { Skeleton } from "@/components/ui/skeleton"
import { ErrorCard } from "@/components/ui/error-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { CupTable } from "@/lib/types"
import { Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export default function Cup() {
  const [cupTable, setCupTable] = useState<CupTable | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadCupTable() {
    try {
      setLoading(true)
      setError(null)
      const table = await getCupTable()
      setCupTable(table)
    } catch (err) {
      console.error("Error loading cup table:", err)
      setError("Unable to load cup group standings. Please try again or check back shortly.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadCupTable()
  }, [])

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Trophy className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            DYD Cup
          </h2>
        </div>
        <span className="text-xs text-muted-foreground">
          Top 4 Qualify for Semi-Finals
        </span>
      </div>

      {/* Standings Table Card */}
      <div>
        {loading ? (
          <Card className="border border-border shadow-sm overflow-hidden bg-card">
            <CardHeader className="pb-3 border-b border-border bg-muted/30">
              <Skeleton className="h-4 w-36" />
            </CardHeader>
            <CardContent className="p-4 space-y-3">
              {[...Array(6)].map((_, i) => (
                <Skeleton key={i} className="h-9 w-full rounded-lg" />
              ))}
            </CardContent>
          </Card>
        ) : error ? (
          <ErrorCard
            title="Cup Standings Unavailable"
            message={error}
            onRetry={loadCupTable}
            isRetrying={loading}
          />
        ) : cupTable ? (
          <Card className="border border-border shadow-sm overflow-hidden bg-card">
            <CardHeader className="pb-3 border-b border-border bg-muted/30 flex flex-row items-center justify-between">
              <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
                Group Stage Standings
              </CardTitle>
              <span className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">
                ● Top 4 Semi-Final Cutoff
              </span>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="border-b border-border bg-muted/40 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-left">
                      <th className="py-3 px-4 w-12 text-center">Pos</th>
                      <th className="py-3 px-4">Team</th>
                      <th className="py-3 px-3 text-center w-12">P</th>
                      <th className="py-3 px-3 text-center w-12">W</th>
                      <th className="py-3 px-3 text-center w-12">D</th>
                      <th className="py-3 px-3 text-center w-12">L</th>
                      <th className="py-3 px-3 text-center w-16">PF</th>
                      <th className="py-3 px-3 text-center w-16">PA</th>
                      <th className="py-3 px-4 text-right w-16">Pts</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {Object.entries(cupTable).map(([name, stats], index) => {
                      const isQualifying = index < 4

                      return (
                        <tr
                          key={name}
                          className={`hover:bg-muted/40 transition-colors ${
                            isQualifying
                              ? "bg-emerald-500/5 font-medium"
                              : ""
                          }`}
                        >
                          <td className="py-3 px-4 text-center">
                            <span
                              className={`inline-flex items-center justify-center size-5 rounded-full text-xs font-bold ${
                                isQualifying
                                  ? "bg-emerald-500/20 text-emerald-600 dark:text-emerald-400"
                                  : "text-muted-foreground"
                              }`}
                            >
                              {index + 1}
                            </span>
                          </td>
                          <td className="py-3 px-4 font-semibold text-foreground">
                            {name}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-muted-foreground">
                            {stats.played}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-foreground">
                            {stats.wins}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-muted-foreground">
                            {stats.draws}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-muted-foreground">
                            {stats.losses}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-muted-foreground">
                            {stats.points_for}
                          </td>
                          <td className="py-3 px-3 text-center font-mono text-muted-foreground">
                            {stats.points_against}
                          </td>
                          <td className="py-3 px-4 text-right font-mono font-bold text-foreground text-base">
                            {stats.league_points}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        ) : (
          <div className="text-center py-8 text-muted-foreground text-sm">
            Cup standings are currently unavailable.
          </div>
        )}
      </div>

      <FixturesAndResults />
      <Knockout />
    </div>
  )
}
