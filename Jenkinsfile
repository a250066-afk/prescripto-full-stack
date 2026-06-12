pipeline {
agent any
stages {

    stage('Checkout') {
        steps {
            git url: 'https://github.com/a250066-afk/prescripto-full-stack.git', branch: 'main'
        }
    }

    stage('Build Docker Images') {
        steps {
            bat 'docker compose build'
        }
    }

    stage('Deploy Application') {
        steps {
            bat 'docker compose up -d'
        }
    }
}

post {
    always {
        echo 'Pipeline Finished'
    }

    success {
        echo 'Application Deployed Successfully'
    }

    failure {
        echo 'Deployment Failed'
    }
}
}
