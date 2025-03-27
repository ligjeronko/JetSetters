pipeline {
    agent any
    
    stages {
        stage('Jenkinsfile') {
            steps {
                echo 'Jenkins Testing Hook;D Muahahaha.'
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
    }
}
