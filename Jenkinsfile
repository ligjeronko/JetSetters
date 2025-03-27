pipeline {
  agent any
  stages {
    stage('Jenkinsfile') {
      steps {
        echo 'This is my first test. ;D'
      }
    }

  }
}

pipeline {
    agent { label 'Build-in Node' } // Replace with the label of your node
    stages {
        stage('Checkout Code') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: '*/main']],
                    userRemoteConfigs: [[url: 'https://github.com/ligjeronko/JetSetters.git']]
                ])
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
    }
}