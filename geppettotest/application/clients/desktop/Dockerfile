FROM node:10.16.3-alpine AS builder
WORKDIR /Geppettoapp
COPY . /Geppettoapp
RUN npm install -g @angular/cli
RUN npm install
RUN npm rebuild node-sass
RUN ng build 

# ngnix 
FROM nginx
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /Geppettoapp/dist/GeppettoBuilder /usr/share/nginx/html
COPY /nginx /etc/nginx/conf.d/
CMD ["nginx", "-g", "daemon off;"]  