import { Bot, Workflow, Shield, Zap, LineChart, Puzzle } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "Smart assistants",
    description:
      "Context-aware AI that understands your projects and drafts work alongside your team in real time.",
  },
  {
    icon: Workflow,
    title: "Automated workflows",
    description:
      "Build no-code automations that move tasks forward, route approvals, and cut busywork.",
  },
  {
    icon: LineChart,
    title: "Live insights",
    description:
      "Dashboards that surface what matters, with AI summaries that explain the why behind the numbers.",
  },
  {
    icon: Shield,
    title: "Enterprise security",
    description:
      "SOC 2 Type II, SSO, and granular permissions keep your data protected at every layer.",
  },
  {
    icon: Zap,
    title: "Blazing fast",
    description:
      "A snappy interface built for keyboard-first power users who never want to wait on a spinner.",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    description:
      "Connect the tools you already use with hundreds of native integrations and a flexible API.",
  },
]

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-20 md:py-28">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight md:text-4xl">
          Everything you need to ship with AI
        </h2>
        <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
          Olai brings your workflows, data, and team together in one intelligent workspace.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary">
              <feature.icon className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
