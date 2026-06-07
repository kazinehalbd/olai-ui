import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section id="start" className="mx-auto max-w-6xl px-4 pb-20 md:pb-28">
      <div className="rounded-2xl border border-border bg-primary px-6 py-14 text-center text-primary-foreground md:px-12">
        <h2 className="mx-auto max-w-2xl text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Ready to build faster with Olai?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/80">
          Join thousands of teams shipping their best work with an AI workspace built for the way
          you actually work.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="#signup"
            className="inline-flex items-center gap-2 rounded-md bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
          >
            Start for free
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/30 px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            Talk to sales
          </Link>
        </div>
      </div>
    </section>
  )
}
