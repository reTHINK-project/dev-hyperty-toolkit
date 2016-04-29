FROM node
MAINTAINER vitor-t-silva@telecom.pt

RUN mkdir -p /toolkit

# Change the work directory
WORKDIR /toolkit

ENV PATH=/toolkit/node_modules/.bin:$PATH

# Copy package.json
COPY package.json /toolkit/

# Install app dependencies
RUN npm install && npm update

# Copy all structure
COPY . /toolkit/

# Start the gulp server task
ENTRYPOINT gulp server --production

# Expose HTTPS Port
EXPOSE 443
