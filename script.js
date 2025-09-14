const projects = [
  {
    title: "Smart Safe Driving App",
    desc: "Real-time driver monitoring to detect drowsiness, phone usage, and emotions with alerts.",
    tech: ["Python", "Flask", "OpenCV", "YOLO", "dlib"],
    repo: "https://github.com/Yukivid/Smart_safe_driving_app",
  },
  {
    title: "MeetMate – AI Meeting Assistant",
    desc: "Transcribes meetings, generates minutes, and auto-schedules follow-ups with GPT.",
    tech: ["Python", "Streamlit", "Azure Speech", "GPT-4o"],
    repo: "https://github.com/Yukivid/Meet_Mate",
  },
  {
    title: "AskLegal.ai – AI Legal Assistant",
    desc: "Legal chatbot using RAG over IPC & court cases.",
    tech: ["Python", "Streamlit", "RAG", "Redis"],
    repo: "https://asklegal-ai-ai-legal-assistant.onrender.com/",
  },
  {
    title: "IoT Water Quality Monitoring",
    desc: "IoT sensors + ML predictions with cloud dashboard.",
    tech: ["IoT", "ESP8266", "Python", "Scikit-learn"],
    repo: "https://github.com/Yukivid/Water-Quality-prediction-BPA-prediction",
  },
  {
    title: "Farm-X-Change Portfolio",
    desc: "Frontend portfolio for farmer-distributor marketplace.",
    tech: ["HTML", "CSS", "JavaScript"],
    repo: "https://github.com/Yukivid/FarmXChange_Portfolio",
  },
];

const projectList = document.getElementById("project-list");

projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "bg-white rounded-lg shadow-sm p-5 flex flex-col";

  card.innerHTML = `
    <div class="flex items-center justify-between">
      <h4 class="font-semibold text-lg">${p.title}</h4>
      <div class="text-xs text-gray-400">Project</div>
    </div>
    <p class="mt-3 text-sm text-gray-700 flex-1">${p.desc}</p>
    <div class="mt-4 flex flex-wrap gap-2">
      ${p.tech.map(t => `<span class="text-xs border px-2 py-1 rounded-full">${t}</span>`).join("")}
    </div>
    <div class="mt-4">
      <a href="${p.repo}" target="_blank" class="text-sm text-indigo-600 hover:underline">View Repo</a>
    </div>
  `;
  projectList.appendChild(card);
});

// Update year
document.getElementById("year").textContent = new Date().getFullYear();



