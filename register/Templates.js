// Templates.js

export function createNewParticipantSection(count) {
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
  
  export function successTemplate(info) {
    return `Thank you ${info.name} for registering. You have registered ${info.participants} participants and owe $${info.totalFees.toFixed(2)} in fees.`;
  }
  