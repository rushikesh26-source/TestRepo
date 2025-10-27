# Smart Health Dashboard - How to Run

## Project Overview

This is a **Smart Health Dashboard** built with:
- **Frontend**: Next.js 16 + React 19 + TypeScript + Tailwind CSS
- **Backend**: Node.js + Express + TypeScript (optional, for ML predictions)
- **Features**: 
  - Health metrics visualization (steps, sleep, heart rate, calories)
  - Interactive charts using Recharts
  - Personalized health advice
  - Weekly health trend predictions using ML models

---

## Prerequisites

Make sure you have installed:
- **Node.js** (v18 or higher recommended)
- **npm**, **yarn**, **pnpm**, or **bun** package manager

---

## Installation Steps

### 1. Install Frontend Dependencies

```bash
cd health-dashboard
npm install
```

### 2. Install Backend Dependencies (Optional)

The backend provides ML-based health predictions. If you want to use this feature:

```bash
cd ../backend
npm install
```

---

## Running the Application

### Option 1: Frontend Only (Recommended for Quick Start)

The frontend works standalone with mock data:

```bash
cd health-dashboard
npm run dev
```

Then open your browser to: **http://localhost:3000**

### Option 2: Full Stack (Frontend + Backend)

If you want ML predictions, run both servers:

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# or
npx ts-node src/server.ts
```

**Terminal 2 - Frontend:**
```bash
cd health-dashboard
npm run dev
```

Then open your browser to: **http://localhost:3000**

---

## Available Scripts

### Frontend (health-dashboard/)

- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build production bundle
- `npm start` - Start production server (after build)
- `npm run lint` - Run ESLint for code quality

### Backend (backend/)

- `npm run dev` - Start backend server with nodemon (auto-reload)
- `npm test` - Run tests (not configured yet)

---

## Project Structure

```
/vercel/sandbox/
├── health-dashboard/          # Next.js Frontend
│   ├── app/
│   │   ├── page.tsx          # Main dashboard page
│   │   ├── layout.tsx        # Root layout
│   │   └── globals.css       # Global styles
│   ├── package.json
│   └── next.config.ts
│
└── backend/                   # Express Backend (Optional)
    ├── src/
    │   ├── models/
    │   │   └── HealthData.ts # Health data models
    │   └── services/
    │       └── mlPredictor.ts # ML prediction service
    └── package.json
```

---

## Features

### 1. **Data Visualization**
- Interactive charts for steps, sleep, heart rate, and calories
- Weekly and daily views
- Responsive design for mobile and desktop

### 2. **Health Metrics Tracking**
- Step count monitoring
- Sleep hours tracking
- Heart rate monitoring
- Calorie burn tracking

### 3. **Personalized Health Advice**
- AI-generated health tips based on your metrics
- Goal tracking and recommendations

### 4. **ML-Based Predictions**
- Predicts weekly health trends
- Uses simple linear regression models
- Forecasts future metrics based on historical data

---

## Troubleshooting

### Port Already in Use

If port 3000 is already in use:
```bash
# Kill the process using port 3000
lsof -ti:3000 | xargs kill -9

# Or run on a different port
PORT=3001 npm run dev
```

### Dependencies Issues

If you encounter dependency errors:
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors

Build the TypeScript files:
```bash
npm run build
```

---

## Production Deployment

### Build for Production

```bash
cd health-dashboard
npm run build
npm start
```

### Deploy to Vercel (Recommended)

The easiest way to deploy:

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

---

## Environment Variables

Create `.env.local` in the `health-dashboard/` directory if needed:

```env
# Backend API URL (if using separate backend)
NEXT_PUBLIC_API_URL=http://localhost:4000

# Add other environment variables as needed
```

---

## Tech Stack Details

- **Next.js 16**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **TypeScript 5**: Type-safe development
- **Tailwind CSS 4**: Utility-first styling
- **Recharts**: Data visualization library
- **Express 5**: Backend API framework
- **Node.js**: JavaScript runtime

---

## Next Steps

1. **Customize Data**: Modify mock data in the frontend components
2. **Connect Wearables**: Integrate with Fitbit, Apple Health, or Google Fit APIs
3. **Enhance ML Models**: Improve prediction accuracy with more sophisticated algorithms
4. **Add Authentication**: Implement user login and data persistence
5. **Database Integration**: Add MongoDB or PostgreSQL for data storage

---

## Support

For issues or questions:
- Check the Next.js documentation: https://nextjs.org/docs
- Review the project README files
- Check console logs for error messages

---

**Enjoy tracking your health! 🏃‍♂️💪🏥**
