# We use the official image as a parent image.
FROM node:10-alpine

#-p flag makes parent directories if needed
RUN mkdir -p /home/node/app/backend/node_modules && mkdir -p /home/node/app/frontend/node_modules
#change owners recursively of the folder
RUN chown -R node:node /home/node/app

# Set the working directory.
WORKDIR /home/node/app

# Copy the file(s) from your host to your current location.
COPY backend/package*.json ./backend/
COPY frontend/package*.json ./frontend/

# Change the user to node. This will apply to both the runtime user and the following commands.
USER node

# Run the command inside your image filesystem to install ALL dependencies.
# go into backend and install dependencies
WORKDIR /home/node/app/backend
RUN npm install
#copy backend to dest
COPY --chown=node:node ./backend .
# go into frontend and install dependencies
WORKDIR /home/node/app/frontend
RUN npm install
#copy frontend to dest
COPY --chown=node:node ./frontend .

#build website (working dir still set to front end)
RUN ./node_modules/.bin/ng build

#copy rest of SE7 folder e.g. waitfor script!
WORKDIR /home/node/app
COPY --chown=node:node . .

#if the wait-for.sh isnt executable on your local computer itll be copied to alpine like that, either make it executable on your local machine or uncomment out the below line
#RUN chmod +x wait-for.sh

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 3000

# Run the specified command within the container, start the backend server
CMD [ "node", "/home/node/app/backend/app.js" ]