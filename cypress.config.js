const { defineConfig } = require("cypress");

module.exports = defineConfig({
    e2e: {
        retries: 1,
        baseUrl: "http://localhost:3000",
        setupNodeEvents(on, config) {
            const viewportType = config.env.viewport;
            if (viewportType === "laptop") {
                config.viewportHeight = 900;
                config.viewportWidth = 1440;
            }
            if (viewportType === "mobile") {
                config.viewportHeight = 667;
                config.viewportWidth = 375;
            }
            return config;
        }
    }
});
