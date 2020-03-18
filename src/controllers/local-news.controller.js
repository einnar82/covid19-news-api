const services = require("../services");
const { crawlCheckpoints } = services;

const LocalNewsController = {
  getCheckpoints: (request, response) => {
    crawlCheckpoints(data => {
      const [locations] = data;
      const { cities, checkpoints } = locations;
      const allCities = cities.slice(5, 19);
      const allCheckpoints = checkpoints.slice(2, 13);
      const [
        NPD,
        caloocan,
        malabon,
        valenzuela1,
        valenzuela2,
        SPD,
        muntinlupa1,
        lasPinas,
        paranaque,
        muntinlupa2,
        EPD,
        marikina,
        pasig,
        QCPD
      ] = allCities;

      const allLocations = [
        {
          district: NPD,
          location: caloocan.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: NPD,
          location: malabon.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: NPD,
          location: valenzuela1.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: NPD,
          location: valenzuela2.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: SPD,
          location: muntinlupa1.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: SPD,
          location: lasPinas.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: SPD,
          location: paranaque.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: SPD,
          location: muntinlupa2.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: EPD,
          location: marikina.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: EPD,
          location: pasig.replace(/[[0-9]+\./, "").trim(),
          checkpoints: []
        },
        {
          district: QCPD,
          location: "Quezon City",
          checkpoints: []
        }
      ];
      const listing = allLocations.map((data, index) => {
        return {
          ...data,
          checkpoints: allCheckpoints[index]
            .split(/\r?\n|\r|\t?\n|\t/g)
            .filter(data => data !== "")
        };
      });
      response.json({
        data: listing
      });
    });
  }
};

module.exports = LocalNewsController;
