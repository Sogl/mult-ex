FROM node:latest
MAINTAINER New World Code "hello@newworld.codes"

# It's a dev image.
ENV NODE_ENV development

# Update the image.
RUN apt-get -qq update

# Create an archive of the code in our repo,
# not including installed dependencies.
RUN git clone \
  # Which branch?
  -b master \

  # The code location
  https://github.com/newworldcode/multicolour-example.git \

  # Where to clone it to.
  /var/www/multicolour-example

# Install dependencies.
RUN npm i

# Run node.
CMD ["node" "index.js"]

# Expose the port we want.
EXPOSE 1811
