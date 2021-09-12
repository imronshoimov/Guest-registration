const model = require("../model/guest");

exports.getGuests = async (req, res) => {
  const guests = await model.allGuests();
  res.status(200).json({
    status: 200,
    data: {
      guests,
    },
  });
};

exports.filterGuests = async (req, res) => {
  const guests = await model.filterGuests(req.body);
  res.status(200).json({
    status: 200,
    results: guests.length,
    data: {
      guests,
    },
  });
};

exports.addGuest = async (req, res) => {
  const newGuest = await model.insertGuest(req.body);
  res.status(201).json({
    status: 201,
    message: "Inserted successfully",
  });
};
