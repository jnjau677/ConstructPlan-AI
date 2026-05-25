# ArcSystem PRO - Production Architecture Documentation

## Executive Summary

ArcSystem PRO is a professional architectural design platform with AI-powered assistance, engineering calculators, schematic studio, and site analysis capabilities. The current implementation is a **frontend-only React application** with critical security vulnerabilities (exposed API keys) and no data persistence.

---

## 1. Project Architecture Overview

### Current State (As-Is)
```
┌─────────────────────────────────────┐
│   Frontend (React 19 + Vite)        │
│   ├── Direct AI API Calls ⚠️        │
│   ├── No Authentication             │
│   ├── No Database                   │
│   └── Client-side API Keys ⚠️       │
└─────────────────────────────────────┘
```

### Target State (To-Be)
```
┌─────────────────────────────────────────────────────────────┐
│                      CDN (Vercel/Cloudflare)                │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│   Frontend (React 19 + TypeScript + Tailwind)               │
│   ├── Zustand State Management                              │
│   ├── Protected Routes                                      │
│   ├── Optimized Bundle (<300KB)                             │
│   └── WebSocket for Real-time                               │
└─────────────────────────────────────────────────────────────┘
                            ↓ HTTPS
┌─────────────────────────────────────────────────────────────┐
│   API Gateway (Node.js/Express or FastAPI)                  │
│   ├── JWT Authentication                                    │
│   ├── Rate Limiting                                         │
│   ├── Request Validation                                    │
│   └── AI Proxy (Secure Key Management)                      │
└─────────────────────────────────────────────────────────────┘
                    ↓                       ↓
    ┌───────────────────────┐   ┌───────────────────────┐
    │   PostgreSQL          │   │   Redis               │
    │   ├── Users           │   │   ├── Sessions        │
    │   ├── Projects        │   │   ├── Cache           │
    │   ├── Designs         │   │   └── Rate Limits     │
    │   └── Audit Logs      │   │                       │
    └───────────────────────┘   └───────────────────────┘
                    ↓
    ┌───────────────────────┐
    │   Vector DB (Pinecone)│
    │   └── RAG Context     │
    └───────────────────────┘
```

---

## 2. Recommended Tech Stack

### Frontend
| Category | Technology | Rationale |
|----------|-----------|-----------|
| Framework | React 19 | Latest stable with concurrent features |
| Language | TypeScript 5.8 | Type safety, better DX |
| Styling | Tailwind CSS 4 | Utility-first, small bundle |
| State | Zustand | Lightweight, no boilerplate |
| Animations | Framer Motion | GPU-accelerated, declarative |
| Build | Vite 6 | Fast HMR, optimized builds |
| Charts | Recharts | Composable, performant |
| Icons | Lucide React | Consistent, tree-shakeable |

### Backend
| Category | Technology | Rationale |
|----------|-----------|-----------|
| Runtime | Node.js 22 LTS | Non-blocking, ecosystem |
| Framework | Express 5 | Minimal, flexible, proven |
| Alternative | FastAPI | If Python ML integration needed |
| Auth | JWT + bcrypt | Stateless, secure |
| Validation | Zod | Schema validation, TypeScript |
| ORM | Prisma | Type-safe, migrations |

### Database
| Database | Purpose | Configuration |
|----------|---------|---------------|
| PostgreSQL 16 | Primary data | 2GB RAM, SSD storage |
| Redis 7 | Caching/Sessions | 512MB, AOF enabled |
| Pinecone | Vector embeddings | Starter plan for RAG |

### Infrastructure
| Service | Provider | Tier |
|---------|----------|------|
| Hosting | Vercel | Pro ($20/mo) |
| Backend | Railway | Starter ($5/mo) |
| Database | Neon/Supabase | Free tier → Pro |
| Redis | Upstash | Pay-per-use |
| AI | Google Gemini | Pay-per-token |
| Monitoring | Sentry | Free tier |
| Analytics | PostHog | Self-hosted option |

---

