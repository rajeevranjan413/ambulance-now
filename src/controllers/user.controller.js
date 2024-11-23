import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { User } from "../models/user.model.js"



const generateAccessTokens = async (userId) => {
    try {
        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()

        return { accessToken }


    } catch (error) {
        throw new ApiError(500, "Something went wrong while generating referesh and access token")
    }
}

const registerUser = asyncHandler(async (req, res) => {



})

const loginUser = asyncHandler(async (req, res) => {


})

const logoutUser = asyncHandler(async (req, res) => {

})

const refreshAccessToken = asyncHandler(async (req, res) => {


})

const changeCurrentPassword = asyncHandler(async (req, res) => {

})


const getCurrentUser = asyncHandler(async (req, res) => {

})

const updateAccountDetails = asyncHandler(async (req, res) => {

});


export {
    registerUser,
    loginUser,
    logoutUser,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
}