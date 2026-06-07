const companies = ["Northwind", "Acme Corp", "Globex", "Initech", "Umbra", "Soylent"]

export function LogoCloud() {
  return (
    <section className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <p className="text-center text-sm text-muted-foreground">
          Trusted by fast-moving teams around the world
        </p>
        <div className="mt-6 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
          {companies.map((name) => (
            <div
              key={name}
              className="flex items-center justify-center text-base font-semibold tracking-tight text-muted-foreground/70"
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
