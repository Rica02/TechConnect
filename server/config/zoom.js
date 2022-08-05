const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "mh9S4ciMuTay3vgAGq24F32lcupgCbpPeVxd",
    APISecret: "2AHbV8pSuC0gMvpJooEpHzTkpDFcZc4YOv9n",
  },
  production: {
    APIKey: "mh9S4ciMuTay3vgAGq24F32lcupgCbpPeVxd",
    APISecret: "2AHbV8pSuC0gMvpJooEpHzTkpDFcZc4YOv9n",
  },
};

module.exports = config[env];
