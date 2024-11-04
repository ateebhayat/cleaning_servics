 pipeline {
    agent any
    stages {
        stage('Pulling the latest code') {
            steps {
                sh """
                cd /home/ubuntu/mern/reraise-it/ui/dev
                git stash
                git pull
                """
            }
        }

        stage('install dependency') {
            steps {
                sh """
                cd /home/ubuntu/mern/reraise-it/ui/dev && npm install --legacy-peer-deps
                """
            }
        }

        stage('build and deploy') {
            steps {
                sh """
                cd /home/ubuntu/mern/reraise-it/ui/dev && npm run build
                """
            }
        }

    }
}
