pipeline {
    agent any
    
    stages {
        stage('Jenkinsfile') {
            steps {
                echo 'Jenkins Testing WeebHook;D Muahahaha.'
            }
        }
        
        stage('Checkout Code') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/ligjeronko/JetSetters.git']]
                ])
            }
        }
        
        stage('Run Tests') { // New stage for testing
            steps {
                sh 'mvn test' // Example command for running tests using Maven
            }
        }
    }
}