## 3. Folder Structure

```
/workspace
├── .env.example
├── .gitignore
├── docker-compose.yml
├── Dockerfile
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vercel.json
├── README.md
├── PRODUCTION_ROADMAP.md
│
├── /src                          # Frontend Source
│   ├── main.tsx
│   ├── App.tsx
│   ├── index.css
│   │
│   ├── /components               # UI Components
│   │   ├── AiDesignAssistant.tsx
│   │   ├── Dashboard.tsx
│   │   ├── EngineeringCalculators.tsx
│   │   ├── SchematicStudio.tsx
│   │   ├── SiteAnalysis.tsx
│   │   ├── TakeoffEstimator.tsx
│   │   ├── SystemCapabilities.tsx
│   │   ├── Sidebar.tsx
│   │   ├── ui/                   # Reusable UI primitives
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Input.tsx
│   │   │   └── Modal.tsx
│   │   └── auth/                 # Auth components
│   │       ├── LoginForm.tsx
│   │       ├── SignupForm.tsx
│   │       └── ProtectedRoute.tsx
│   │
│   ├── /services                 # API clients
│   │   ├── api.ts                # Axios instance
│   │   ├── authService.ts        # Auth API calls
│   │   ├── projectService.ts     # Project CRUD
│   │   └── aiService.ts          # Secure AI proxy calls
│   │
│   ├── /store                    # Zustand stores
│   │   ├── useAuthStore.ts
│   │   ├── useProjectStore.ts
│   │   └── useChatStore.ts
│   │
│   ├── /hooks                    # Custom hooks
│   │   ├── useDebounce.ts
│   │   ├── useLocalStorage.ts
│   │   └── useWebSocket.ts
│   │
│   ├── /types                    # TypeScript types
│   │   ├── api.ts
│   │   ├── project.ts
│   │   └── user.ts
│   │
│   └── /utils                    # Utilities
│       ├── cn.ts                 # Classname merger
│       └── validators.ts         # Form validation
│
├── /server                       # Backend Source (NEW)
│   ├── src
│   │   ├── index.ts              # Entry point
│   │   ├── app.ts                # Express app
│   │   │
│   │   ├── /config               # Configuration
│   │   │   ├── database.ts
│   │   │   ├── redis.ts
│   │   │   └── env.ts
│   │   │
│   │   ├── /controllers          # Route handlers
│   │   │   ├── authController.ts
│   │   │   ├── projectController.ts
│   │   │   ├── aiController.ts
│   │   │   └── userController.ts
│   │   │
│   │   ├── /services             # Business logic
│   │   │   ├── authService.ts
│   │   │   ├── projectService.ts
│   │   │   ├── aiService.ts
│   │   │   └── emailService.ts
│   │   │
│   │   ├── /models               # Prisma models (generated)
│   │   │
│   │   ├── /middleware           # Express middleware
│   │   │   ├── auth.ts
│   │   │   ├── rateLimit.ts
│   │   │   ├── errorHandler.ts
│   │   │   └── validation.ts
│   │   │
│   │   ├── /routes               # API routes
│   │   │   ├── index.ts
│   │   │   ├── auth.routes.ts
│   │   │   ├── project.routes.ts
│   │   │   └── ai.routes.ts
│   │   │
│   │   ├── /validators           # Zod schemas
│   │   │   ├── auth.validator.ts
│   │   │   └── project.validator.ts
│   │   │
│   │   └── /types                # TypeScript types
│   │       └── express.d.ts
│   │
│   ├── prisma
│   │   ├── schema.prisma
│   │   └── migrations/
│   │
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   │
│   ├── package.json
│   ├── tsconfig.json
│   └── Dockerfile
│
├── /docker                       # Docker configs
│   ├── docker-compose.dev.yml
│   └── docker-compose.prod.yml
│
└── /docs                         # Documentation
    ├── API.md
    ├── DEPLOYMENT.md
    └── SECURITY.md
```

---

## 4. Database Schema

### PostgreSQL Schema (Prisma)

