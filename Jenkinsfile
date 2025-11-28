pipeline {
    agent any
    tools { 
        nodejs 'NodeJS-22'
    }
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        stage('Install') {
            steps {
                bat 'npm install'
            }
        }
        stage('Test') {
            steps {
                bat 'npm test'    
            }
        }
    }
}
