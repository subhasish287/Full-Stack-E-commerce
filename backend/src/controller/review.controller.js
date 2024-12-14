import Review from "../model/review.model.js";
import User from "../model/user.model.js";

const addReview = async (req, res) => {
    const { userId, productId, rating, comment } = req.body;
    try {
        const user = await User.findById(userId);
        
        if (!user) {
            return res.status(404).json({success: false, message: "User not found" });
        }
        
        const review = new Review({ userId, productId, rating, comment });
        
        await review.save();
        
        res.status(201).json({success: true, message: "Review added successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: error.message });
    }
};
const updateReview = async (req, res) => {
    const { userId, productId, rating, comment } = req.body;
    try {
        const review = await Review.findOne({ userId, productId });
        
        if (!review) {
            return res.status(404).json({success: false, message: "Review not found" });
        }
        
        review.rating = rating;
        review.comment = comment;
        
        await review.save();
        
        res.status(200).json({success: true, message: "Review updated successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: error.message });
    }
};
const deleteReview = async (req, res) => {
    const { userId, productId } = req.body;
    try {
        const review = await Review.findOneAndDelete({ userId, productId });
        
        if (!review) {
            return res.status(404).json({success: false, message: "Review not found" });
        }
        
        res.status(200).json({success: true, message: "Review deleted successfully" });
    } catch (error) {
        res.status(500).json({success: false, message: error.message });
    }
}
const getReviews = async (req, res) => {
    const { productId } = req.body;
    try {
      // Find reviews for the given product ID
      const reviews = await Review.find({ productId });
      const allReviews = [];
  
      // Fetch user data for each review
      for (const review of reviews) {
        const user = await User.findById(review.userId).select("-password"); // Await the user data
        allReviews.push({ ...review._doc, user }); // Combine review and user data
      }
  
      res.status(200).json({ success: true, reviews: allReviews });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  };
  
export {addReview,updateReview,deleteReview,getReviews};