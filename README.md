# Builders Challenges

Take home coding challenges for ready engineering candidates

[![Join the chat at https://gitter.im/builders-challenge/community](https://badges.gitter.im/builders-challenge/community.svg)](https://gitter.im/builders-challenge/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Getting setup

### 1. Clone this repository
```
git clone https://github.com/ready/builders-challenge.git
```
**No need for backend or frontend set up for Data and Analysis challenges.**

### 2. Setup backend
1. Navigate to backend directory
  - `cd backend` (assuming current working directory is builders-challenge)

2. Install [docker](https://docs.docker.com/get-docker/)

3. Start docker

4. Copy `.env.keep` to `.env`
  - `cp .env.keep .env`

5. Start postgres and redis with docker compose
  - `docker compose up`

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

### Fullstack
- [⚙️ Dynamic Map Rendering & Filtering](https://github.com/ready/builders-challenge/issues/42)

### Data
- [⚙️ Move address coordinates to their associated building structure (level 1-2)](https://github.com/ready/builders-challenge/issues/18)
- [⚙️ ISP plan by zip code (level 1-2)](https://github.com/ready/builders-challenge/issues/21)
- [🛠 Address database optimization for fast dynamic tiling (level 2-3)](https://github.com/ready/builders-challenge/issues/39#issue-1906345312)

### Analysis
- [Classify unserved project areas](https://github.com/ready/builders-challenge/issues/27)

## Completing these challenges
- Clone this repository
- Complete the challenges in question
- Write a textual file explaning your changes and include it in the corresponding challenge subdirectory
- Zip up your local repository and reply to builders challenge invitation email with your zipped repository attatched

## Adding a new challenge
- Make any changes to existing files and templates needed to complete the challenge
- Write a detailed GitHub issue on how to complete the challenge and any additional initial setup instructions

## Sending these challenges to a candidate
### Template message
Hi [CANDIDATE],

You've been invited to complete a take home coding challenge designed to evaluate your general familiarity with the technologies we use, how you work, your process for problem solving, ability to adhere to standards, and ability to complete scale tasks similar to those you'd encounter on the job. These challenges are open ended on purpose, you are free to modify the template code and include additional dependencies as long as your solutions address the challenges you have selected to complete. 

The repository and instructions for setup can be found at [https://github.com/ready/builders-challenge](https://github.com/ready/builders-challenge). There are 4 backend challenges, 5 frontend challenges, and 1 data challenge which can be found at [https://github.com/ready/builders-challenge/issues](https://github.com/ready/builders-challenge/issues). Which challenges you complete is up to you however keep in mind some have dependent relationships requiring you to complete the prerequisite challenge before attempting. If you have any questions, concerns, or issues that arise during the completion of these challenges members of the Ready engineering team will be standing by to help in a private Gitter room. Create or sign into your Gitter account [here](https://gitter.im/login?action=login), email us your username and we'll create your room.

Best of luck and we hope to hear from you soon,

[SENDER]
