
const profileService = {}

profileService.update = async (userDetails, profileImage) => {
  try {

    const imagePath = profileImage ? profileImage.path : null;
    console.log("userDetails",userDetails)


    // app.post('/upload-single', singleUpload, (req, res) => {
    //   console.log(req.file);
    //   res.send('Single file uploaded successfully!');
    // });


    return { message: "Successfull",imagePath:imagePath };
  } catch (error) {
    console.log("from service", JSON.stringify(error));
    throw new Error("something went wrong", JSON.stringify(error));
  }

  // Check if email already exists
  //   const emailExists = await sharedModels.users.read({ email });

  //   if (emailExists.length) {
  //     return new Error("Email already exist")
  //   }

  //   return { userId: user.insertId };
};

module.exports = profileService