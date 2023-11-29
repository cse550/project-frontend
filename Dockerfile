FROM node:iron-bullseye AS base

FROM base AS install-deps
WORKDIR /src/project-frontend
ADD ./package.json ./package-lock.json ./
ARG NPM_REGISTRY=https://registry.npmjs.org/
RUN npm install --registry ${NPM_REGISTRY}

FROM install-deps AS build
ADD ./index.html ./*.config.js .eslintrc.cjs ./
ADD ./src ./src
ADD ./public ./public
RUN npm run build

FROM build AS install
EXPOSE 3000
ENV FRONTEND_INSTALL_PREFIX=/opt/project-frontend
CMD npm exec vite
RUN mkdir -p ${FRONTEND_INSTALL_PREFIX} \
  && cp -r ./package.json ./node_modules vite.config.js ./dist ${FRONTEND_INSTALL_PREFIX}
WORKDIR ${FRONTEND_INSTALL_PREFIX}
RUN rm -rf /src/project-frontend
