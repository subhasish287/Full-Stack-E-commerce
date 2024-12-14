import React from "react";
import { useState } from "react";

const Review = () => {
  const [rating, setRating] = useState(1);
  const [review, setReview] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    let formErrors = {};
    if (!review) formErrors.review = "Review is required!";
    if (rating < 1 || rating > 5)
      formErrors.rating = "Rating must be between 1 and 5!";

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
    } else {
      // Handle form submission (e.g., send to API)
      console.log("Review submitted:", { rating, review });
    }
  };
  return (
    <div className="max-w-4xl mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
  <h2 className="text-2xl font-semibold text-gray-800 mb-4">Customer Reviews</h2>

  {/* Review Form */}
  <div className="max-w-lg mx-auto my-8 p-6 bg-white shadow-lg rounded-lg">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Write a Review</h2>
    <form onSubmit={handleSubmit}>
      {/* Rating Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Rating</label>
        <div className="flex items-center">
          {[1, 2, 3, 4, 5].map((star) => (
            <svg
              key={star}
              xmlns="http://www.w3.org/2000/svg"
              fill={star <= rating ? "currentColor" : "none"}
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => setRating(star)}
              className="w-8 h-8 text-yellow-400 cursor-pointer"
            >
              <path
                fillRule="evenodd"
                d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                clipRule="evenodd"
              />
            </svg>
          ))}
        </div>
        {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating}</p>}
      </div>
      
      {/* Review Field */}
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Your Review</label>
        <textarea
          className={`w-full p-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 ${errors.review ? "border-red-500" : "border-gray-300"}`}
          rows="4"
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        {errors.review && <p className="text-red-500 text-sm mt-1">{errors.review}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
      >
        Submit Review
      </button>
    </form>
  </div>

  <h2 className="text-2xl mt-3 font-semibold text-gray-800 mb-4">All Reviews</h2>

  {/* Review List with Scrolling */}
  <div className="space-y-4 max-h-[400px] overflow-y-auto"
  style={{ maxHeight: '400px', overflowY: 'auto' }}> {/* Apply scroll here */}
    {/* Single Review */}
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>
    <div className="flex gap-4 border-b pb-4">
      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Review Content */}
      <div className="flex-1">
        <div className="flex items-center justify-between">
          {/* User Name and Rating */}
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">John Doe</span>
            <div className="flex text-yellow-400">
              {/* Stars for rating */}
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          {/* Date */}
          <span className="text-sm text-gray-500">2 days ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          This product is great! I have been using it for a week now and it works perfectly. Worth every penny!
        </p>
      </div>
    </div>

    {/* Repeat for more reviews */}
    <div className="flex gap-4 border-b pb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img
          src="https://randomuser.me/api/portraits/women/33.jpg"
          alt="User"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-gray-700">Jane Smith</span>
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  fill={index < 4 ? "currentColor" : "none"}
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73-1.64 7.03L12 17.27z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
          </div>
          <span className="text-sm text-gray-500">1 week ago</span>
        </div>
        <p className="text-gray-700 mt-2">
          The product is good, but it could be improved in terms of battery life. Overall, I’m happy with the purchase.
        </p>
      </div>
    </div>
  </div>
</div>

  );
};

export default Review;
