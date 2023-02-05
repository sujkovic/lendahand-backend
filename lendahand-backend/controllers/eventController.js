const Event = require("../models/event");

exports.index = (req, res) => {
  res.send("NOT IMPLEMENTED: HOME PAGE");
};

exports.event_list = (req, res) => {
  res.send("events list");
};

exports.event_detail = (req, res) => {
  res.send(`NOT IMPLEMENTED: ${req.params.id}`);
};

exports.event_create_get = (req, res) => {
  res.send("NOT IMPLEMENTED: event create get");
};

exports.event_create_post = (req, res) => {
  res.send("NOT IMPLEMENTED: event create post");
};

exports.event_delete_get = (req, res) => {
  res.send("NOT IMPLEMENTED: event delete get");
};

exports.event_delete_post = (req, res) => {
  res.send("NOT IMPLEMENTED: event delete post");
};

exports.event_update_get = (req, res) => {
  res.send("NOT IMPLEMENTED: event update get");
};

exports.event_update_post = (req, res) => {
  res.send("NOT IMPLEMENTED: event update post");
};
