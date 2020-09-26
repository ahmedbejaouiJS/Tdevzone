FROM node:12
# node:12 is what our application need to run
# if you have python application then you will need to change that
# Create app directory
WORKDIR /usr/src/app

# Install app dependencies

# here we will copy package*.json to /usr/src/app directory inside the docker container
# to work with the next step 
COPY package*.json ./

# run this command to install all package inside the container
RUN npm install 

# copy app source code to /usr/src/app directory after the install
COPY . .

# here we expose port 3000 to out side of docker container
# this called as port forwarding
EXPOSE 3000
# the last step is run the app command so when you run this image it will run the code
CMD [ "node", "index.js" ]