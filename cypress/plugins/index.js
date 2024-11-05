module.exports = (on, config) => {
  if (config.env === "local") {
    config.baseUrl = "https://www.lumahealth.io/";
  }

  return config;
};
