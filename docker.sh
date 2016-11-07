#!/bin/sh
printf "removing previous toolkits\n"
docker rm hyperty-toolkit

sleep 2

DOMAIN=""
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
PARENTDIR="$(dirname "$DIR")"
DEVHPERTY="$(cd $PARENTDIR"/dev-hyperty" && pwd)"

while IFS='=' read -r line || [[ -n "$line" ]]; do
    IFS='=' read -r -a array <<< "$line"
    # echo "Text read from file:  $line"
    if [ ${array[0]} = "DOMAIN" ]
    then
      DOMAIN="${array[1]}"
    fi

done < "./env"

echo "$DEVHPERTY"

printf "start up the hyperty toolkit container\n"
docker run \
  -it \
  --env-file=env \
  --add-host catalogue.$DOMAIN:127.0.0.1 \
  --add-host $DOMAIN:127.0.0.1 \
  -v $DEVHPERTY:/tmp/dev-hyperty \
  --name hyperty-toolkit \
  --expose 443 \
  vitormtsilva/dev-hyperty-toolkit
