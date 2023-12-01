import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    id: {
        type: Number,
        required: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    gender:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    domain:{
        type: String,
        required: true,
    },
    available:{
        type: Boolean,
        required: true,
    },

});


const teamSchema = new mongoose.Schema({
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }]
});


const Team = mongoose.model('Team', teamSchema);
const User = mongoose.model('User', userSchema);

export { User, Team };