FROM node:18.16.0-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
WORKDIR /app

# Bundle app source
COPY . .

RUN npm install

# EXPOSE 8080
CMD [ "node", "App.js" ]


# FROM node:18.14.0-alpine

# # Create app directory
# RUN mkdir -p /usr/src/app
# WORKDIR /usr/src/app

# # Install app dependencies
# COPY package.json /usr/src/app/
# # RUN npm install

# # Bundle app source
# COPY . /usr/src/app

# # Bundle app source
# COPY . .

# # EXPOSE 8080
# CMD [ "node", "App.js" ]

