FROM node:22-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN npm run build -- --configuration production
RUN ls -la /app/dist

FROM nginx:1.25-alpine
COPY --from=builder /app/dist/Front/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80