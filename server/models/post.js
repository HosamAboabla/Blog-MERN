const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please enter the title']
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