const CreateToken = require("../../utility/CreateToken");

const UserLoginService = async (Request, DataModel, Res) => {
    try {

        let matchingStage = { $match: Request.body }
        let projectStage = { $project: { _id: 0, email: 1, firstName: 1, lastName: 1, mobile: 1, photo: 1 } }
        let data = await DataModel.aggregate(
            [
                matchingStage, projectStage


            ]
        )
        if (data.length > 0) {
            let token = await CreateToken(data[0]['email'])
            let options = {
                maxAge: process.env.Cookie_Expire_Time,
                httpOnly: true,
                sameSite: 'none',
                secure: true,
            };

            // Set cookie
            Res.cookie("token", token, options);
            return { status: "success", token: token, data: data[0] }
        }
        else {
            return { status: "unauthorized" }
        }
    }
    catch (error) {
        return { status: "fail", data: error.toString() }
    }
}
module.exports = UserLoginService