pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {

                git 'YOUR_GITHUB_REPO_URL'
            }
        }

        stage('Build Docker Images') {

            steps {

                bat 'docker compose build'
            }
        }

        stage('Deploy Application') {

            steps {

                bat 'wsl ansible-playbook /home/soham/ansible-project/deploy.yml'
            }
        }
    }

    post {

        always {

            echo 'Pipeline Finished Successfully'
        }
    }
}