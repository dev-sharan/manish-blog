FROM gitpod/workspace-full:latest

RUN nvm install 12.20.2
RUN nvm set default 12.20.2
RUN npm -i @angular/cli

