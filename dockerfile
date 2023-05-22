FROM nginx:latest

# Remove the default nginx index.html file
RUN rm /usr/share/nginx/html/index.html

# Copy the project files into the nginx document root directory
COPY private.key /path/to/private.key


RUN chmod 400 /path/to/private.key



ENV DOCKER_CONTENT_TRUST=1

COPY project /usr/share/nginx/html

