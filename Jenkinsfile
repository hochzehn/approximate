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
      step([$class: 'CloverPublisher', cloverReportDir: 'test-reports/', cloverReportFileName: 'clover.xml'])
    }

}
