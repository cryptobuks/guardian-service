FROM node:latest
# Copy app
COPY . /home/simplicy.io/guardian-service
WORKDIR /home/simplicy.io/
RUN cd guardian-service \
  && yarn \
  && yar build \
  && yarn install --only=production

FROM node:slim
# Install dependencies
RUN apt-get update \
  && apt-get install -y gettext-base \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# Setup docker-entrypoint
COPY docker/docker-entrypoint.sh usr/local/bin/docker-entrypoint.sh
RUN ln -s usr/local/bin/docker-entrypoint.sh / # backwards compat

# Add non root user
RUN useradd -ms /bin/bash simplicy.io
WORKDIR /home/simplicy.io/guardian-service
COPY --from=0 /home/simplicy.io/guardian-service .

RUN chown -R simplicy.io:simplicy.io /home/simplicy.io

# set project directory
WORKDIR /home/simplicy.io/guardian-service

# Expose port
EXPOSE 8100

USER simplicy.io

ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["start"]