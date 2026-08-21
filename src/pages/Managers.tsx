import ManagerBadge from "@/components/ManagerBadge"
import TeamBadge from "@/components/TeamBadge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { managerList } from "@/data/lists"
import { Users, Calendar, ExternalLink } from "lucide-react"

export default function Managers() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-6 sm:px-6 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Users className="size-6 text-primary" />
          <h2 className="text-2xl font-bold tracking-tight text-foreground">
            League Managers
          </h2>
        </div>
        <span className="text-xs text-muted-foreground">
          {managerList.length} Active Managers
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {managerList.map((manager) => {
          return (
            <Card
              key={manager.name}
              className="border border-border shadow-xs hover:shadow-md transition-all bg-card overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Header with Manager info */}
                <CardHeader className="pb-3 border-b border-border/60 bg-muted/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <ManagerBadge
                        src={manager.managerImg}
                        alt={`${manager.name} profile`}
                      />
                      <div>
                        <CardTitle className="text-lg font-bold text-foreground">
                          {manager.name}
                        </CardTitle>
                        <CardDescription className="text-xs font-mono">
                          {manager.acronym}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline" className="font-mono text-xs">
                      {manager.teamAcronym}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="p-4 space-y-4">
                  {/* Current Club Section */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-muted/40 border border-border/60">
                    <div className="space-y-1">
                      <span className="text-[11px] font-semibold text-muted-foreground uppercase tracking-wider block">
                        Current Club
                      </span>
                      <p className="font-bold text-foreground text-sm">
                        {manager.club}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="size-3" /> Est. {manager.est}
                        </span>
                        {manager.twitter && (
                          <a
                            href={manager.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
                          >
                            Twitter <ExternalLink className="size-3" />
                          </a>
                        )}
                      </div>
                    </div>
                    <TeamBadge
                      src={manager.badgeImage}
                      alt={`${manager.name} badge`}
                    />
                  </div>

                  {/* Former Clubs / History */}
                  {manager.formerClubs.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        Manager Career History
                      </h4>
                      <div className="space-y-2 max-h-48 overflow-y-auto pr-1">
                        {manager.formerClubs.map((formerClub) => {
                          const isRelegated =
                            formerClub.status.toLowerCase() === "relegated"

                          return (
                            <div
                              key={`${formerClub.name}-${formerClub.est}`}
                              className="flex items-center justify-between p-2 rounded-lg bg-background/50 border border-border/50 text-xs"
                            >
                              <div className="space-y-0.5">
                                <p className="font-semibold text-foreground">
                                  {formerClub.name}
                                </p>
                                <span className="text-[11px] text-muted-foreground">
                                  Est. {formerClub.est} • {formerClub.reason}
                                </span>
                              </div>
                              <Badge
                                variant={isRelegated ? "destructive" : "secondary"}
                                className="text-[10px] uppercase font-semibold"
                              >
                                {formerClub.status}
                              </Badge>
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </CardContent>
              </div>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
