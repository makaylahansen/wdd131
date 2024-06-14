document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1; // Initial participant count
  
    const addButton = document.getElementById("add");
    const participantsFieldset = document.querySelector("fieldset.participants");
  
    addButton.addEventListener("click", () => {
      participantCount++;
      const newParticipantSection = createNewParticipantSection(participantCount);
      participantsFieldset.insertBefore(newParticipantSection, addButton);
    });
  
    function createNewParticipantSection(count) {
      const originalSection = document.querySelector(".participant1");
      const newSection = originalSection.cloneNode(true);
  
      // Update section class
      newSection.className = `participant${count}`;
  
      // Update all ID attributes to make them unique
      newSection.querySelectorAll("[id]").forEach((element) => {
        const newId = element.id + count;
        element.id = newId;
        if (element.tagName === "LABEL") {
          element.setAttribute("for", newId);
        }
      });
  
      // Update section header
      newSection.querySelector("p").textContent = `Participant ${count}`;
  
      // Clear the input values
      newSection.querySelectorAll("input").forEach((input) => {
        if (input.type !== "radio") {
          input.value = "";
        } else {
          input.checked = false;
        }
      });
  
      return newSection;
    }
  });
  