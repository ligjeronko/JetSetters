pipeline {
    agent any
    
    stages {
        stage('Jenkinsfile') {
            steps {
                echo 'First test ;D.'
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
