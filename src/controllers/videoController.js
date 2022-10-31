export const trending = (req, res) => res.render("home");
export const see = (req, res) => {
  return res.send(
    `<!DOCTYPE html><html lang ='ko'><head><title>Wetube</title></head><body><h1>Watch Video #${req.params.id}</h1><footer>&copy; 2021 Wetube</footer></body></html>`
  );
};
export const edit = (req, res) => {
  res.send(
    `<!DOCTYPE html><html lang ='ko'><head><title>Wetube</title></head><body><h1>Edit Video #${req.params.id}</h1><footer>&copy; 2021 Wetube</footer></body></html>`
  );
};
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete-Video");
};
