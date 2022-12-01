# Builders Challenges
Builders challenges for ready engineering candidates

## Getting setup

### 1. Clone this repository
```
git clone https://github.com/ready/builders-challenge.git
```

### 2. Setup backend
1. Navigate to backend directory
  - `cd backend` (assuming current working directory is builders-challenge)

2. Install [docker](https://docs.docker.com/get-docker/)

3. Start docker

4. Start postgres and redis with docker compose
  - `docker compose up`

5. Copy `.env.keep` to `.env`
  - `cp .env.keep .env`

6. Install npm dependencies
  - `npm i`

7. Run knex postgres migrations 
  - `npm run knex migrate:latest`

8. Start graphql webserver
  - `npm run dev`

### 3. Setup frontend
1. Navigate to frontend directory
  - `cd frontend` (assuming current working directory is builders-challenge)
2. Install npm dependencies
  - `npm i`
3. Start development server
  - `npm run dev`

### 4. Complete applicable challenges
- Make changes to the codebase needed to satisfy task requirements
- Your builders challenge invitation email should specify which challenges concern you

### 5. Submit your changes
- Ensure that running `npm run ci` passes in both the frontend and backend directories
- Complete your selected challenges by zipping up your local repository and replying to builders challenge invitation email with your zipped repository attatched

## Challenges

### Backend
- [⚙️ Implement user CRUD resolvers](https://github.com/ready/builders-challenge/issues/4)
- [⚙️ Implement user authentication](https://github.com/ready/builders-challenge/issues/5)
- [⚙️ Implement a redis resolver cache](https://github.com/ready/builders-challenge/issues/6)
- [⚙️ Implement usersWithinBoundingBox resolver](https://github.com/ready/builders-challenge/issues/8)

### Frontend
- [🐞 Answers from quiz don't display in results page](https://github.com/ready/builders-challenge/issues/13)
- [🛠 Create a grid view of all Star Wars spaceships](https://github.com/ready/builders-challenge/issues/9)
- [⚙️ Create a utility function to standardize how network requests are handled](https://github.com/ready/builders-challenge/issues/10)
- [🛠 Add input validation to the Quiz](https://github.com/ready/builders-challenge/issues/14)
- [⚙️ Add automated testing for the Quiz](https://github.com/ready/builders-challenge/issues/15)

## Completing these challenges
- Clone this repository
- Complete the challenges in question
- Write a textual file explaning your changes and include it in the corresponding challenge subdirectory
- Zip up your local repository and reply to builders challenge invitation email with your zipped repository attatched

## Adding a new challenge
- Make any changes to existing files and templates needed to complete the challenge
- Write a detailed GitHub issue on how to complete the challenge and any additional initial setup instructions
