node('basic') {
  def commit_id
  def app
  def tag

  stage('Checkout source') {
    slackSend "[AR] Build #{$env.BUILD_NUMBER} started (${env.BUILD_URL})"
    checkout scm
  }

  stage('Build image') {
    app = docker.build 'lrhstsa/ar'
  }

  stage('Push image') {
    withCredentials([string(credentialsId: 'docker-hub-password', variable: 'DOCKER_HUB_PASSWORD')]) {
      sh 'docker login --username ccatlett2000 --password $DOCKER_HUB_PASSWORD'
    }
    sh 'git describe --tags > .git-tag'
    tag = readFile('.git-tag').trim()
    app.push "${tag}"
    slackSend "[AR] `lrhstsa/ar:${tag}` pushed to Docker Hub"
  }

  stage('Deploy to cluster') {
    milestone()
    sh "kubectl --namespace default set image deployment ar ar=lrhstsa/ar:${tag}"
    slackSend "[AR] Release `${tag}` deployed to production"
  }
}
