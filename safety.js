const areas = [
    { name: "Basavanagudi", crimeRate: 3, streetFood: 8, cleanliness: 7, reviews: [] },
    { name: "Indiranagar", crimeRate: 6, streetFood: 9, cleanliness: 8, reviews: [] },
    { name: "Jayanagar", crimeRate: 4, streetFood: 7, cleanliness: 8, reviews: [] },
    { name: "Koramangala", crimeRate: 5, streetFood: 9, cleanliness: 7, reviews: [] },
    { name: "Malleshwaram", crimeRate: 2, streetFood: 8, cleanliness: 9, reviews: [] },
    { name: "Rajaji Nagar", crimeRate: 3, streetFood: 7, cleanliness: 7, reviews: [] },
    { name: "Frazer Town", crimeRate: 6, streetFood: 9, cleanliness: 6, reviews: [] },
    { name: "Sadashivanagar", crimeRate: 2, streetFood: 6, cleanliness: 9, reviews: [] },
    { name: "HSR Layout", crimeRate: 5, streetFood: 8, cleanliness: 8, reviews: [] },
    { name: "Bellandur", crimeRate: 7, streetFood: 9, cleanliness: 6, reviews: [] },
    { name: "Cooke Town", crimeRate: 3, streetFood: 7, cleanliness: 8, reviews: [] },
    { name: "Benson Town", crimeRate: 4, streetFood: 7, cleanliness: 8, reviews: [] },
    { name: "Richmond Town", crimeRate: 5, streetFood: 8, cleanliness: 7, reviews: [] },
    { name: "Ulsoor", crimeRate: 6, streetFood: 8, cleanliness: 6, reviews: [] },
    { name: "Sahakara Nagar", crimeRate: 3, streetFood: 7, cleanliness: 9, reviews: [] },
  ];
  
  const areaList = document.getElementById("areas");
  const detailsSection = document.getElementById("area-details");
  const reviewsSection = document.getElementById("reviews-section");
  const areaName = document.getElementById("area-name");
  const reviewsAreaName = document.getElementById("reviews-area-name");
  const crimeRate = document.getElementById("crime-rate");
  const streetFood = document.getElementById("street-food");
  const cleanliness = document.getElementById("cleanliness");
  const reviewsList = document.getElementById("reviews-list");
  const reviewForm = document.getElementById("review-form");
  const reviewText = document.getElementById("review-text");
  const reviewRating = document.getElementById("review-rating");
  const showReviewsButton = document.getElementById("show-reviews-button");
  const backToDetailsButton = document.getElementById("back-to-details");
  
  let currentArea = null;
  
  // Populate area list
  function populateAreas() {
    areas.forEach((area) => {
      const li = document.createElement("li");
      li.textContent = `${area.name} (Rating: ${Math.round(
        (area.crimeRate + area.streetFood + area.cleanliness) / 3
      )}/10)`;
      li.addEventListener("click", () => showAreaDetails(area));
      areaList.appendChild(li);
    });
  }
  
  // Display area details
  function showAreaDetails(area) {
    currentArea = area;
    areaName.textContent = area.name;
    crimeRate.textContent = area.crimeRate;
    streetFood.textContent = area.streetFood;
    cleanliness.textContent = area.cleanliness;
    detailsSection.classList.remove("hidden");
    reviewsSection.classList.add("hidden");
  }
  
  // Show reviews
  function showReviews() {
    reviewsAreaName.textContent = currentArea.name;
    reviewsList.innerHTML = "";
    if (currentArea.reviews.length === 0) {
      reviewsList.innerHTML = "<li>No reviews yet. Be the first to leave one!</li>";
    } else {
      currentArea.reviews.forEach((review) => {
        const li = document.createElement("li");
        li.innerHTML = `<strong>Rating:</strong> ${review.rating}/10 <br> <strong>Review:</strong> ${review.text}`;
        reviewsList.appendChild(li);
      });
    }
    detailsSection.classList.add("hidden");
    reviewsSection.classList.remove("hidden");
  }
  
  // Submit a review
  reviewForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const review = {
      text: reviewText.value,
      rating: reviewRating.value,
    };
    currentArea.reviews.push(review);
    reviewText.value = "";
    reviewRating.value = "";
    alert("Your review has been submitted!");
  });
  
  // Event listeners
  showReviewsButton.addEventListener("click", showReviews);
  backToDetailsButton.addEventListener("click", () => {
    reviewsSection.classList.add("hidden");
    detailsSection.classList.remove("hidden");
  });
  
  // Initialize
  populateAreas();
  