module.exports = {
  domains: [
    {
      name: 'classroom.local.zthunworks.com',
      paths: {
        '/': 'classroom-services-web:5173',
        '/api': 'classroom-services-api:3000/api'
      }
    }
  ]
};
