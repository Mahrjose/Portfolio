"use client"

import React, { useMemo, useState, useEffect } from "react"
import {
  Monitor, Code, Brain, Zap, Terminal, Filter, Globe, Server, Smartphone,
  Database, Shield, Cloud, Gamepad2, Palette, BarChart3, Settings, ChevronDown
} from "lucide-react"
import { cn } from "@/lib/utils"

// Icon mapping
const iconMap: Record<string, React.ComponentType<any>> = {
  All: Filter,
  "Computer Graphics": Monitor,
  "Web Development": Code,
  "Machine Learning": Brain,
  Automation: Zap,
  "Linux Customization": Terminal,
  "Mobile Development": Smartphone,
  DevOps: Server,
  Database: Database,
  Cybersecurity: Shield,
  "Cloud Computing": Cloud,
  "Game Development": Gamepad2,
  "UI/UX Design": Palette,
  "Data Analytics": BarChart3,
  "Backend Development": Settings,
  "Frontend Development": Globe,
}

const getIconForType = (type: string): React.ComponentType<any> => {
  return iconMap[type] || Code
}

interface ModernSidebarProps {
  projects: { type?: string }[]
  activeType: string
  setActiveType: (type: string) => void
  resetFilters: () => void
}

const ModernSidebar: React.FC<ModernSidebarProps> = ({ projects, activeType, setActiveType, resetFilters }) => {
  const [showOthers, setShowOthers] = useState(false)

  useEffect(() => {
    setShowOthers(false)
  }, [activeType])

  const { topTypes, otherTypes } = useMemo(() => {
    const typeCount: Record<string, number> = {}
    projects.forEach((p) => {
      if (p.type) typeCount[p.type] = (typeCount[p.type] || 0) + 1
    })

    const sorted = Object.entries(typeCount).sort((a, b) => b[1] - a[1])
    const top = sorted.slice(0, 5).map(([type]) => type)
    const others = sorted.slice(5).map(([type]) => type)

    return { topTypes: top, otherTypes: others }
  }, [projects])

  const renderButton = (type: string) => {
    const isActive = activeType === type
    const Icon = getIconForType(type)
    const projectCount = projects.filter((p) => (type === "All" ? true : p.type === type)).length

    return (
      <button
        key={type}
        onClick={() => {
          setActiveType(type)
          resetFilters()
        }}
        className={cn(
          "w-full group relative overflow-hidden rounded-lg p-3 text-left transition-all duration-300 hover:scale-[1.02] cursor-pointer",
          isActive
            ? "bg-blue-500/10 border border-blue-500/30 shadow-sm"
            : "bg-slate-800/10 border border-slate-700/20 hover:bg-slate-800/20 hover:border-slate-600/30",
        )}
        aria-pressed={isActive}
        role="button"
        aria-label={`Filter by type: ${type}`}
      >
        <div className="relative flex items-center justify-between">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <div
              className={cn(
                "w-7 h-7 rounded-md flex items-center justify-center transition-all duration-200",
                isActive ? "bg-blue-500/20" : "bg-slate-700/20 group-hover:bg-slate-600/20",
              )}
            >
              <Icon
                className={cn(
                  "w-4 h-4 transition-colors duration-200",
                  isActive ? "text-blue-400" : "text-slate-400 group-hover:text-slate-300",
                )}
              />
            </div>
            <p className={cn("font-medium text-sm truncate", isActive ? "text-blue-400" : "text-slate-300 group-hover:text-slate-200")}>
              {type}
            </p>
          </div>

          <div
            className={cn(
              "px-2 py-0.5 rounded-full text-xs font-medium transition-all duration-200",
              isActive
                ? "bg-blue-500/20 text-blue-300"
                : "bg-slate-700/20 text-slate-400 group-hover:bg-slate-600/20 group-hover:text-slate-300",
            )}
          >
            {projectCount}
          </div>
        </div>
      </button>
    )
  }

  return (
    <div className="w-full max-w-[95vw] sm:max-w-[320px] self-start lg:sticky lg:top-[5rem]">
      <div className="bg-slate-900/20 backdrop-blur-sm border border-slate-700/20 p-3 sm:p-4 lg:p-5 rounded-xl m-2 max-h-[calc(100vh-12rem)] overflow-y-auto">
        <div className="mb-4">
          <h2 className="text-base font-bold text-slate-200 tracking-wide">CATEGORIES</h2>
        </div>

        <div className="space-y-2">
          {renderButton("All")}
          {topTypes.map(renderButton)}
        </div>

        {otherTypes.length > 0 && (
          <div className="mt-3 cursor-pointer">
            <button
              onClick={() => setShowOthers(!showOthers)}
              className="w-full cursor-pointer group flex items-center justify-between rounded-lg p-3 bg-slate-800/10 border border-slate-700/20 hover:bg-slate-800/20 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-md flex items-center justify-center bg-slate-700/20 group-hover:bg-slate-600/20 transition-all duration-200">
                  <Settings className="w-4 h-4 text-slate-400 group-hover:text-slate-300" />
                </div>
                <p className="font-medium text-sm text-slate-300 group-hover:text-slate-200">
                  Others
                </p>
              </div>
              <ChevronDown
                className={cn(
                  "w-4 h-4 text-slate-400 transition-transform duration-200",
                  showOthers ? "rotate-180" : ""
                )}
              />
            </button>

            {showOthers && (
              <div className="mt-2 ml-2 pl-3 space-y-1 border-l border-slate-700/40">
                {otherTypes.map(renderButton)}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ModernSidebar
