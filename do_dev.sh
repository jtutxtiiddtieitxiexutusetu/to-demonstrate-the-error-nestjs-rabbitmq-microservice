#!/bin/bash -li

docker_compose='docker compose -f docker-compose.yml' ;

$docker_compose build ;
$docker_compose up -d ;

mate-terminal --title "one-service" -e "bash -li -c '$docker_compose exec one-service bash ;'"
mate-terminal --title "two-service" -e "bash -li -c '$docker_compose exec two-service bash ;'"

trap ctrl_c INT

function ctrl_c() {
    $docker_compose down ;
    exit ;
}

echo -e "\nPress Ctrl+C to shut down"
while true; do read; done;
