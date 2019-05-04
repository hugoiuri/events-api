FROM node:10.15.3-alpine as builder
WORKDIR /opt/events-api
COPY . /opt/events-api
RUN npm i --production

FROM node:10.15.3-alpine  
RUN apk --no-cache add ca-certificates
WORKDIR /opt/events-api
COPY --from=builder /opt/events-api .
ENTRYPOINT ["node", "./src/index.js"]