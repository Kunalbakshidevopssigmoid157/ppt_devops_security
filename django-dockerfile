FROM nginx:latest

# Remove the default nginx index.html file
RUN rm /usr/share/nginx/html/index.html

# Copy the project files into the nginx document root directory
COPY project /usr/share/nginx/html


RUN apt-get install -y openssl

RUN openssl genrsa -out private.key 2048

# Additional steps for your Docker image configuration

RUN chmod 600 /app/private.key

ENV DOCKER_CONTENT_TRUST=1

EXPOSE 8000
