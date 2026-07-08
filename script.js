function showTableInfo() {
    confirm("This table shows student names, course information, and grades.");
}

document.addEventListener("DOMContentLoaded", function() {
    let table = document.getElementById("studentTable");
    table.addEventListener("mouseenter", showTableInfo);
});