"use client"

import React from "react"
import { motion } from "framer-motion"
import { ExternalLink, Globe, ShieldAlert, CheckCircle2, Ban, UserMinus } from "lucide-react"
import members from "./members.json"

const statusConfig = {
  active: {
    color: "text-emerald-700 bg-emerald-50 border-emerald-200",
    icon: <CheckCircle2 className="w-3 h-3" />,
    dot: "bg-emerald-500"
  },
  suspended: {
    color: "text-amber-700 bg-amber-50 border-amber-200",
    icon: <ShieldAlert className="w-3 h-3" />,
    dot: "bg-amber-500"
  },
  banned: {
    color: "text-rose-700 bg-rose-50 border-rose-200",
    icon: <Ban className="w-3 h-3" />,
    dot: "bg-rose-500"
  },
  blacklisted: {
    color: "text-slate-700 bg-slate-50 border-slate-200",
    icon: <UserMinus className="w-3 h-3" />,
    dot: "bg-slate-500"
  }
}

const Page = () => {
  const [searchTerm, setSearchTerm] = React.useState("")

  const filteredMembers = React.useMemo(() => {
    return members
      .filter((m) =>
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        m.id.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => {
        // Members with websites come first
        if (a.website && !b.website) return -1
        if (!a.website && b.website) return 1
        return 0
      })
  }, [searchTerm])

  return (
    <section className="min-h-screen bg-slate-50 px-6 py-12 md:px-12">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Our Community</h1>
            <p className="mt-2 text-slate-500">Meet the individuals driving our ecosystem forward.</p>
          </div>
          <div className="w-full md:w-96">
            <input
              type="text"
              placeholder="Search by name or ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all font-medium text-slate-700 bg-white shadow-sm"
            />
          </div>
        </header>

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 }
            }
          }}
          className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {filteredMembers.length > 0 ? (
            filteredMembers.map((m) => {
              const status = statusConfig[m.status?.toLowerCase()] || statusConfig.blacklisted

              return (
                <motion.article
                  key={m.id}
                  variants={{
                    hidden: { y: 20, opacity: 0 },
                    show: { y: 0, opacity: 1 }
                  }}
                  whileHover={{ y: -8 }}
                  className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 transition-all duration-300"
                >
                  {/* Image Container - Non-cropping */}
                  <div className="relative aspect-square bg-slate-100 flex items-center justify-center overflow-hidden p-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <img
                      src={m.image}
                      alt={m.name}
                      className="w-full h-full object-contain z-10 transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full border text-[10px] font-bold uppercase tracking-wider ${status.color}`}>
                      {status.icon}
                      {m.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-xl font-bold text-slate-800 truncate">{m.name}</h3>
                      <span className="text-[10px] text-slate-400 font-mono mt-1.5 uppercase">ID: {m.id}</span>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <div className={`w-2 h-2 rounded-full ${status.dot} animate-pulse`} />
                      <span className="text-xs text-slate-500 capitalize">{m.status} Member</span>
                    </div>

                    {m.website ? (
                      <a
                        href={m.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-900 text-white rounded-2xl text-sm font-semibold hover:bg-indigo-600 transition-colors duration-300"
                      >
                        <span>Visit My Website</span>
                        <ExternalLink className="w-4 h-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      </a>
                    ) : (
                      <div className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-slate-100 text-slate-400 rounded-2xl text-sm font-semibold italic cursor-not-allowed">
                        <Globe className="w-4 h-4 opacity-50" />
                        No Website
                      </div>
                    )}
                  </div>
                </motion.article>
              )
            })
          ) : (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-400 text-lg">No members found matching your search.</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
export default Page