const mongoose = require("mongoose")

const ItemSchema = new mongoose.Schema(
	{
		name: String,
		price: Number,
		about: String,
		image: String,
		sold: Boolean,
		// Item can have minimum 1 & maximum 1 User
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
			required: true
		},
		// Item can have minimum 0 & maximum many Comment
		comment: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Comment"
		}],
	}
)

ItemSchema.methods.toJSON = function () {
	return {
		id: this._id,
		name: this.name,
		price: this.price,
		about: this.about,
		image: this.image,
		sold: this.sold,
		user: this.user,
		comment: this.comment
	}
}

module.exports = mongoose.model("Item", ItemSchema)
