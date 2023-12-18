function updateLocalTime() {
    // Get the current date and time
    const now = new Date();

    // Format the time as HH:mm:ss
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    // Display the time on the page
    document.getElementById('localTime').textContent = `Local Time: ${hours}:${minutes}:${seconds}`;
  }

  // Update the local time every second
  setInterval(updateLocalTime, 1000);

  // Initial update
  updateLocalTime();