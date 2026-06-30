"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Dashboard Analytics",
    description: "Real-time data visualization with interactive charts and metrics.",
    tag: "Analytics",
    color: "from-zinc-700 to-zinc-900",
    bg: "bg-zinc-900/40",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured store with cart, checkout, and inventory management.",
    tag: "Commerce",
    color: "from-zinc-700 to-zinc-900",
    bg: "bg-zinc-900/40",
  },
  {
    title: "SaaS Landing Page",
    description: "High-converting landing page with animations and social proof.",
    tag: "Marketing",
    color: "from-zinc-700 to-zinc-900",
    bg: "bg-zinc-900/40",
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive banking UI with transaction history.",
    tag: "Finance",
    color: "from-zinc-700 to-zinc-900",
    bg: "bg-zinc-900/40",
  },
  {
    title: "AI Chat Interface",
    description: "Conversational UI with streaming responses and markdown support.",
    tag: "AI",
    color: "from-zinc-700 to-zinc-900",
    bg: "bg-zinc-900/40",
  },
  {
    title: "Portfolio Template",
    description: "Minimal and elegant portfolio with smooth page transitions.",
    tag: "Portfolio",
    color: "from-zinc-700 to-zinc-900",
    bg: "bg-zinc-900/40",
  },
];

export function ShowcaseSection() {
  return (
    <section id="features" className="w-full bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-zinc-400">
            Showcase
          </span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Built with our components
          </h2>
          <p className="mt-4 text-lg text-zinc-400">
            See what people are building with our library.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 shadow-sm transition-shadow hover:shadow-lg hover:border-white/20"
            >
              {/* Colored top bar */}
              <div className={`mb-4 h-32 w-full rounded-xl bg-gradient-to-br ${project.color} ${project.bg} flex items-center justify-center`}>
                <div className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${project.color} opacity-80 shadow-lg`} />
              </div>

              {/* Tag */}
              <span className={`inline-block rounded-full bg-gradient-to-r ${project.color} px-3 py-0.5 text-xs font-semibold text-white`}>
                {project.tag}
              </span>

              {/* Content */}
              <h3 className="mt-3 text-lg font-semibold text-white">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">
                {project.description}
              </p>

              {/* Arrow */}
              <div className="mt-4 flex items-center gap-1 text-sm font-medium text-zinc-500 transition-colors group-hover:text-white">
                View project
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
