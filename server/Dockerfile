FROM node:22-alpine

ENV MODE=DEVELOPMENT
ENV MONGO_URI=mongodb://fv-mongo:27017/fontverse
ENV SERVER_URL=https://font-verse-api.onrender.com
ENV CLIENT_URL=https://fontverse.vercel.app

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "app.js" ]