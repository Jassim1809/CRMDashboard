[README.md](https://github.com/user-attachments/files/32688370/README.md)
# 🚀 Nexus CRM — Intelligent Sales & Pipeline Management

A modern, production-ready Customer Relationship Management (CRM) application with a visual drag-and-drop pipeline, real-time analytics, lead tracking, contact management, notes, tasks, and Gemini AI-assisted sales insights.

---

## 🌐 Live Deployments

| Component | URL | Status |
| :--- | :--- | :--- |
| **Frontend Application** | [https://crm-frontend-xmww.vercel.app/](https://crm-frontend-xmww.vercel.app/) | ![Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel) |
| **Backend API Service** | [https://crmdashboard-6tfs.onrender.com/](https://crmdashboard-6tfs.onrender.com/) | ![Render](https://img.shields.io/badge/Render-Live-46E3B7?style=flat&logo=render) |

---

## 🔑 Quick Demo Credentials

You can test the live application instantly without creating a new account by clicking **"Try the demo account"** on the login screen, or by using these credentials:

- **Email:** `jassim@example.com`
- **Password:** `Test@1234`

---

## ✨ Features

- **📊 Comprehensive Sales Dashboard**:
  - Revenue tracking, win rate conversion metrics, and pipeline balance overview.
  - Interactive charts for pipeline engagement, monthly trends, and lead sources.
  - Quick widgets for upcoming follow-ups and top active deals.

- **🗂️ Interactive Pipeline Board**:
  - Visual Kanban board powered by `@dnd-kit` with stage columns (*New*, *Contacted*, *Qualified*, *Proposal*, *Negotiation*, *Won*, *Lost*).
  - Drag-and-drop reordering with persistent order updates on the backend.
  - One-click AI next-step recommendations per opportunity.

- **👥 Lead Management**:
  - Flexible view toggle between structured Data Table and Responsive Grid Cards.
  - Filter by stage, priority (*Low*, *Medium*, *High*), and lead source.
  - Quick multi-select bulk delete and instant CSV data export.
  - Detailed slide-out drawer with contact info, status updates, and quick actions.

- **📇 Contacts Directory**:
  - Grid & table views with smooth layout animations (FLIP transitions).
  - One-click favorite starring and instant tag filtering.
  - Comprehensive contact drawer with direct email and phone action links.

- **📅 Follow-ups & Task Management**:
  - Categorized timeline groups (*Overdue*, *Due Today*, *Upcoming*, *Completed*).
  - Linked leads, priority indicators, and interactive completion toggles.
  - Dynamic progress bar showing task completion percentages.

- **📝 Notes & Context Capture**:
  - Responsive masonry layout for quick note taking.
  - Pin important notes to the top and link notes directly to specific leads or contacts.

- **🤖 Gemini AI Integration**:
  - AI-assisted lead scoring, deal summaries, and intelligent next-best-action guidance.
  - AI email draft generation customized to lead context.

- **🔒 Secure Authentication**:
  - JWT-based authentication with token persistence and auto-logout on expiry.
  - Clean split-screen authentication screens for Sign In and Sign Up.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Language:** TypeScript & Modern JavaScript (ESNext)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Charts:** [Recharts](https://recharts.org/)
- **Drag & Drop:** [@dnd-kit](https://dndkit.com/) (Core, Sortable, Utilities)
- **Forms & Validation:** [React Hook Form](https://react-hook-form.com/)
- **Notifications:** [Sonner](https://sonner.emilkowal.ski/)
- **Dates & Formatting:** [date-fns](https://date-fns.org/)
- **HTTP Client:** [Axios](https://axios-http.com/)

### Backend
- **Runtime:** Node.js + Express
- **Database:** MongoDB / Mongoose
- **Authentication:** JWT (JSON Web Tokens) + bcrypt
- **AI Engine:** Google Gemini API (`@google/genai`)
- **Hosting:** Render

---

## 📁 Project Structure

```text
├── public/
│   └── _redirects              # Netlify SPA routing & API reverse proxy
├── src/
│   ├── components/
│   │   ├── ai/                 # Gemini AI Insight cards & generators
│   │   ├── common/             # Reusable headers, stat cards, dialogs, empty states
│   │   ├── dashboard/          # Metric cards and overview widgets
│   │   ├── layout/             # Top navigation, sidebar, and app container
│   │   ├── leads/              # Lead drawers, forms, and detail modals
│   │   └── ui/                 # Accessible button, input, badge, modal, avatar primitives
│   ├── context/
│   │   └── AuthContext.jsx     # Authentication state, login, register, and logout
│   ├── lib/
│   │   ├── api.js              # Axios instance with auth interceptors and proxy support
│   │   ├── constants.js        # Pipeline stages, badge styles, priority tokens
│   │   ├── format.js           # Currency, dates, and number formatters
│   │   ├── services.js         # Modular API service layer (auth, leads, contacts, tasks, etc.)
│   │   └── utils.js            # Class name mergers and initials helpers
│   ├── pages/
│   │   ├── auth/               # Login, Register, and AuthShell layouts
│   │   ├── Contacts.jsx        # Contacts management view
│   │   ├── Dashboard.jsx       # Main analytics and performance dashboard
│   │   ├── Leads.jsx           # Leads listing with table and grid views
│   │   ├── Notes.jsx           # Masonry notes board with pinning
│   │   ├── Pipeline.jsx        # Drag-and-drop Kanban pipeline board
│   │   ├── Settings.jsx        # Profile, password, and AI integration settings
│   │   └── Tasks.jsx           # Follow-ups and task management
│   ├── App.jsx                 # Route definitions and protected route wrappers
│   ├── index.css               # Design tokens, variables, and Tailwind imports
│   └── main.jsx                # Application root entry point
├── vercel.json                 # Vercel SPA rewrites and server-side API proxy
├── vite.config.ts              # Vite configuration with /api reverse proxy
└── package.json
```

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js 18+ installed on your machine
- npm, yarn, or pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/nexus-crm.git
cd nexus-crm
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory:

```env
# In development, use '/api' to leverage the built-in Vite reverse proxy:
VITE_API_URL=/api

# (Optional) If you want to point to a local backend instead:
# VITE_BACKEND_TARGET=http://localhost:5000
```

### 4. Start Development Server
```bash
npm run dev
```

The app will start at `http://localhost:3000` (or `http://localhost:5173`). All `/api/*` requests will be automatically routed through Vite's reverse proxy to the live backend server.

---

## 🚢 Deployment

### Deploying to Vercel (Recommended)
This repository includes a pre-configured `vercel.json` file that handles client-side routing and proxies `/api` calls directly to Render:

1. Push your code to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. In **Build & Development Settings**, use defaults:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. In **Environment Variables**, leave `VITE_API_URL=/api` (or unset), and Vercel's rewrite rules will proxy API traffic seamlessly without CORS issues.
5. Click **Deploy**.

### Deploying to Netlify
The repository includes `public/_redirects` which handles client-side routing and API proxying on Netlify automatically.

---

## ⚙️ Backend Configuration Note (CORS)

If you are calling the backend directly from another origin without a proxy, ensure the backend's CORS policy includes your deployed frontend domain:

```javascript
// Example in backend server.js:
import cors from "cors";

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:5173",
      "https://crm-frontend-xmww.vercel.app",
      /\.vercel\.app$/,
    ],
    credentials: true,
  })
);
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
