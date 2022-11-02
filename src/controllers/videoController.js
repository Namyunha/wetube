// let videos = [
//   {
//     title: "First Video",
//     rating: "3",
//     comments: "2",
//     createdAt: "5",
//     views: "1",
//     id: 1,
//   },
//   {
//     title: "Second Video",
//     rating: "2",
//     comments: "22",
//     createdAt: "11",
//     views: "233",
//     id: 2,
//   },
//   {
//     title: "Third Video",
//     rating: "1",
//     comments: "211",
//     createdAt: "8",
//     views: "44.231",
//     id: 3,
//   },
// ];

const videos = [
  {
    title: "First Video",
    rating: 5,
    comments: 2,
    createdAt: "22 minutes ago",
    views: 59,
    id: 1,
  },
  {
    title: "Second Video",
    rating: 3,
    comments: 22,
    createdAt: "15 minutes ago",
    views: 59,
    id: 2,
  },
  {
    title: "Third Video",
    rating: 1,
    comments: 243,
    createdAt: "11 minutes ago",
    views: 592,
    id: 3,
  },
];

export const testhome = (req, res) => {
  return res.render("testhome", { pageTitle: "Test", videos });
};

export const trending = (req, res) => {
  return res.render("home", { pageTitle: "Home", videos });
};
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `${video.title}`, video });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};
