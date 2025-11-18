# RAG 교육 플랫폼 Docker 설정
# Multi-stage build for optimization

# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /app

# 의존성 복사 및 설치
COPY package*.json ./
RUN npm ci

# 소스 코드 복사
COPY . .

# 빌드
RUN npm run build

# Stage 2: Runtime
FROM node:18-alpine

WORKDIR /app

# 운영 환경 설정
ENV NODE_ENV=production

# 빌드된 파일 복사
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# healthcheck 추가
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD node -e "require('http').get('http://localhost:3000', (r) => {if (r.statusCode !== 200) throw new Error(r.statusCode)})"

# 포트 노출
EXPOSE 3000

# 실행
CMD ["node", "server.js"]
