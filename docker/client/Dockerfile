FROM node:14.15.0 as build

# install dependencies
WORKDIR /app
COPY . .
RUN npm install

RUN npm run build

EXPOSE 3000
CMD ["node", "./build/index.js"]
