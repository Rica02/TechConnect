const env = process.env.NODE_ENV || "production";

//insert your API Key & Secret for each environment, keep this file local and never push it to a public repo for security purposes.
const config = {
  development: {
    APIKey: "mh9S4ciMuTay3vgAGq24F32lcupgCbpPeVxd",
    APISecret: "Nw4YyRjjPCitrITmCSu7Rap0AfkUWFbAUTaW",
  },
  production: {
    APIKey: "mh9S4ciMuTay3vgAGq24F32lcupgCbpPeVxd",
    APISecret: "Nw4YyRjjPCitrITmCSu7Rap0AfkUWFbAUTaW",
  },
};

module.exports = config[env];
