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
import User from "../models/User";

export const home = async (req, res) => {
  const videos = await Video.find({}).sort({ createdAt: "asc" });
  return res.render("home", { pageTitle: "Home", videos });
};

export const watch = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  console.log(video.owner);
  const owner = await User.findById(video.owner);
  if (!video) {
    return res.render("404", { pageTitle: "Video not found." });
  }
  return res.render("watch", { pageTitle: video.title, video, owner });
};
export const getEdit = async (req, res) => {
  const { id } = req.params;
  const video = await Video.findById(id);
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found." });
  }
  return res.render("edit", { pageTitle: `Edit ${video.title}`, video });
};
export const postEdit = async (req, res) => {
  const { id } = req.params;
  const { title, description, hashtags } = req.body;
  const video = await Video.exists({ _id: id });
  if (!video) {
    return res.status(404).render("404", { pageTitle: "Video not found" });
  }
  await Video.findByIdAndUpdate(id, {
    title,
    description,
    hashtags: Video.formatHashtags(hashtags),
  });
  return res.redirect(`/videos/${id}`);
};

export const getUpload = (req, res) => {
  return res.render("upload", { pageTitle: "Upload video" });
};

export const postUpload = async (req, res) => {
  const {
    user: { _id },
  } = req.session;
  const { path: fileUrl } = req.file;
  const { title, description, hashtags } = req.body;
  try {
    await Video.create({
      title,
      description,
      fileUrl,
      owner: _id,
      hashtags: Video.formatHashtags(hashtags),
    });
    return res.redirect("/");
  } catch (error) {
    return res.status(400).render("upload", {
      pageTitle: "Upload Video",
      errorMessage: error._message,
    });
  }
};

export const deleteVideo = async (req, res) => {
  const { id } = req.params;
  await Video.findByIdAndDelete(id);
  return res.redirect("/");
};

export const search = async (req, res) => {
  const { keyword } = req.query;
  let videos = [];
  if (keyword) {
    const videos = await Video.find({
      title: {
        $regex: new RegExp(keyword, "i"),
      },
    });
  }
  return res.render("search", { pageTitle: "Search", videos });
};
