function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!

    const jobs = document.getElementsByName("job");
    let selectedJob = null;
    for (const job of jobs) {
        if (job.checked) {
            selectedJob = job.value;
            break;
        }
    }
    if (selectedJob) {
        alert(`Thank you for applying to be a ${selectedJob}!`);
    } else {
        alert("Please select a job!");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("jobs-form").addEventListener("submit", submitApplication);
});