import { useState, useEffect } from "react";
import {
  RadarChart, PolarGrid, PolarAngleAxis, Radar, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
} from "recharts";
import {
  LayoutGrid, Target, Briefcase, Building2, GraduationCap,
  Calendar, Clock, CheckCircle2, ChevronRight, Search, Bell,
  MapPin, ArrowUpRight, BookOpen, Users2, Sparkles
} from "lucide-react";

export default function CampusToCareer() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600&family=IBM+Plex+Sans:wght@400;500;600&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    return () => document.head.removeChild(link);
  }, []);

  const [tab, setTab] = useState("overview");

  const ink = "#1C2340";
  const parchment = "#F4F1E7";
  const card = "#FFFFFF";
  const gold = "#B98A2E";
  const teal = "#2E6E63";
  const rust = "#B0532B";

  const styles = {
    font: { fontFamily: "'IBM Plex Sans', sans-serif" },
    serif: { fontFamily: "'Fraunces', serif" },
  };

  const student = { name: "Anika Rao", program: "B.Tech, Computer Science · Final Year", readiness: 74 };

  const skillData = [
    { skill: "Coding", you: 82, required: 88 },
    { skill: "Communication", you: 64, required: 80 },
    { skill: "Data Analysis", you: 70, required: 85 },
    { skill: "Problem Solving", you: 78, required: 82 },
    { skill: "Teamwork", you: 88, required: 75 },
    { skill: "System Design", you: 46, required: 78 },
  ];

  const skillGaps = [
    { skill: "System Design", gap: 32, resource: "Grokking the System Design Interview", hours: "6 hrs left" },
    { skill: "Communication", gap: 16, resource: "Campus Toastmasters — Fri sessions", hours: "3 hrs left" },
    { skill: "Data Analysis", gap: 15, resource: "SQL for Analysts — Dept. workshop", hours: "4 hrs left" },
  ];

  const navItems = [
    { id: "overview", label: "Overview", icon: LayoutGrid },
    { id: "skills", label: "Skill map", icon: Target },
    { id: "internships", label: "Internships", icon: Briefcase },
    { id: "placements", label: "Placements", icon: GraduationCap },
    { id: "industry", label: "Industry hub", icon: Building2 },
  ];

  const [internFilter, setInternFilter] = useState("All");
  const internships = [
    { company: "Fractal Analytics", role: "Data Science Intern", duration: "8 weeks", stipend: "₹25,000/mo", status: "Shortlisted", deadline: "12 Sep" },
    { company: "Zoho Corp", role: "Frontend Engineering Intern", duration: "6 months", stipend: "₹30,000/mo", status: "Applied", deadline: "18 Sep" },
    { company: "Deloitte USI", role: "Business Analyst Intern", duration: "10 weeks", stipend: "₹20,000/mo", status: "Selected", deadline: "Closed" },
    { company: "Freshworks", role: "Product Intern", duration: "6 months", stipend: "₹28,000/mo", status: "Not selected", deadline: "Closed" },
    { company: "Razorpay", role: "SDE Intern", duration: "8 weeks", stipend: "₹35,000/mo", status: "Applied", deadline: "20 Sep" },
  ];
  const internFilters = ["All", "Applied", "Shortlisted", "Selected", "Not selected"];
  const filteredInterns = internFilter === "All" ? internships : internships.filter(i => i.status === internFilter);
  const statusColor = (s) => s === "Selected" ? teal : s === "Shortlisted" ? gold : s === "Not selected" ? "#9A9284" : "#5B76C9";

  const placementStats = [
    { year: "2022", placed: 198, total: 250 },
    { year: "2023", placed: 214, total: 255 },
    { year: "2024", placed: 238, total: 260 },
    { year: "2025", placed: 251, total: 268 },
  ];

  const [placementView, setPlacementView] = useState("drives");
  const drives = [
    { company: "TCS Digital", date: "9 Sep 2026", role: "Systems Engineer", package: "₹9.5 LPA", eligibility: "CGPA 7.0+", stage: "Applications open" },
    { company: "Goldman Sachs", date: "15 Sep 2026", role: "Analyst — Tech", package: "₹18 LPA", eligibility: "CGPA 8.0+, CS/IT", stage: "Shortlisting" },
    { company: "Cisco", date: "22 Sep 2026", role: "Software Engineer", package: "₹14 LPA", eligibility: "CGPA 7.5+", stage: "Applications open" },
    { company: "EY GDS", date: "28 Sep 2026", role: "Associate Consultant", package: "₹8 LPA", eligibility: "All branches", stage: "Applications open" },
  ];
  const myApplications = [
    { company: "Cisco", role: "Software Engineer", stage: "Online test scheduled", date: "10 Sep" },
    { company: "TCS Digital", role: "Systems Engineer", stage: "Application submitted", date: "5 Sep" },
  ];

  const [industryFilter, setIndustryFilter] = useState("All");
  const industryFilters = ["All", "Guest lecture", "Live project", "Hackathon", "MoU"];
  const industryEvents = [
    { org: "Microsoft India", type: "Guest lecture", title: "Cloud architecture at scale", date: "11 Sep" },
    { org: "Mahindra Group", type: "Live project", title: "EV supply-chain optimisation capstone", date: "Ongoing" },
    { org: "Flipkart", type: "Hackathon", title: "Campus Grand Challenge — logistics track", date: "19–20 Sep" },
    { org: "Infosys", type: "MoU", title: "Curriculum co-design for AI electives", date: "Signed Aug 2026" },
    { org: "Bosch", type: "Live project", title: "Predictive maintenance sensor dataset", date: "Ongoing" },
    { org: "Wipro", type: "Guest lecture", title: "Cybersecurity in fintech", date: "25 Sep" },
  ];
  const filteredIndustry = industryFilter === "All" ? industryEvents : industryEvents.filter(e => e.type === industryFilter);

  const circumference = 2 * Math.PI * 42;

  return (
    <div style={{ ...styles.font, background: parchment, minHeight: "100vh", color: ink }}>
      <div className="flex min-h-screen">
        <aside className="hidden md:flex flex-col w-60 shrink-0 px-5 py-6" style={{ background: ink }}>
          <div className="flex items-center gap-2 mb-10 px-1">
            <div className="w-8 h-8 rounded flex items-center justify-center" style={{ background: gold }}>
              <span style={{ ...styles.serif, color: ink, fontWeight: 600, fontSize: 15 }}>C2</span>
            </div>
            <span style={{ ...styles.serif, color: parchment, fontSize: 17, fontWeight: 500 }}>Campus to Career</span>
          </div>
          <nav className="flex flex-col gap-1">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setTab(id)}
                className="flex items-center gap-3 px-3 py-2.5 rounded text-sm transition-colors text-left"
                style={{
                  background: tab === id ? "rgba(185,138,46,0.18)" : "transparent",
                  color: tab === id ? gold : "#C9CAD8",
                  fontWeight: tab === id ? 600 : 400,
                }}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </nav>
          <div className="mt-auto px-3 py-4 rounded" style={{ background: "rgba(255,255,255,0.05)" }}>
            <p style={{ color: "#9BA0C0", fontSize: 12 }}>Placement cell</p>
            <p style={{ color: parchment, fontSize: 13, marginTop: 2 }}>Dept. of Career Services</p>
          </div>
        </aside>

        <main className="flex-1 px-5 md:px-10 py-7 max-w-6xl">
          <header className="flex items-center justify-between mb-8 gap-4">
            <div>
              <h1 style={{ ...styles.serif, fontSize: 24, fontWeight: 500 }}>
                {tab === "overview" && "Good to see you"}
                {tab === "skills" && "Skill map"}
                {tab === "internships" && "Internships"}
                {tab === "placements" && "Placements"}
                {tab === "industry" && "Industry hub"}
              </h1>
              <p style={{ color: "#5B5947", fontSize: 13.5, marginTop: 3 }}>{student.name} · {student.program}</p>
            </div>
            <div className="hidden sm:flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-2 rounded-full" style={{ background: card, border: "1px solid #E4E0D2" }}>
                <Search size={15} color="#8A8672" />
                <span style={{ fontSize: 13, color: "#8A8672" }}>Search companies, skills…</span>
              </div>
              <button className="p-2 rounded-full" style={{ background: card, border: "1px solid #E4E0D2" }}>
                <Bell size={16} color={ink} />
              </button>
            </div>
          </header>

          {tab === "overview" && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-3 gap-5">
                <div className="md:col-span-1 rounded-xl p-6 flex flex-col items-center justify-center" style={{ background: card, border: "1px solid #E4E0D2" }}>
                  <svg width="110" height="110" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="42" fill="none" stroke="#EDEAE0" strokeWidth="8" />
                    <circle
                      cx="50" cy="50" r="42" fill="none" stroke={gold} strokeWidth="8"
                      strokeDasharray={circumference}
                      strokeDashoffset={circumference * (1 - student.readiness / 100)}
                      strokeLinecap="round"
                      transform="rotate(-90 50 50)"
                    />
                    <text x="50" y="47" textAnchor="middle" style={{ ...styles.serif, fontSize: 22, fontWeight: 600 }} fill={ink}>{student.readiness}</text>
                    <text x="50" y="63" textAnchor="middle" style={{ fontSize: 8 }} fill="#8A8672">readiness</text>
                  </svg>
                  <p style={{ fontSize: 12.5, color: "#5B5947", marginTop: 8, textAlign: "center" }}>Career readiness score, based on skills, applications and interviews</p>
                </div>
                <div className="md:col-span-2 grid grid-cols-3 gap-4">
                  {[
                    { label: "Skills tracked", value: "6", note: "3 need attention", color: rust },
                    { label: "Active applications", value: "4", note: "1 interview pending", color: teal },
                    { label: "Upcoming drives", value: "4", note: "next: 9 Sep", color: gold },
                  ].map((s) => (
                    <div key={s.label} className="rounded-xl p-4" style={{ background: card, border: "1px solid #E4E0D2" }}>
                      <p style={{ fontSize: 12, color: "#8A8672" }}>{s.label}</p>
                      <p style={{ ...styles.serif, fontSize: 28, fontWeight: 500, marginTop: 4 }}>{s.value}</p>
                      <p style={{ fontSize: 11.5, color: s.color, marginTop: 4 }}>{s.note}</p>
                    </div>
                  ))}
                  <div className="col-span-3 rounded-xl p-5" style={{ background: ink }}>
                    <div className="flex items-center gap-2 mb-1">
                      <Sparkles size={15} color={gold} />
                      <p style={{ color: parchment, fontSize: 13.5, fontWeight: 500 }}>Priority this week</p>
                    </div>
                    <p style={{ color: "#C9CAD8", fontSize: 13 }}>
                      Your System Design score trails the industry bar by 32 points — the widest gap on your map.
                      A short module is queued for you.
                    </p>
                    <button onClick={() => setTab("skills")} className="flex items-center gap-1 mt-3 text-sm" style={{ color: gold }}>
                      Go to skill map <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === "skills" && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-xl p-5" style={{ background: card, border: "1px solid #E4E0D2" }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 6 }}>Your profile vs. industry benchmark</p>
                <div style={{ height: 280 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={skillData} outerRadius="70%">
                      <PolarGrid stroke="#E4E0D2" />
                      <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: "#5B5947" }} />
                      <Radar name="Required" dataKey="required" stroke="#C9BFA0" fill="#C9BFA0" fillOpacity={0.35} />
                      <Radar name="You" dataKey="you" stroke={teal} fill={teal} fillOpacity={0.45} />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex gap-4 mt-1 justify-center">
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "#5B5947" }}><span className="w-2.5 h-2.5 rounded-full" style={{ background: teal }} />You</span>
                  <span className="flex items-center gap-1.5 text-xs" style={{ color: "#5B5947" }}><span className="w-2.5 h-2.5 rounded-full" style={{ background: "#C9BFA0" }} />Industry benchmark</span>
                </div>
              </div>
              <div className="rounded-xl p-5" style={{ background: card, border: "1px solid #E4E0D2" }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 12 }}>Where to focus next</p>
                <div className="space-y-3">
                  {skillGaps.map((g) => (
                    <div key={g.skill} className="pl-3 py-1" style={{ borderLeft: `3px solid ${rust}` }}>
                      <div className="flex justify-between items-baseline">
                        <p style={{ fontSize: 13.5, fontWeight: 500 }}>{g.skill}</p>
                        <p style={{ fontSize: 12, color: rust }}>{g.gap} pt gap</p>
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <BookOpen size={13} color="#8A8672" />
                        <p style={{ fontSize: 12.5, color: "#5B5947" }}>{g.resource}</p>
                      </div>
                      <p style={{ fontSize: 11.5, color: "#8A8672", marginTop: 2 }}>{g.hours}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "internships" && (
            <div>
              <div className="flex gap-2 mb-5 flex-wrap">
                {internFilters.map((f) => (
                  <button key={f} onClick={() => setInternFilter(f)}
                    className="px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: internFilter === f ? ink : card,
                      color: internFilter === f ? parchment : "#5B5947",
                      border: "1px solid #E4E0D2",
                    }}>
                    {f}
                  </button>
                ))}
              </div>
              <div className="space-y-3">
                {filteredInterns.map((it) => (
                  <div key={it.company} className="flex items-center justify-between rounded-lg p-4" style={{ background: card, border: "1px solid #E4E0D2" }}>
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center shrink-0" style={{ background: "#EFEAD8" }}>
                        <Briefcase size={17} color={ink} />
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600 }}>{it.role}</p>
                        <p style={{ fontSize: 12.5, color: "#5B5947" }}>{it.company} · {it.duration} · {it.stipend}</p>
                      </div>
                    </div>
                    <div className="text-right shrink-0 ml-3">
                      <p style={{ fontSize: 12, fontWeight: 600, color: statusColor(it.status) }}>{it.status}</p>
                      <p style={{ fontSize: 11.5, color: "#8A8672", marginTop: 2 }}>{it.deadline}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === "placements" && (
            <div className="space-y-6">
              <div className="rounded-xl p-5" style={{ background: card, border: "1px solid #E4E0D2" }}>
                <p style={{ fontSize: 13.5, fontWeight: 600, marginBottom: 10 }}>Placement rate by year</p>
                <div style={{ height: 200 }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={placementStats}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#EDEAE0" vertical={false} />
                      <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#5B5947" }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fontSize: 11, fill: "#5B5947" }} axisLine={false} tickLine={false} />
                      <Tooltip contentStyle={{ fontSize: 12, borderRadius: 8, border: "1px solid #E4E0D2" }} />
                      <Bar dataKey="placed" fill={teal} radius={[4, 4, 0, 0]} name="Placed" />
                      <Bar dataKey="total" fill="#EDEAE0" radius={[4, 4, 0, 0]} name="Total students" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="flex gap-2">
                <button onClick={() => setPlacementView("drives")} className="px-4 py-2 rounded-full text-xs" style={{ background: placementView === "drives" ? ink : card, color: placementView === "drives" ? parchment : "#5B5947", border: "1px solid #E4E0D2" }}>Upcoming drives</button>
                <button onClick={() => setPlacementView("mine")} className="px-4 py-2 rounded-full text-xs" style={{ background: placementView === "mine" ? ink : card, color: placementView === "mine" ? parchment : "#5B5947", border: "1px solid #E4E0D2" }}>My applications</button>
              </div>

              {placementView === "drives" ? (
                <div className="relative pl-6">
                  <div className="absolute left-[7px] top-1 bottom-1 w-px" style={{ background: "#E4E0D2" }} />
                  <div className="space-y-5">
                    {drives.map((d) => (
                      <div key={d.company} className="relative">
                        <div className="absolute -left-6 top-1 w-3.5 h-3.5 rounded-full" style={{ background: gold, border: `2px solid ${parchment}` }} />
                        <div className="rounded-lg p-4" style={{ background: card, border: "1px solid #E4E0D2" }}>
                          <div className="flex justify-between items-start">
                            <div>
                              <p style={{ fontSize: 14, fontWeight: 600 }}>{d.company}</p>
                              <p style={{ fontSize: 12.5, color: "#5B5947" }}>{d.role} · {d.package}</p>
                            </div>
                            <p style={{ fontSize: 11.5, color: gold, whiteSpace: "nowrap" }}>{d.stage}</p>
                          </div>
                          <div className="flex gap-4 mt-2">
                            <span className="flex items-center gap-1 text-xs" style={{ color: "#8A8672" }}><Calendar size={12} />{d.date}</span>
                            <span className="flex items-center gap-1 text-xs" style={{ color: "#8A8672" }}><CheckCircle2 size={12} />{d.eligibility}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  {myApplications.map((a) => (
                    <div key={a.company} className="flex items-center justify-between rounded-lg p-4" style={{ background: card, border: "1px solid #E4E0D2" }}>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 600 }}>{a.company}</p>
                        <p style={{ fontSize: 12.5, color: "#5B5947" }}>{a.role}</p>
                      </div>
                      <div className="text-right">
                        <p style={{ fontSize: 12, color: teal, fontWeight: 500 }}>{a.stage}</p>
                        <p className="flex items-center gap-1 justify-end mt-1" style={{ fontSize: 11.5, color: "#8A8672" }}><Clock size={11} />{a.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {tab === "industry" && (
            <div>
              <div className="flex gap-2 mb-5 flex-wrap">
                {industryFilters.map((f) => (
                  <button key={f} onClick={() => setIndustryFilter(f)}
                    className="px-3 py-1.5 rounded-full text-xs"
                    style={{
                      background: industryFilter === f ? ink : card,
                      color: industryFilter === f ? parchment : "#5B5947",
                      border: "1px solid #E4E0D2",
                    }}>
                    {f}
                  </button>
                ))}
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {filteredIndustry.map((e, i) => (
                  <div key={i} className="rounded-lg p-4" style={{ background: card, border: "1px solid #E4E0D2" }}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "#EFEAD8" }}>
                        <span style={{ ...styles.serif, fontSize: 13, fontWeight: 600 }}>{e.org.split(" ").map(w => w[0]).slice(0,2).join("")}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 13.5, fontWeight: 600 }}>{e.org}</p>
                        <p style={{ fontSize: 11, color: gold }}>{e.type}</p>
                      </div>
                    </div>
                    <p style={{ fontSize: 13, color: "#3A3826" }}>{e.title}</p>
                    <p className="flex items-center gap-1 mt-2" style={{ fontSize: 11.5, color: "#8A8672" }}><Calendar size={11} />{e.date}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
