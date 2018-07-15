const mongoose = require('mongoose');
const { Schema } = mongoose;

const teamSchema = new Schema({
    teamName: String,
    teamMembers: [String],
    wins: Number,
    losses: Number,
    standing: Number,
    captainInfo:{
        captainName: String,
        captainEmail: String,
        captainPhone: Number
    }
});

mongoose.model('teams', teamSchema)