```prisma
// server/prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

enum UserRole {
  USER
  ADMIN
  ARCHITECT
}

enum ProjectStatus {
  DRAFT
  IN_REVIEW
  APPROVED
  ARCHIVED
}

model User {
  id            String    @id @default(uuid())
  email         String    @unique
  passwordHash  String
  firstName     String?
  lastName      String?
  role          UserRole  @default(USER)
  avatarUrl     String?
  emailVerified Boolean   @default(false)
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
  lastLoginAt   DateTime?
  
  projects      Project[]
  designs       Design[]
  auditLogs     AuditLog[]
  
  @@index([email])
  @@map("users")
}

model Project {
  id          String        @id @default(uuid())
  name        String
  description String?
  status      ProjectStatus @default(DRAFT)
  address     String?
  latitude    Float?
  longitude   Float?
  area        Float?        // in square meters
  budget      Decimal?
  currency    String        @default("USD")
  
  userId      String
  user        User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  
  designs     Design[]
  calculations Calculation[]
  createdAt   DateTime      @default(now())
  updatedAt   DateTime      @updatedAt
  
  @@index([userId])
  @@index([status])
  @@map("projects")
}

model Design {
  id          String   @id @default(uuid())
  name        String
  type        String   // 'schematic', 'floorplan', 'elevation'
  data        Json     // CAD/BIM data
  thumbnailUrl String?
  version     Int      @default(1)
  
  projectId   String
  project     Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  
  userId      String
  user        User     @relation(fields: [userId], references: [id])
  
  aiMessages  AIMessage[]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  @@index([projectId])
  @@map("designs")
}

model AIMessage {
  id        String   @id @default(uuid())
  role      String   // 'user' | 'assistant' | 'system'
  content   String
  tokens    Int?
  model     String   @default("gemini-pro")
  
  designId  String
  design    Design   @relation(fields: [designId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
  
  @@index([designId])
  @@map("ai_messages")
}

model Calculation {
  id        String   @id @default(uuid())
  type      String   // 'structural', 'hvac', 'electrical', 'cost'
  inputs    Json
  results   Json
  notes     String?
  
  projectId String
  project   Project  @relation(fields: [projectId], references: [id], onDelete: Cascade)
  
  createdAt DateTime @default(now())
  
  @@index([projectId])
  @@map("calculations")
}

model AuditLog {
  id        String   @id @default(uuid())
  action    String
  resource  String
  resourceId String?
  metadata  Json?
  ipAddress String?
  userAgent String?
  
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  
  createdAt DateTime @default(now())
  
  @@index([userId])
  @@index([createdAt])
  @@map("audit_logs")
}

model Session {
  id        String   @id @default(uuid())
  token     String   @unique
  userId    String
  expiresAt DateTime
  
  createdAt DateTime @default(now())
  
  @@index([token])
  @@index([userId])
  @@map("sessions")
}
```

---

## 5. API Structure

### RESTful API Endpoints

```yaml
Base URL: /api/v1

# Authentication
POST   /auth/register          # Register new user
POST   /auth/login             # Login (returns JWT)
POST   /auth/logout            # Logout (invalidate session)
POST   /auth/refresh           # Refresh access token
POST   /auth/forgot-password   # Request password reset
POST   /auth/reset-password    # Reset password with token
GET    /auth/me                # Get current user

# Users
GET    /users/:id              # Get user profile
PUT    /users/:id              # Update user profile
DELETE /users/:id              # Delete account

# Projects
GET    /projects               # List user's projects
POST   /projects               # Create project
GET    /projects/:id           # Get project details
PUT    /projects/:id           # Update project
DELETE /projects/:id           # Delete project
POST   /projects/:id/archive   # Archive project

# Designs
GET    /projects/:id/designs           # List designs
POST   /projects/:id/designs           # Create design
GET    /projects/:id/designs/:designId # Get design
PUT    /projects/:id/designs/:designId # Update design
DELETE /projects/:id/designs/:designId # Delete design
POST   /projects/:id/designs/:designId/export # Export (PDF/DWG)

# AI Assistant
POST   /ai/chat                # Send message to AI
GET    /ai/sessions            # List chat sessions
GET    /ai/sessions/:id        # Get chat history
DELETE /ai/sessions/:id        # Delete session
POST   /ai/analyze             # Analyze uploaded file
POST   /ai/generate            # Generate design from prompt

# Calculators
POST   /calculators/structural # Structural calculation
POST   /calculators/hvac       # HVAC load calculation
POST   /calculators/cost       # Cost estimation
GET    /calculators/history    # Get calculation history

# Site Analysis
GET    /site/coordinates       # Geocode address
GET    /site/zoning            # Get zoning info
GET    /site/climate           # Get climate data
GET    /site/sun-path          # Sun path analysis

# File Upload
POST   /files/upload           # Upload file (images, CAD)
GET    /files/:id              # Get file URL
DELETE /files/:id              # Delete file
```

