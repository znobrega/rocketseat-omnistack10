import Dev from "../models/Dev";
import axios from "axios";
import parseStringAsArray from "../utils/parseStringAsArray";

class UserController {
  async store(req, res) {
    const {
      github_username = "znobrega",
      techs,
      latitude,
      longitude
    } = req.body;

    let dev = await Dev.findOne({ github_username });

    if (dev) {
      return res.json({ error: dev });
    }

    const response = await axios.get(
      `https://api.github.com/users/${github_username}`
    );

    const { name, avatar_url, bio } = response.data;

    const techsArray = parseStringAsArray(techs);
    const location = {
      type: "Point",
      coordinates: [longitude, latitude]
    };

    dev = await Dev.create({
      name,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    return res.json(dev);
  }

  async show(req, res) {
    const dev = await Dev.findById(req.params.id);

    return res.json(dev);
  }

  async index(req, res) {
    const devs = await Dev.find({});

    return res.json(devs);
  }
}

export default new UserController();
