pipeline {
    agent any

    environment {
        // Ensure Node.js is available if not globally installed
        PATH = "C:\\Program Files\\nodejs\\:${env.PATH}"
    }

    stages {
        stage('Checkout Code') {
            steps {
                // Checkout the code from your GitHub repository
                git branch: 'main', url: 'https://github.com/ligjeronko/JetSetters.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                script {
                    // Install npm dependencies, including Jest
                    bat 'npm install'
                }
            }
        }

        stage('Run Jest Tests') {
            steps {
                script {
                    // Run Jest tests
                    bat 'npm test' // This assumes `npm test` is set up to run Jest in package.json
                    // OR if you're running Jest directly:
                    // bat 'npx jest' 
                }
            }
        }
    }

    post {
        always {
            // This block will run after the pipeline, regardless of success or failure
            echo 'Pipeline finished'
        }
    }
}
