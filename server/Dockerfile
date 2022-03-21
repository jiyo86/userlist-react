# Use a lighter version of Node as a parent image
FROM node:alpine
# Set the working directory to /server
WORKDIR /server
# copy package.json into the container at /server
COPY package*.json /server/
COPY tsconfig.json ./
COPY src ./src

# install dependencies
RUN npm install
# Copy the current directory contents into the container at /server
COPY . /server/
# Make port 8080 available to the world outside this container
EXPOSE 8080
# Run the app when the container launches
CMD ["npm", "start"]
