export const trending = (req, res) => res.send("Home Page Videos");
export const see = (req, res) => {
  return res.send(`<h1>Watch Video #${req.params.id}</h1>`);
};
export const edit = (req, res) => {
  res.send("Edit");
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete-Video");
};
