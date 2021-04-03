import mongoose,{ Model, model, Types, Schema, Query } from "mongoose";
import { IUserDocument } from "../../../Interfaces/User/UserDocument.interface";

const UserSchema = new Schema({
    name: {
        type: String,
        require: true
    },
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    avatar: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    password: {
        type: String,
        require: true,
        trim: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

export default mongoose.model<IUserDocument>("User",UserSchema)