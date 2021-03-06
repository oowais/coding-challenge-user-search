# Coding Challenge GitHub User Search

## Online Demo:

### Access demo of this project [here](https://reverent-minsky-7484a4.netlify.app/)

## Steps to run locally:

> prerequisites: npm and ng

In the root of repo, open terminal.

- `npm install` to install dependencies.
- `ng serve` for dev server.
- Navigate to `http://localhost:4200/`.

> This project was generated with  
> Angular CLI version: 12.2.9  
> NPM version: 8.0.0  
> Node version: 14.18.0

## DOCKER! In case Angular CLI is not installed, this project is dockerized.
> Docker version 20.10.10, build b485636

###  Run prebuilt image
- `docker pull wingdoc/coding-challenge:latest`.

### Or build docker image locally

- In the root of repo, open terminal.
- `docker build -t wingdoc/coding-challenge .`.
 > Don't forget the dot at the end of command
- You can view the created image via `docker images` command.

### To run docker image (either pulled or self-built) in a container
- `docker run -d -it -p80:80/tcp --name cc-container wingdoc/coding-challenge:latest`.
- Goto `localhost` in browser to view the application.
- To terminate the container type `docker stop cc-container`.

## Workflow

### Instructions

- [X] The user should be able to type a username.
- [X] The input should have validation (No empty values allowed).
- [X] The user should be able to submit the form.
- [X] The results view should show some information about the searched user (image, first name and last name as a
  minimum).

### Bonus

- [X] The route of the results page contains the username which allows the user to access the results page directly if
  they have the username (e.g. /results/example_user)
- [X] Error handling
- [ ] Use the VueJS framework

### General guidelines

- [X] Use any framework, library or API you like
- [X] The code should be readable and clearly commented when needed
- [X] The project should be pushed to a public github repository
- [X] README.md should contain project documentation (how to run and build the project locally from scratch, project
  structure, gotchas,... anything worth mentioning)
- [X] The UI should be responsive

## Info

- Project contains two main component, `SearchComponent` and `UserDetailsComponent`.
- `SearchComponent` is the first view where the user can enter a GitHub username.
- Empty string validation is performed in `SearchComponent`.
- `UserDetailsComponent` is the second view where the user can see the details of the entered username.
- Error handing is done in `UserDetailsComponent`.
- Routing is handled by `app-routing.module.ts` in `src/app` folder.
- A model of user attributes is handled by `User` interface. in `src/app/model/user.ts`.
- `Data.service` handles the REST GET call for GitHub API.
- The GitHub api has a limit of calls per minute, so please don't spam searches. Otherwise, it will be blocked on that
  public ip address and unblocked sometime later.

