export const trending = (req, res) => {
  const videos = [
    {
      title: "First Video",
      rating: "3",
      comments: "2",
      createdAt: "5",
      views: "223",
    },
    {
      title: "Second Video",
      rating: "2",
      comments: "22",
      createdAt: "11",
      views: "233",
    },
    {
      title: "Third Video",
      rating: "1",
      comments: "211",
      createdAt: "8",
      views: "44.231",
    },
  ];
  return res.render("home", { pageTitle: "Home", videos });
};
export const see = (req, res) => res.render("watch");
export const edit = (req, res) => res.render("edit");
export const search = (req, res) => res.send("search");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => {
  res.send("Delete-Video");
};
