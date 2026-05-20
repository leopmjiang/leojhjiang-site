"use client";

import { useState } from "react";
import {
  experienceGroups,
  type ExperienceGroup,
  type ExperienceRole,
  type Skill,
} from "@/data/portfolio";
import { Card, PanelHeader, Section, SectionHeader } from "./ui";

export function ExperienceSection() {
  const [activeExperienceGroup, setActiveExperienceGroup] = useState(
    experienceGroups[0].group
  );
  const [activeRoleId, setActiveRoleId] = useState(
    experienceGroups[0].roles[0].id
  );

  const activeGroup =
    experienceGroups.find((group) => group.group === activeExperienceGroup) ??
    experienceGroups[0];

  const activeExperience =
    activeGroup.roles.find((role) => role.id === activeRoleId) ??
    activeGroup.roles[0];

  function handleExperienceGroupChange(groupName: string) {
    const nextGroup = experienceGroups.find((group) => group.group === groupName);
    if (!nextGroup) return;

    setActiveExperienceGroup(groupName);
    setActiveRoleId(nextGroup.roles[0].id);
  }

  return (
    <Section id="experience">
      <SectionHeader
        eyebrow="Experience"
        title="Click a role to see the work, products, and skill profile behind it."
        subtitle="Roles are grouped by product leadership and technical delivery — click any role to see the products, decisions, and skills behind it."
      />

      <div className="grid gap-5 xl:grid-cols-3">
        <ExperiencePicker
          activeGroup={activeGroup}
          activeExperienceGroup={activeExperienceGroup}
          activeRoleId={activeRoleId}
          onGroupChange={handleExperienceGroupChange}
          onRoleChange={setActiveRoleId}
        />
        <ProductsPanel activeExperience={activeExperience} />
        <SkillsPanel skills={activeExperience.skills} />
      </div>
    </Section>
  );
}

function ExperiencePicker({
  activeGroup,
  activeExperienceGroup,
  activeRoleId,
  onGroupChange,
  onRoleChange,
}: {
  activeGroup: ExperienceGroup;
  activeExperienceGroup: string;
  activeRoleId: string;
  onGroupChange: (groupName: string) => void;
  onRoleChange: (roleId: string) => void;
}) {
  return (
    <Card className="p-4">
      <h3 className="mb-5 px-2 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300">
        Experience
      </h3>

      <div className="mb-5 grid gap-2 rounded-2xl border border-white/10 bg-neutral-950/50 p-2">
        {experienceGroups.map((group) => (
          <button
            key={group.group}
            type="button"
            onClick={() => onGroupChange(group.group)}
            className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
              group.group === activeExperienceGroup
                ? "bg-orange-400 text-neutral-950"
                : "text-neutral-300 hover:bg-white/10 hover:text-white"
            }`}
          >
            {group.group}
          </button>
        ))}
      </div>

      <div className="mb-4 px-2">
        <h4 className="text-sm font-semibold text-white">{activeGroup.group}</h4>
        <p className="mt-1 text-xs leading-5 text-neutral-500">
          {activeGroup.description}
        </p>
      </div>

      <div className="space-y-3">
        {activeGroup.roles.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onRoleChange(item.id)}
            className={`w-full rounded-2xl border p-5 text-left transition ${
              item.id === activeRoleId
                ? "border-orange-400/70 bg-orange-400/10"
                : "border-white/10 bg-neutral-950/40 hover:border-orange-400/40"
            }`}
          >
            <h5 className="text-base font-semibold text-white">
              {item.company}
            </h5>
            <p className="mt-1 text-sm text-orange-300">{item.role}</p>
            <span className="mt-2 block text-xs text-neutral-400">
              {item.period}
            </span>
            <p className="mt-4 text-sm leading-6 text-neutral-300">
              {item.description}
            </p>
          </button>
        ))}
      </div>
    </Card>
  );
}

function ProductsPanel({ activeExperience }: { activeExperience: ExperienceRole }) {
  return (
    <Card className="bg-neutral-900 p-6">
      <PanelHeader
        eyebrow="Products & projects"
        title={activeExperience.company}
        subtitle={activeExperience.role}
      />

      <div className="space-y-4">
        {activeExperience.products.map((product) => (
          <article
            key={product.name}
            className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-orange-400/50 hover:bg-orange-400/10"
          >
            <h4 className="font-semibold text-white">{product.name}</h4>
            <p className="mt-2 text-xs font-medium text-orange-300">
              {product.audience}
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {product.summary}
            </p>
          </article>
        ))}
      </div>
    </Card>
  );
}

function SkillsPanel({ skills }: { skills: Skill[] }) {
  return (
    <Card className="p-6">
      <PanelHeader
        eyebrow="Core skills"
        title="How often I used these skills"
        subtitle="Ranked out of 10 based on how central each skill was in this role."
      />

      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name}>
            <div className="mb-2 flex items-center justify-between gap-4">
              <span className="text-sm font-medium text-neutral-200">
                {skill.name}
              </span>
              <span className="text-sm font-semibold text-orange-300">
                {skill.score}/10
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-orange-400"
                style={{ width: `${skill.score * 10}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
