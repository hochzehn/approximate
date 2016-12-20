node() {

  stage('Checkout') {
    checkout scm

    sh 'bin/own.sh $PWD'
    sh 'git reset --hard'
    sh 'git clean -fd'
  }

  stage('Test') {
    sh 'docker run --rm -v $PWD:/opt/karma hochzehn/karma-jasmine-phantomjs start --singleRun=true'
  }

  stage('Publish test results') {
    junit 'test-reports/junit.xml'
  }

  stage('Publish code coverage') {
      publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'test-reports/PhantomJS 2.1.1 (Linux 0.0.0)/', reportFiles: 'index.html', reportName: 'Coverage'])

      // meh https://issues.jenkins-ci.org/browse/JENKINS-34439
      // step([$class: 'CloverPublisher', cloverReportDir: 'test-reports/', cloverReportFileName: 'clover.xml'])
    }

}
