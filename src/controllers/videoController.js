// let videos = [
//   {
//     title: "First Video",
//     rating: "3",
//     comments: "2",
//     createdAt: "22 minutes ago",
//     views: "1",
//     id: 1,
//   },
//   {
//     title: "Second Video",
//     rating: "2",
//     comments: "22",
//     createdAt: "15 minutes ago",
//     views: "233",
//     id: 2,
//   },
//   {
//     title: "Third Video",
//     rating: "1",
//     comments: "211",
//     createdAt: "11 minutes ago",
//     views: "44.231",
//     id: 3,
//   },
// ];
import Video from "../models/Video";

export const home = (req, res) => {
  Video.find({}, (error, videos) => {});
  return res.render("home", { pageTitle: "Home" });
};
export const watch = (req, res) => {
  const { id } = req.params;
  return res.render("watch", { pageTitle: `Watching ` });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  return res.render("edit", { pageTitle: `Editing` });
};
export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = (req, res) => {
  const title = req.body.title;
  return res.redirect("/");
};
