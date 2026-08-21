import { Card, CardContent } from "./card"
import { Button } from "./button"
import { AlertCircle, RefreshCw, Palmtree } from "lucide-react"

interface ErrorCardProps {
  title?: string
  message?: string
  onRetry?: () => void
  isRetrying?: boolean
  isOffseason?: boolean
  className?: string
}

export function ErrorCard({
  title,
  message,
  onRetry,
  isRetrying = false,
  isOffseason = false,
  className = "",
}: ErrorCardProps) {
  if (isOffseason) {
    return (
      <Card className={`border-amber-500/30 bg-amber-500/5 ${className}`}>
        <CardContent className="p-6 text-center space-y-3">
          <div className="size-12 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mx-auto">
            <Palmtree className="size-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-foreground">
              {title || "Summer Offseason Break"}
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
              {message ||
                "FPL Draft is currently offline for pre-season updates. Manager profiles and historic records remain available."}
            </p>
          </div>
          {onRetry && (
            <Button
              variant="outline"
              size="sm"
              onClick={onRetry}
              disabled={isRetrying}
              className="mt-2 text-xs"
            >
              <RefreshCw className={`size-3.5 mr-1.5 ${isRetrying ? "animate-spin" : ""}`} />
              {isRetrying ? "Checking..." : "Check Status"}
            </Button>
          )}
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className={`border-rose-500/30 bg-rose-500/5 ${className}`}>
      <CardContent className="p-6 text-center space-y-3">
        <div className="size-12 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mx-auto">
          <AlertCircle className="size-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-bold text-foreground">
            {title || "Unable to Load Data"}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground max-w-md mx-auto">
            {message ||
              "The FPL API or backend service is taking longer than usual to respond. Please try again in a moment."}
          </p>
        </div>
        {onRetry && (
          <Button
            variant="outline"
            size="sm"
            onClick={onRetry}
            disabled={isRetrying}
            className="mt-2 text-xs"
          >
            <RefreshCw className={`size-3.5 mr-1.5 ${isRetrying ? "animate-spin" : ""}`} />
            {isRetrying ? "Retrying..." : "Try Again"}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
