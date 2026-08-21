
import { getTable } from "@/api/api-functions"
import { Skeleton } from "@/components/ui/skeleton"
import { ErrorCard } from "@/components/ui/error-card"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { TableObj } from "@/lib/types"
import { ArrowDown, ArrowUp, Minus, Trophy } from "lucide-react"
import { useEffect, useState } from "react"

export default function Table() {
  const [table, setTable] = useState<TableObj | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function loadTable() {
    try {
      setLoading(true)
      setError(null)
      const fetchedTable: TableObj = await getTable()
      setTable(fetchedTable)
    } catch (err) {
      console.error("Error loading league table:", err)
      setError("Unable to load the current league table. Please try again or check back shortly.")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTable()
  }, [])

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-6 sm:px-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Trophy className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            League Standings
          </h2>
        </div>
        <span className="text-xs text-muted-foreground">
          Official FPL Draft Table
        </span>
      </div>

      {loading ? (
        <Card className="border border-border shadow-sm overflow-hidden bg-card">
          <CardHeader className="pb-3 border-b border-border bg-muted/30">
            <Skeleton className="h-4 w-32" />
          </CardHeader>
          <CardContent className="p-4 space-y-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-10 w-full rounded-lg" />
            ))}
          </CardContent>
        </Card>
      ) : error ? (
        <ErrorCard
          title="League Standings Unavailable"
          message={error}
          onRetry={loadTable}
          isRetrying={loading}
        />
      ) : table ? (
        <Card className="border border-border shadow-sm overflow-hidden bg-card">
          <CardHeader className="pb-3 border-b border-border bg-muted/30">
            <CardTitle className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">
              2026/27 Season
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-xs font-semibold text-muted-foreground uppercase tracking-wider text-left">
                    <th className="py-3 px-4 text-center w-20">Rank</th>
                    <th className="py-3 px-4">Team</th>
                    <th className="py-3 px-4 text-center w-24">GW Pts</th>
                    <th className="py-3 px-4 text-right w-28">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {Object.entries(table)
                    .sort(([, a], [, b]) => a.rank - b.rank)
                    .map(([teamName, teamData], index) => {
                      const isLeader = teamData.rank === 1
                      const isLast = index === Object.keys(table).length - 1
                      const movedUp = teamData.last_rank > teamData.rank
                      const movedDown = teamData.last_rank < teamData.rank

                      return (
                        <tr
                          key={teamName}
                          className={`hover:bg-muted/40 transition-colors ${
                            isLeader
                              ? "bg-amber-500/5"
                              : isLast
                              ? "bg-rose-500/5"
                              : ""
                          }`}
                        >
                          {/* Rank with movement icon */}
                          <td className="py-3.5 px-4 text-center">
                            <div className="inline-flex items-center gap-1.5 justify-center">
                              <span
                                className={`inline-flex items-center justify-center size-6 rounded-full text-xs font-bold ${
                                  isLeader
                                    ? "bg-amber-500 text-black shadow-xs"
                                    : teamData.rank === 2
                                    ? "bg-slate-300 text-slate-900"
                                    : teamData.rank === 3
                                    ? "bg-amber-700 text-amber-100"
                                    : "bg-muted text-muted-foreground"
                                }`}
                              >
                                {teamData.rank}
                              </span>
                              {movedUp && (
                                <ArrowUp className="size-3.5 text-emerald-500 shrink-0" />
                              )}
                              {movedDown && (
                                <ArrowDown className="size-3.5 text-rose-500 shrink-0" />
                              )}
                              {!movedUp && !movedDown && (
                                <Minus className="size-3.5 text-muted-foreground/50 shrink-0" />
                              )}
                            </div>
                          </td>

                          {/* Team Name */}
                          <td className="py-3.5 px-4">
                            <span className="font-semibold text-foreground">
                              {teamName}
                            </span>
                          </td>

                          {/* Gameweek Total */}
                          <td className="py-3.5 px-4 text-center font-mono text-muted-foreground">
                            {teamData.event_total ?? "-"}
                          </td>

                          {/* Overall Total Points */}
                          <td className="py-3.5 px-4 text-right">
                            <span className="font-bold text-foreground text-base font-mono">
                              {teamData.total}
                            </span>
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
        <div className="text-center py-12 text-muted-foreground text-sm">
          Unable to load league table data.
        </div>
      )}
    </div>
  )
}









