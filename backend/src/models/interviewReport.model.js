const mongoose = require('mongoose');

const technicalQuestionSchema = mongoose.Schema({
    question : {
        type : String,
        required : [true , "Technical Question is required"]
    },
    intention : {
        type : String,
        required : [true, "Intention is required"]
    },
    answer : {
        type : String,
        required : [true, "Answer is required"]
    }
}, {
    _id : false
})

const behaviouralQuestionSchema = mongoose.Schema({
    question : {
        type : String,
        required : [true , "Technical Question is required"]
    },
    intention : {
        type : String,
        required : [true, "Intention is required"]
    },
    answer : {
        type : String,
        required : [true, "Answer is required"]
    }
}, {
    _id : false
})

const skillGapSchema = mongoose.Schema({
    skill : {
        type : String,
        required : [true, "Skill is required"]
    },
    severity: {
        type : String,
        enum : ["low", "medium", "high"],
        required : [true, "Severity is required"]
    }
}, {
    _id : false
})

const preparationPlanSchema = mongoose.Schema({
    day : {
        type : Number,
        required: [true, "Day is required"]
    },
    focus : {
        type : String,
        required : [true, "Focus is required"]
    },
    tasks: [{
        type : String,
        required : [true, "Skill is required"]
    }]
},{
    _id : false
})

const interviewReportSchema = new mongoose.Schema({
    jobDescription : {
        type : String,
        required : [true, "Job Description is required"]
    },
    resume : {
        type : String
    },
    selfDescription : {
        type : String
    },
    matchScore : {
        type: Number,
        min : 0,
        max: 100
    },
    technicalQuestion : [technicalQuestionSchema],
    behaviouralQuestion : [behaviouralQuestionSchema],
    skillGap : [skillGapSchema],
    preparationPlan : [preparationPlanSchema]
}, {
    timestamps : true
})

const interviewReportModel = mongoose.model("interviewReport", interviewReportSchema);

module.exports = interviewReportModel;