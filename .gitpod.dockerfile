FROM gitpod/workspace-full:latest

RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
RUN nvm install 12.20.2 \
    nvm alias default 12.20.2 \
    npm i -g @angular/cli

