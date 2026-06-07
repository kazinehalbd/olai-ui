import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section id="product" className="relative overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-20 md:py-28">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Introducing Olai 2.0
          </span>

          <h1 className="mt-6 text-balance text-4xl font-semibold tracking-tight md:text-6xl">
            AI building blocks for modern teams
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            Olai is the design-forward AI workspace that helps your team write, build, and ship
            faster with intelligent automations that fit right into your workflow.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <Link
              href="#start"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Start for free
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#demo"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Book a demo
            </Link>
          </div>

          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Free for the first 14 days.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl rounded-xl border border-border bg-card p-2 shadow-sm">
          <div className="rounded-lg bg-secondary p-4">
            <div className="flex items-center gap-1.5 pb-3">
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
              <span className="h-3 w-3 rounded-full bg-muted-foreground/30" />
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {["Drafts", "In review", "Shipped"].map((col) => (
                <div key={col} className="rounded-lg bg-background p-3">
                  <p className="mb-3 text-xs font-medium text-muted-foreground">{col}</p>
                  <div className="flex flex-col gap-2">
                    <div className="h-8 rounded-md bg-secondary" />
                    <div className="h-8 rounded-md bg-secondary" />
                    <div className="h-8 w-2/3 rounded-md bg-secondary" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
