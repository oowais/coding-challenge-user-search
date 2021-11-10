# Coding Challenge Github User Search

### Steps to run locally:

> prerequisites: npm and ng

- Go to root of folder.
- Execute `npm install` in command.
- Execute `ng serve` in command for dev server.
- Navigate to `http://localhost:4200/`.

> This project was generated with  
> Angular CLI version: 12.2.9  
> NPM version: 8.0.0  
> Node version: 14.18.0


### In case Angular CLI is not installed, this project is dockerized.
>Docker version 20.10.10, build b485636
- Clone the repository locally.
- In the root of repo, open terminal.
- Execute `docker build -t <image-name> .`
> `<image-name>` can be anything. I used `coding-challenge`. Thus, the command looked like:  
- `docker build -t coding-challenge .`
> Don't forget the dot at the end of command.
- You can view the created image via `docker images` command.
- Now, to make a container from this image run the following command. Here I used the container name same as image name via `--name` parameter.
- `docker run -d -it -p80:80/tcp --name coding-challenge coding-challenge:latest`
- Goto `localhost` to view the application.
- To terminate the container type `docker stop coding-challenge`


### Info

- Routing is handled by `app-routing.module.ts` in `src/app` folder.
- Error handing is done in `UserDetailsComponent`.
