import mongoose from 'mongoose';
const { Schema } = mongoose;
const RoomSchema = new Schema({
    title:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
        unique: true
    },
    maxPrice:{
        type: String,
    },
    desc:{
        type: String,
        required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);