FROM node:12

ARG api_domain_path=http://localhost:3000
ENV GQL_API_DOMAIN=${api_domain_path}

WORKDIR /app
ADD . /app

RUN yarn
RUN rm -rf dist && yarn build:prod:docker
RUN yarn install --production --ignore-scripts --prefer-offline
RUN rm -rf src

EXPOSE 3000

CMD ["yarn","start"]