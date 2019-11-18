const db = require("../models");
const crypto = require("crypto");

module.exports = {
    genRandomString: length => {
        //makes the hash salt
        return crypto
          .randomBytes(Math.ceil(length / 2))
          .toString("hex") /** convert to hexadecimal format */
          .slice(0, length); /** return required number of characters */
      },
    sha512: (password, salt) => {
        let hash = crypto.createHmac(
          "sha512",
          salt
        ); /** Hashing algorithm sha512 */
        hash.update(password.toString());
        let value = hash.digest("hex");
        return {
          salt: salt,
          passwordHash: value
        };
    },
    addUser: async(req,res) =>{
        console.table(req.body);
        let Salt = module.exports.genRandomString(16); /** Gives us salt of length 16 */
        let hashCode = module.exports.sha512(req.body.password, Salt);
        let newUser = {
            userName: req.body.userName,
            password: hashCode.passwordHash,
            salt: hashCode.salt
        };
        console.table(newUser);

        let result = await db.Users.create(newUser);
        result ? res.json(result) : res.sendStatus("404"); 
    },
    loginUser: (req,res) =>{
        console.log("hit");
        try{
            console.table(req.query);
            db.Users.findOne({userName: req.query.userName}, (er, foundUser) => {
                if(er){console.log(er)}
                if(foundUser){
                let passwordConfirm = module.exports.sha512(req.query.password, foundUser.salt);
                    if(passwordConfirm.passwordHash === foundUser.password){
                        let userData = {
                            userName: foundUser.userName,
                            id: foundUser.id
                        }
                        console.table(userData);
                        res.json({userData});
                    }else {
                        res.sendStatus("401");
                    }
                } else {
                    res.sendStatus("504");
                }
            });
        } catch {
            res.sendStatus("500");
        }
    }
}