### Response Format

```typescript
// Success Response
{
  "success": true,
  "data": { /* payload */ },
  "meta": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}

// Error Response
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": [/* validation errors */]
  }
}
```

---

## 6. Frontend Implementation Plan

### Phase 1: Security & Authentication (Week 1)
1. Remove direct API key exposure from `geminiService.ts`
2. Implement auth store with Zustand
3. Create login/signup forms
4. Add protected route wrapper
5. Implement JWT refresh logic

### Phase 2: State Management (Week 1)
1. Replace ad-hoc state with Zustand stores
2. Implement optimistic updates
3. Add offline support with localStorage
4. Create reusable hooks

### Phase 3: Performance Optimization (Week 2)
1. Code splitting by route
2. Lazy load heavy components
3. Optimize bundle size (<300KB target)
4. Implement virtual scrolling for lists
5. Add service worker for caching

### Phase 4: Enhanced UX (Week 2)
1. Add loading skeletons
2. Implement toast notifications
3. Add error boundaries
4. Improve accessibility (a11y)
5. Add keyboard shortcuts

---

## 7. Backend Implementation Plan

### Phase 1: Core Setup (Week 1)
1. Initialize Express + TypeScript project
2. Configure Prisma with PostgreSQL
3. Set up Redis connection
4. Implement JWT authentication
5. Create base middleware stack

### Phase 2: API Development (Week 2)
1. Implement auth endpoints
2. Create CRUD for projects
3. Build AI proxy service
4. Add file upload handling
5. Implement rate limiting

### Phase 3: AI Integration (Week 3)
1. Secure Gemini API integration
2. Implement streaming responses
3. Add RAG with vector database
4. Create conversation memory
5. Build prompt templates

### Phase 4: Production Hardening (Week 3)
1. Add comprehensive logging
2. Implement error tracking (Sentry)
3. Set up health checks
4. Configure CORS properly
5. Add API documentation (OpenAPI)

---

## 8. AI Integration Logic

### Secure AI Proxy Architecture

