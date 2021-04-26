exports.getUsers = (req, res, next) => {
  console.log(req.params);
  res.json({ name: "Hamidullo" });
}

exports.getProducts = (req, res, next) => {
  res.json({ name: "Iphone 7" });
}
