const constant = require("../../constant");
const service = require("../../service");
const profileService = require("../../service/user/profile.service");

const profileController = {}

profileController.update = async (req, res, next) => {
  try {
    const { body,file } = req;

    console.log("bodyyyy",req,"-Asd",body,file)

    // validate request/raise an exception
    //   const validatedBody = userModuleValidators.login(req.body);

    // const validatedBody = {
    //   email: body.email,
    //   password: body.password,
    // };
    // handle logic within service function
    const result = await profileService.update(body, file);
    console.log("resulttt",result)

    // const data = await service.profile({
    //   email: validatedBody.email,
    //   password: validatedBody.password,
    // });

    // return response/raise an exception
    res.status(201).json({
      ...constant.login.messages.ALIS0001,
      ...result,
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Internal Server Error", error: error.message });
  }
};

module.exports = profileController


 