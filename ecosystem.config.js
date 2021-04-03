module.exports = {
    apps : [{
      name      : 'PrismaGram-Server',
      script    : 'yarn',
      args      : 'start',
      interpreter: '/bin/bash',
      env: {
        NODE_ENV: 'development'
      }
    }]
  };