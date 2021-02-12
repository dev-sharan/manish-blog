FROM gitpod/workspace-full:latest

RUN nvm install 12.20.2 / 
    nvm alias default 12.20.2 /
    npm i -g @angular/cli

