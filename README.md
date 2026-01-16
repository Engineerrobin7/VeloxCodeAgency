
# VeloxCodeAgency - Modern Web Agency Scaffold

A high-performance, premium web agency template built with React, Three.js, and Framer Motion.

## 🚀 Getting Started

### 1. Installation
Clone the repository and install dependencies:
```bash
npm install
```

### 2. Configuration
Create a `.env` file in the root directory:
```env
API_KEY=your_gemini_api_key_here
NEXTAUTH_SECRET=your_random_secret
DATABASE_URL=postgresql://user:pass@localhost:5432/velox
```

### 3. Database Setup (Optional for local dev)
If using Prisma:
```bash
npx prisma migrate dev
npx prisma db seed
```

### 4. Run Development Server
```bash
npm run dev
```

## 🏗️ Tech Stack
- **Frontend:** React 18, TypeScript, Tailwind CSS
- **3D Graphics:** React Three Fiber, Three.js, Drei
- **Animations:** Framer Motion, GSAP
- **AI Integration:** Google Gemini API (@google/genai)
- **Routing:** React Router (HashRouter for SPA compatibility)

## 📁 Key File Structure
- `/components`: Reusable UI modules (Navbar, Footer, 3D Hero, AI Chat)
- `/pages`: Main route components
- `/services`: API service logic
- `/public`: Static assets

## 🌐 Deployment
This project is optimized for deployment on Vercel or Netlify.
Ensure you add the `API_KEY` to your deployment environment variables for the AI Chat functionality.

## 🎨 Aesthetic Standards
- **Background:** `#0B0F1A`
- **Surface:** `#111827`
- **Primary:** `#00D4FF`
- **Secondary:** `#7C3AED`
- **Typography:** Space Grotesk (Headings) & Inter (Body)
