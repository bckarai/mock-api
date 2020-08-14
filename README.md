Add the following lines to your docker-compose file

  mock-api:
    image: node:12.18.3-buster
    command: bash -c "cd app; npm install --save express && npm install --save request && npm install --save nodemon && npx nodemon server.js"
    volumes:
      - ./mock-api:/app
