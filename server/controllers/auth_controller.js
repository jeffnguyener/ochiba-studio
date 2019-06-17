const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    const { first_name, last_name, phone, email, password } = req.body;
    const db = req.app.get("db");
    const { session } = req;
    const userFound = await db.check_user_email({ email });
    if (userFound[0]) return res.status(409).send("Email already exists");
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const createUser = await db.register_user({
      first_name,
      last_name,
      phone,
      email,
      password: hash
    });
    const createCart = await db.add_shopping_cart_id({id: createUser[0].user_id})
    session.user = { id: createUser[0].user_id, email: createUser[0].email, cart_id: createCart[0].id };
    res.status(200).send(session.user);
  },
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const db = req.app.get("db");
    const { session } = req;
    const userFound = await db.check_user_email({ email });
    if (!userFound[0]) return res.status(401).send("Email does not exist");
    const shoppingCart = await db.get_shopping_cart_id({user_id: userFound[0].user_id})
    const authenticated = bcrypt.compareSync(password, userFound[0].password);
    if (authenticated) {
      session.user = { id: userFound[0].user_id, email: userFound[0].email, cart_id: shoppingCart[0].id};
      res.status(200).send(session.user);
    } else {
      return res.status(401).send("Email or password is incorrect");
    }
  },
  getUserDetails: async (req, res) => {
    const db = req.app.get("db");
    const { session } = req;
    if (session.user) {
      const profileDetails = await db.get_userProfile_details({
        id: session.user.id
      });
      const {
        first_name,
        last_name,
        email,
        user_id,
        phone,
        avatar
      } = profileDetails[0];
      return res
        .status(200)
        .send({ first_name, last_name, email, user_id, phone, avatar });
    }
    return res.status(401).send("Please Log In");
  },
  getUserMessages: async (req, res) => {
    const db = req.app.get("db");
    const { session } = req;
    const result = await db.get_user_messages({ id: session.user.id });
    return res.status(200).send(result);
  },
  logout: (req, res) => {
    // console.log(req.session)
    req.session.destroy();
    return res.status(200).send("logout");
  },
  getUserGallery: async (req, res) => {
    const db = req.app.get("db");
    const { session } = req;
    // console.log(session)
    const gallery = await db.get_user_gallery({ id: session.user.id });
    // console.log(gallery)
    return res.status(200).send(gallery);
  },
  updateUserProfile: async (req, res) => {
    const { first_name, last_name, phone, email, password } = req.body;
    const db = req.app.get("db");
    const { session } = req;
    // console.log(req.body)
    // updated hashed password
    const updatedHashPass = bcrypt.hashSync(password, 15);

    if (
      (first_name !== "" && last_name !== "" && phone > 0 && email !== "",
      password !== "")
    ) {
      const result = db
        .update_user_profile({
          id: session.user.id,
          first_name,
          last_name,
          phone,
          email,
          password: updatedHashPass
        })
        .then(dbRes => {
          res.send(result);
        });
    }
  },
  updateAvatar: (req, res) => {
    const { url } = req.body;
    const { id } = req.session.user;
    // console.log(req.session);
    const db = req.app.get("db");
    db.upload_avatar({ id, url }).then(response => {
      res.send("user updated");
    });
  },
  deleteAvatar: (req, res) => {
    const { id } = req.session.user;
    const { url } = req.body;
    // console.log(req.body)
    const db = req.app.get("db");
    db.delete_avatar({ id, url }).then(response => {
      console.log(response)
      res.status(200).send("Avatar deleted")
    }).catch(err => res.status(500).send(err));
  }
};
