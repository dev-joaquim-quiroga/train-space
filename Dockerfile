### STAGE 1: Build ###

# image
FROM node:12.16-alpine AS build

# read params
ARG APP_MODE

# print environment
RUN echo "APP_MODE = $APP_MODE"

# work directory
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

# copy project into docker image
COPY . ./

# production or development environment
RUN if [ "$APP_MODE" = "master" ]; then npm run build:prod; elif [ "$APP_MODE" = "staging" ]; then npm run build:staging; else npm run build; fi

### STAGE 2: Run ###

# image

FROM nginx:1.17-alpine

# copy configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# copy project
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# expose port
EXPOSE 80