```typescript
// Frontend: aiService.ts
export async function sendAiMessage(prompt: string, context?: MessageContext) {
  const response = await api.post('/ai/chat', {
    message: prompt,
    context,
    stream: true
  });
  return response.data;
}

// Backend: aiController.ts
export const aiController = {
  async chat(req: Request, res: Response) {
    const { message, context, stream } = req.body;
    const userId = req.user.id;
    
    // 1. Validate input
    const validated = chatValidator.parse({ message, context });
    
    // 2. Check rate limit
    await rateLimiter.check(userId, 'ai_chat');
    
    // 3. Get conversation history
    const history = await getConversationHistory(userId);
    
    // 4. Build enhanced prompt with RAG
    const enhancedPrompt = await buildRagPrompt(message, history);
    
    // 5. Call AI with secure key
    if (stream) {
      res.setHeader('Content-Type', 'text/event-stream');
      const stream = await gemini.generateStream(enhancedPrompt);
      for await (const chunk of stream) {
        res.write(`data: ${JSON.stringify(chunk)}\n\n`);
      }
      res.end();
    } else {
      const response = await gemini.generate(enhancedPrompt);
      
      // 6. Save to database
      await saveMessage(userId, message, response);
      
      res.json({ response });
    }
  }
};

// Backend: aiService.ts
class AIService {
  private gemini: GoogleGenAI;
  private vectorStore: PineconeClient;
  
  constructor() {
    this.gemini = new GoogleGenAI({ 
      apiKey: process.env.GEMINI_API_KEY // Server-side only!
    });
    this.vectorStore = new PineconeClient({
      apiKey: process.env.PINECONE_API_KEY
    });
  }
  
  async buildRagPrompt(userMessage: string, history: Message[]) {
    // Embed user message
    const embedding = await this.embed(userMessage);
    
    // Search relevant documents
    const docs = await this.vectorStore.query({
      vector: embedding,
      topK: 3,
      filter: { userId: history[0]?.userId }
    });
    
    // Build context
    const context = docs.map(d => d.metadata.content).join('\n\n');
    
    return `
SYSTEM: You are ArcSystem PRO, an expert architectural AI.
CONTEXT: ${context}
HISTORY: ${JSON.stringify(history.slice(-5))}
USER: ${userMessage}
    `.trim();
  }
}
```

### Prompt Engineering Strategy

```typescript
const SYSTEM_PROMPTS = {
  architect: `You are ArcSystem PRO, a senior architect with 20+ years experience.
Expertise: Building codes (IBC 2024), sustainable design (LEED), structural systems.
Style: Professional, precise, actionable recommendations.
Format: Use markdown with clear sections, tables for comparisons.`,

  engineer: `You are a structural engineer specializing in residential/commercial.
Expertise: Load calculations, material selection, foundation design.
Standards: ASCE 7, ACI 318, AISC 360.
Output: Show calculations step-by-step with safety factors.`,

  cost_estimator: `You are a construction cost estimator.
Data Sources: RSMeans 2024, local market rates.
Output: Detailed BOQ with labor, materials, equipment.
Include: Contingency (10%), overhead (15%), profit margin (10%).`
};
```

---

## 9. Deployment Instructions

### Development Environment

```bash
# 1. Clone and install
git clone <repo>
cd workspace
npm install

# 2. Set up environment
cp .env.example .env
# Edit .env with your values

# 3. Start databases (Docker)
docker-compose -f docker/docker-compose.dev.yml up -d

# 4. Run migrations
cd server
npx prisma migrate dev

# 5. Start backend
npm run dev:server

# 6. Start frontend (new terminal)
npm run dev
```

### Production Deployment (Vercel + Railway)

#### Frontend (Vercel)
```bash
# 1. Install Vercel CLI
npm i -g vercel

# 2. Deploy
vercel --prod

# 3. Set environment variables in Vercel dashboard
NEXT_PUBLIC_API_URL=https://api.yourdomain.com
```

#### Backend (Railway)
```bash
# 1. Install Railway CLI
npm i -g @railway/cli

# 2. Deploy
railway up

# 3. Add environment variables
railway variables set \
  DATABASE_URL=... \
  REDIS_URL=... \
  GEMINI_API_KEY=... \
  JWT_SECRET=...
```

#### Database (Neon/Supabase)
```bash
# Using Neon (Serverless PostgreSQL)
# 1. Create project at neon.tech
# 2. Get connection string
# 3. Set DATABASE_URL in Railway

# Using Supabase
# 1. Create project at supabase.com
# 2. Run SQL migrations
# 3. Get connection string
```

### Docker Deployment (Alternative)

