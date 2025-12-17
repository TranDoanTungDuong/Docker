@echo off
REM Script để quản lý Docker containers

if "%1"=="build" (
    echo Building and starting containers...
    docker-compose up --build
) else if "%1"=="start" (
    echo Starting containers...
    docker-compose up
) else if "%1"=="stop" (
    echo Stopping containers...
    docker-compose down
) else if "%1"=="logs" (
    echo Showing logs...
    docker-compose logs -f
) else if "%1"=="clean" (
    echo Cleaning up containers and images...
    docker-compose down --rmi all --volumes
) else (
    echo Usage: scripts.bat [build^|start^|stop^|logs^|clean]
    echo.
    echo Commands:
    echo   build  - Build and start containers
    echo   start  - Start existing containers  
    echo   stop   - Stop containers
    echo   logs   - Show container logs
    echo   clean  - Remove containers and images
)