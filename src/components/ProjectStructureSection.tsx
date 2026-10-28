"use client";

import React, { useState } from "react";
import { Folder, FolderOpen, Copy, Check, GitBranch } from "lucide-react";
import { Language } from "../types";
import { projectStructureFiles } from "../data/content";

interface ProjectStructureSectionProps {
  lang: Language;
}

export const ProjectStructureSection: React.FC<
  ProjectStructureSectionProps
> = ({ lang }) => {
  const isAr = lang === "ar";
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);
  const [selectedFolder, setSelectedFolder] = useState<string>(
    "src/features/student/",
  );

  const installCommands = [
    {
      title: isAr ? "نسخ المستودع البرمجي (Clone)" : "Clone Repository",
      cmd: "git clone https://github.com/neovidiatech-eng/learnex.git",
    },
    {
      title: isAr ? "الدخول لمجلد المشروع" : "Change Directory",
      cmd: "cd learnex",
    },
    {
      title: isAr ? "تثبيت الحزم والاعتماديات" : "Install Dependencies",
      cmd: "npm install",
    },
    {
      title: isAr ? "تشغيل خادم التطوير المحلي" : "Run Local Dev Server",
      cmd: "npm run dev",
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="structure"
      className="py-16 lg:py-24 bg-(--bg) border-b border-(--border)"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="text-xs md:text-sm font-bold text-active uppercase tracking-wider">
            {isAr ? "هندسة معمارية واضحة" : "Modular Code Architecture"}
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-(--text-h)">
            {isAr
              ? "هيكلية المشروع وتشغيله محلياً"
              : "Project Structure & Quick Start"}
          </h2>
          <p className="text-sm sm:text-base text-(--text)">
            {isAr
              ? "تصميم هيكلي منظم يسهل إضافة مميزات جديدة وتوزيع مهام التطوير بين فرق الواجهات والخلفيات."
              : "Enterprise module boundaries separating shared UI primitives from role-based feature folders."}
          </p>
        </div>

        {/* 2-Column Split: Interactive File Tree & Terminal Commands */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* File Tree Explorer */}
          <div className="lg:col-span-6 rounded-2xl border border-(--border) bg-(--bg) shadow-md overflow-hidden">
            <div className="px-4 py-3 bg-(--code-bg) border-b border-(--border) flex items-center justify-between">
              <div className="flex items-center gap-2">
                <FolderOpen className="w-4 h-4 text-active" />
                <span className="font-mono text-xs font-bold text-(--text-h)">
                  learnex / src /
                </span>
              </div>
              <span className="text-[11px] font-mono text-(--text)">
                Feature-Sliced Design
              </span>
            </div>

            <div className="p-4 divide-y divide-(--border) font-mono text-xs max-h-115 overflow-y-auto">
              {projectStructureFiles.map((item, idx) => {
                const isSelected = selectedFolder === item.path;
                return (
                  <div
                    key={idx}
                    onClick={() => setSelectedFolder(item.path)}
                    className={`py-2.5 px-3 rounded-lg flex items-start justify-between gap-3 cursor-pointer transition-colors ${
                      isSelected
                        ? "bg-(--primary-light) text-primary font-bold"
                        : "hover:bg-(--code-bg) text-(--text-h)"
                    }`}
                  >
                    <div className="flex items-center gap-2.5 shrink-0">
                      <Folder className="w-4 h-4 text-active" />
                      <span className="tracking-tight">{item.path}</span>
                    </div>
                    <div className="text-[11px] font-sans text-(--text) text-end truncate">
                      {isAr ? item.descAr : item.descEn}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="p-3 bg-(--primary-light) border-t border-(--primary-border) text-xs text-(--text-h) flex items-center justify-between">
              <span className="font-semibold">
                {isAr ? "المجلد النشط المحدد:" : "Selected Module:"}{" "}
                <code className="text-xs bg-white dark:bg-slate-800 px-2 py-0.5 rounded">
                  {selectedFolder}
                </code>
              </span>
              <span className="text-active font-bold text-[11px]">
                {isAr ? "جاهز للتطوير" : "Ready"}
              </span>
            </div>
          </div>

          {/* Quick Start Terminal Guide */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl border border-(--border) bg-[#0d1117] text-slate-100 shadow-xl overflow-hidden font-mono text-xs">
              {/* Terminal Window Header */}
              <div className="px-4 py-3 bg-[#161b22] border-b border-[#30363d] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                  <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
                  <span className="ms-2 text-slate-400 text-[11px]">
                    bash — learnex Installation
                  </span>
                </div>
                <span className="text-slate-400 text-[10px]">Node.js v18+</span>
              </div>

              {/* Terminal Steps */}
              <div className="p-5 space-y-4">
                {installCommands.map((item, idx) => (
                  <div key={idx} className="space-y-1.5 group">
                    <div className="flex items-center justify-between text-[11px] text-slate-400 font-sans">
                      <span>
                        {idx + 1}. {item.title}
                      </span>
                      <button
                        onClick={() => handleCopy(item.cmd, idx)}
                        className="opacity-75 group-hover:opacity-100 text-slate-300 hover:text-white flex items-center gap-1 text-[10px] cursor-pointer"
                        title="Copy command"
                      >
                        {copiedIndex === idx ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-400" />
                            <span className="text-emerald-400">
                              {isAr ? "تم النسخ" : "Copied"}
                            </span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>{isAr ? "نسخ" : "Copy"}</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="p-2.5 rounded-lg bg-[#161b22] border border-[#30363d] flex items-center justify-between overflow-x-auto">
                      <code className="text-emerald-400 text-xs whitespace-nowrap">
                        <span className="text-amber-400">$ </span>
                        {item.cmd}
                      </code>
                    </div>
                  </div>
                ))}
              </div>

              {/* Browser Preview target */}
              <div className="px-5 py-3 bg-[#161b22] border-t border-[#30363d] flex items-center justify-between text-[11px]">
                <span className="text-slate-400">
                  {isAr ? "رابط المعاينة المحلية:" : "Local Preview Address:"}
                </span>
                <span className="text-active font-bold">
                  http://localhost:5173
                </span>
              </div>
            </div>

            {/* Git info */}
            <div className="p-4 rounded-xl border border-(--border) bg-(--bg) flex items-center justify-between text-xs text-(--text)">
              <div className="flex items-center gap-2">
                <GitBranch className="w-4 h-4 text-active" />
                <span className="font-semibold text-(--text-h)">
                  Main Branch: stable
                </span>
              </div>
              <span className="text-[11px]">
                {isAr
                  ? "متوافق مع npm و yarn و pnpm"
                  : "Supports npm, yarn & pnpm"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