```yaml
# docker-compose.prod.yml
version: '3.8'

services:
  frontend:
    build:
      context: .
      dockerfile: Dockerfile.frontend
    ports:
      - "80:80"
    depends_on:
      - backend

  backend:
    build:
      context: ./server
      dockerfile: Dockerfile
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://...
      - REDIS_URL=redis://redis:6379
    depends_on:
      - postgres
      - redis

  postgres:
    image: postgres:16-alpine
    volumes:
      - postgres_data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=arcsystem
      - POSTGRES_USER=arcsystem
      - POSTGRES_PASSWORD=${DB_PASSWORD}

  redis:
    image: redis:7-alpine
    volumes:
      - redis_data:/data

volumes:
  postgres_data:
  redis_data:
```

```bash
# Deploy with Docker
docker-compose -f docker/docker-compose.prod.yml up -d
```

---

## 10. Security Considerations

### Critical Security Measures

#### 1. Authentication & Authorization
```typescript
// JWT Configuration
const jwtConfig = {
  secret: process.env.JWT_SECRET!, // 256-bit random
  expiresIn: '15m', // Access token
  refreshExpiresIn: '7d', // Refresh token
  algorithm: 'HS256'
};

// Password Hashing
const saltRounds = 12; // bcrypt
const hash = await bcrypt.hash(password, saltRounds);
```

#### 2. Input Validation (Zod)
```typescript
const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128)
});

const projectSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().max(500).optional(),
  latitude: z.number().min(-90).max(90).optional(),
  longitude: z.number().min(-180).max(180).optional()
});
```

#### 3. Rate Limiting
```typescript
import rateLimit from 'express-rate-limit';
import RedisStore from 'rate-limit-redis';

const limiter = rateLimit({
  store: new RedisStore({
    sendCommand: (...args) => redisClient.sendCommand(args),
  }),
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // 100 requests per IP
  message: 'Too many requests, please try again later'
});

// Stricter limits for AI endpoints
const aiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 10, // 10 AI requests per minute
});
```

#### 4. CORS Configuration
```typescript
app.use(cors({
  origin: process.env.FRONTEND_URL, // Strict whitelist
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

#### 5. Security Headers (Helmet)
```typescript
import helmet from 'helmet';

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
```

#### 6. SQL Injection Prevention
- ✅ Using Prisma ORM (parameterized queries)
- ✅ No raw SQL without proper escaping

#### 7. XSS Prevention
- ✅ React escapes by default
- ✅ Sanitize HTML with DOMPurify if needed
- ✅ Content-Security-Policy header

#### 8. CSRF Protection
```typescript
import csurf from 'csurf';

app.use(csurf({ cookie: true }));
```

#### 9. Environment Variables
```bash
# NEVER commit these
GEMINI_API_KEY=sk_...
DATABASE_URL=postgresql://...
JWT_SECRET=<256-bit-random>
REDIS_URL=redis://...
ENCRYPTION_KEY=<32-byte-random>
```

---

## 11. Performance Optimizations

### Frontend Optimizations

#### 1. Bundle Size Reduction
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          charts: ['recharts'],
          motion: ['motion'],
          markdown: ['react-markdown']
        }
      }
    },
    target: 'esnext',
    minify: 'esbuild'
  }
});
```

#### 2. Code Splitting
```tsx
// Lazy load routes
const AiDesignAssistant = lazy(() => import('./components/AiDesignAssistant'));
const SchematicStudio = lazy(() => import('./components/SchematicStudio'));

// In router
<Suspense fallback={<LoadingSkeleton />}>
  <AiDesignAssistant />
</Suspense>
```

#### 3. Image Optimization
```tsx
// Use WebP with fallback
<picture>
  <source srcSet={webpUrl} type="image/webp" />
  <img src={jpgUrl} alt="Design" loading="lazy" />
</picture>
```

#### 4. Virtual Scrolling
```tsx
// For long message lists
import { useVirtualizer } from '@tanstack/react-virtual';

const virtualRowRef = useRef(null);
const virtualizer = useVirtualizer({
  count: messages.length,
  getScrollElement: () => virtualRowRef.current,
  estimateSize: () => 100,
});
```

### Backend Optimizations

#### 1. Database Indexing
```prisma
@@index([userId])
@@index([status])
@@index([createdAt])
```

