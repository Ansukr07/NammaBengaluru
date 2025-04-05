// In-memory storage for crowd data
const crowdData = {};

// DOM Elements
const placeNameInput = document.getElementById("placeName");
const crowdLevelSelect = document.getElementById("crowdLevel");
const submitBtn = document.getElementById("submitBtn");
const resultsList = document.getElementById("resultsList");

// Handle form submission
submitBtn.addEventListener("click", () => {
  const placeName = placeNameInput.value.trim();
  const crowdLevel = crowdLevelSelect.value;

  if (!placeName || !crowdLevel) {
    alert("Please enter a place name and select a crowd level.");
    return;
  }

  // Update crowd data
  if (!crowdData[placeName]) {
    crowdData[placeName] = { empty: 0, "partially-filled": 0, crowded: 0 };
  }
  crowdData[placeName][crowdLevel]++;

  // Reset form
  placeNameInput.value = "";
  crowdLevelSelect.value = "";

  // Update results
  updateResults();
});

// Update the results section
function updateResults() {
  resultsList.innerHTML = "";

  for (const place in crowdData) {
    const votes = crowdData[place];
    const totalVotes = votes.empty + votes["partially-filled"] + votes.crowded;

    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <strong>${place}</strong><br>
      Empty: ${votes.empty}, Partially Filled: ${votes["partially-filled"]}, Crowded: ${votes.crowded}<br>
      <em>Total Votes: ${totalVotes}</em>
    `;
    resultsList.appendChild(listItem);
  }
}
