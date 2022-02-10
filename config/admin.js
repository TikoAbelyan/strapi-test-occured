module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'e8d968374d7df8a3ab230735a24f2653'),
  },
});
