FROM node:latest
COPY . .
RUN npm install 
EXPOSE 5999
CMD ["node","index.js"]