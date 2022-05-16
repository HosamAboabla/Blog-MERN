const mongoose = require('mongoose');
const { required } = require('nodemon/lib/config');
const slugify = require('slugify');

const Schema = mongoose.Schema;


const blogSchema = new Schema(
    {
        slug: {
            type: String,
            required: [true, 'Please enter the slug'],
            unique: true,
        },
        title: {
            type: String,
            requied: [true, 'Please enter the title']
        },
        description: {
            type: String,
            requied: [true, "Please enter the description"]
        },
        thumbnail: {
            type: String,
            requied: [true, "Please enter the image url"]
        },
        keywords: [String],
        tag: String,
        body: {
            type: String,
            required : [true, "Please enter the description"]
        }
    },
    { timestamps: true }
);


blogSchema.pre('save' , function(){
    console.log('slug : ' , this);
    this.slug = slugify(this.slug);
})

blogSchema.pre('updateOne' , function(){
    let data = this.getUpdate();
    console.log('slug : ' , data.$set.slug);
    data.$set.slug = slugify(data.$set.slug);
})

module.exports = mongoose.model('Blog', blogSchema);