#### 2. Query Optimization
```typescript
// Select only needed fields
const projects = await prisma.project.findMany({
  where: { userId },
  select: { id: true, name: true, status: true, updatedAt: true }
});

// Use include sparingly
const project = await prisma.project.findUnique({
  where: { id },
  include: { designs: { take: 5 } } // Limit relations
});
```

#### 3. Caching Strategy
```typescript
// Redis caching
async function getCachedProject(id: string) {
  const cached = await redis.get(`project:${id}`);
  if (cached) return JSON.parse(cached);
  
  const project = await prisma.project.findUnique({ where: { id } });
  await redis.setex(`project:${id}`, 300, JSON.stringify(project)); // 5 min TTL
  return project;
}
```

#### 4. Connection Pooling
```typescript
// Prisma connection pool
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: DATABASE_URL,
    },
  },
  log: ['query', 'info', 'warn', 'error'],
});
```

#### 5. Streaming Responses
```typescript
// Stream AI responses
res.setHeader('Content-Type', 'text/event-stream');
res.setHeader('Cache-Control', 'no-cache');
res.setHeader('Connection', 'keep-alive');

for await (const chunk of aiStream) {
  res.write(`data: ${JSON.stringify(chunk)}\n\n`);
}
```

---

## 12. Testing Strategy

### Test Pyramid

```
        /\
       /  \      E2E Tests (10%)
      /____\     Playwright/Cypress
     /      \
    /        \   Integration Tests (20%)
   /__________\  Supertest + Test DB
  /            \
 /              \ Unit Tests (70%)
/________________\ Jest + Vitest
```

### Unit Tests (Frontend)

```typescript
// __tests__/useAuthStore.test.ts
import { renderHook, act } from '@testing-library/react';
import { useAuthStore } from '../store/useAuthStore';

describe('useAuthStore', () => {
  it('should update user on login', async () => {
    const { result } = renderHook(() => useAuthStore());
    
    await act(async () => {
      await result.current.login('test@example.com', 'password');
    });
    
    expect(result.current.user).toEqual({
      email: 'test@example.com',
      isAuthenticated: true
    });
  });
});
```

### Unit Tests (Backend)

```typescript
// tests/unit/auth.service.test.ts
import { AuthService } from '../../src/services/authService';

describe('AuthService', () => {
  describe('register', () => {
    it('should create user with hashed password', async () => {
      const authService = new AuthService();
      const user = await authService.register({
        email: 'test@example.com',
        password: 'SecurePass123!'
      });
      
      expect(user.email).toBe('test@example.com');
      expect(user.passwordHash).not.toBe('SecurePass123!');
    });
    
    it('should throw error for duplicate email', async () => {
      await authService.register({ email: 'dup@test.com', password: 'pass' });
      
      await expect(
        authService.register({ email: 'dup@test.com', password: 'pass' })
      ).rejects.toThrow('Email already exists');
    });
  });
});
```

### Integration Tests

```typescript
// tests/integration/auth.test.ts
import request from 'supertest';
import { app } from '../../src/app';

describe('POST /api/v1/auth/login', () => {
  it('should return JWT on valid credentials', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'test@example.com', password: 'password' });
    
    expect(response.status).toBe(200);
    expect(response.body.data).toHaveProperty('accessToken');
    expect(response.body.data).toHaveProperty('refreshToken');
  });
  
  it('should return 401 on invalid credentials', async () => {
    const response = await request(app)
      .post('/api/v1/auth/login')
      .send({ email: 'wrong@example.com', password: 'wrongpass' });
    
    expect(response.status).toBe(401);
    expect(response.body.error.code).toBe('INVALID_CREDENTIALS');
  });
});
```

### E2E Tests (Playwright)

