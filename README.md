# CI/CD Pipeline for Containerized Multi-Service App

## Overview
This project demonstrates a full CI/CD pipeline for a multi-service app with a Node.js backend and React frontend. It covers containerization with Docker, automated builds, pushes to Docker Hub, and deployment to Kubernetes (Minikube) with ingress routing and TLS.

## Features
- Node.js backend API to manage books
- React frontend to interact with the API
- Dockerized services with Dockerfiles
- CI/CD pipeline for testing, building, pushing, and deploying
- Kubernetes manifests for deployment, services, and ingress
- Local domain setup with HTTPS via self-signed certificates

## Prerequisites
- Docker & Docker Hub account
- Kubernetes cluster (Minikube for local dev)
- kubectl CLI
- Node.js & npm/yarn
- GitHub Actions or any CI/CD tool
- Basic knowledge of Kubernetes and Docker

## Setup

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo
