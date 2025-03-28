pipeline {
    agent any
    
    stages {
        stage('Prepare Environment') { // Environment setup
            steps {
                echo 'Setting up Jenkins Pipeline for React project...'
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/ligjeronko/JetSetters.git']]
                ])
                sh 'npm install' // Install dependencies
            }
        }
        
        stage('Run npm Tests') { // Default React tests
            steps {
                echo 'Running npm tests...'
                sh 'npm test -- --watchAll=false' // Ensures CI/CD appropriate behavior
            }
        }
        
        stage('Run Jest Tests') { // Explicit Jest tests
            steps {
                echo 'Running Jest tests explicitly...'
                sh 'npx jest --ci --coverage' // Adds coverage reporting and CI-friendly mode
            }
        }
    }

    post {
        always {
            echo 'Pipeline execution completed!'
        }
        success {
            echo 'All stages executed successfully. Tests passed!'
        }
        failure {
            echo 'Pipeline failed. Please check errors above.'
        }
    }
}