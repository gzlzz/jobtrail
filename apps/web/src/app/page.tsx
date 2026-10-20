const columns = [
  { title: "Guardadas", items: ["Initech · Backend Junior"] },
  { title: "Enviadas", items: ["Acme · Junior Full-stack"] },
  { title: "Entrevista", items: ["Globex · Frontend Trainee"] },
  { title: "Oferta", items: [] },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">jobtrail</h1>
      <p className="mt-3 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
        Todas tus candidaturas en un solo tablero. Guarda ofertas de LinkedIn,
        InfoJobs o Indeed con un clic y no vuelvas a olvidar un seguimiento.
      </p>

      <section className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {columns.map((col) => (
          <div key={col.title} className="rounded-xl border border-zinc-200 p-4 dark:border-zinc-800">
            <h2 className="text-sm font-semibold uppercase text-zinc-500">{col.title}</h2>
            <ul className="mt-3 space-y-2">
              {col.items.map((item) => (
                <li key={item} className="rounded-lg bg-zinc-100 px-3 py-2 text-sm dark:bg-zinc-900">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    </main>
  );
}