```typescript
// tests/e2e/auth.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Authentication Flow', () => {
  test('should register and login successfully', async ({ page }) => {
    // Register
    await page.goto('/signup');
    await page.fill('[name="email"]', 'e2e@test.com');
    await page.fill('[name="password"]', 'TestPass123!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
    
    // Logout
    await page.click('[data-testid="logout-btn"]');
    await expect(page).toHaveURL('/login');
    
    // Login
    await page.fill('[name="email"]', 'e2e@test.com');
    await page.fill('[name="password"]', 'TestPass123!');
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL('/dashboard');
  });
});
```

### Test Commands

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

---

## 13. Future Scalability Recommendations

### Short-term (1-3 months)
1. **Implement CQRS Pattern**: Separate read/write operations for better scaling
2. **Add Message Queue**: RabbitMQ/Kafka for async tasks (emails, file processing)
3. **Horizontal Scaling**: Deploy multiple backend instances behind load balancer
4. **CDN Integration**: Serve static assets via Cloudflare/Vercel Edge

### Medium-term (3-6 months)
1. **Microservices Architecture**: Split into services (Auth, Projects, AI, Files)
2. **Event Sourcing**: Track all state changes for audit and recovery
3. **GraphQL API**: Add alongside REST for flexible querying
4. **Multi-region Deployment**: Reduce latency for global users

### Long-term (6-12 months)
1. **Kubernetes Orchestration**: Auto-scaling based on load
2. **Service Mesh**: Istio for service-to-service communication
3. **Edge Computing**: Run AI inference at edge locations
4. **Real-time Collaboration**: WebSocket-based multi-user editing

### Monitoring & Observability

```typescript
// Sentry integration
import * as Sentry from '@sentry/node';

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1, // 10% sampling
});

// Prometheus metrics
import promClient from 'prom-client';

const httpRequestDuration = new promClient.Histogram({
  name: 'http_request_duration_seconds',
  help: 'Duration of HTTP requests',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.1, 0.5, 1, 2, 5]
});
```

---

## 14. Development Style Guide

### Code Principles

1. **SOLID Principles**
   - Single Responsibility: Each module does one thing well
   - Open/Closed: Extend behavior without modifying existing code
   - Liskov Substitution: Subtypes must be substitutable
   - Interface Segregation: Many specific interfaces > one general
   - Dependency Inversion: Depend on abstractions, not concretions

2. **TypeScript Best Practices**
   ```typescript
   // ✅ Good: Explicit types, strict mode
   interface User {
     id: string;
     email: string;
     role: UserRole;
   }
   
   // ❌ Bad: Any type, implicit returns
   const getUser = (id: any) => {
     return fetch(`/api/users/${id}`);
   }
   ```

3. **Error Handling**
   ```typescript
   // ✅ Good: Structured errors
   class AppError extends Error {
     constructor(
       public code: string,
       public status: number,
       message: string
     ) {
       super(message);
     }
   }
   
   // Usage
   throw new AppError('NOT_FOUND', 404, 'Project not found');
   ```

4. **Naming Conventions**
   - Files: PascalCase for components, camelCase for utilities
   - Functions: Verbs for actions, nouns for data
   - Constants: UPPER_SNAKE_CASE
   - Types/Interfaces: PascalCase

5. **Documentation**
   - JSDoc for public APIs
   - README for modules
   - Inline comments for complex logic only

---

## Conclusion

This architecture transforms ArcSystem PRO from a vulnerable frontend prototype into a production-ready, scalable platform. Key improvements:

✅ **Security**: Server-side API keys, JWT auth, input validation  
✅ **Scalability**: Horizontal scaling, caching, database optimization  
✅ **Maintainability**: Clean architecture, TypeScript, testing  
✅ **Performance**: Code splitting, streaming, CDN  
✅ **Reliability**: Error handling, monitoring, backups  

**Next Steps:**
1. Implement authentication system (Priority: CRITICAL)
2. Move AI calls to backend proxy (Priority: CRITICAL)
3. Set up database with Prisma (Priority: HIGH)
4. Add comprehensive testing (Priority: MEDIUM)
5. Optimize bundle size (Priority: MEDIUM)

Estimated timeline: 3-4 weeks for full production readiness.
