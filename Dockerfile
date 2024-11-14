# Use a Node.js base image
FROM node:14

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the app files
COPY . .

# Build the app (if applicable, e.g., for React apps)
RUN npm run build

# Expose the port (adjust if your app runs on a different port)
EXPOSE 3000

# Run the app
CMD ["npm", "start"]
