// register.js

import { createNewParticipantSection, successTemplate } from './Templates.js';

document.addEventListener("DOMContentLoaded", () => {
  let participantCount = 1; // Initial participant count

  const addButton = document.getElementById("add");
  const participantsFieldset = document.querySelector("fieldset.participants");
  const registrationForm = document.getElementById("registrationForm");
  const summaryElement = document.getElementById("summary");

  addButton.addEventListener("click", () => {
    participantCount++;
    const newParticipantSection = createNewParticipantSection(participantCount);
    participantsFieldset.insertBefore(newParticipantSection, addButton);
  });

  registrationForm.addEventListener("submit", submitForm);

  function submitForm(event) {
    event.preventDefault();

    // Get the adult name from the form
    const adultName = document.getElementById("adult_name").value;

    // Calculate the total fees
    const total = totalFees();

    // Hide the form
    registrationForm.style.display = "none";

    // Show the summary element with the message
    summaryElement.style.display = "block";
    summaryElement.innerHTML = successTemplate({
      name: adultName,
      participants: participantCount,
      totalFees: total
    });
  }

  function totalFees() {
    let feeElements = document.querySelectorAll("[id^=fee]");
    feeElements = [...feeElements];

    const total = feeElements.reduce((sum, feeInput) => {
      return sum + parseFloat(feeInput.value || 0);
    }, 0);

    return total;
  }
});
