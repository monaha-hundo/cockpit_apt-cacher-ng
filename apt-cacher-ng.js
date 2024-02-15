function load_report() {
    const output = document.getElementById("output");
    let html = "";
    cockpit.spawn(["wget", "-q", "-O", "-", "http://localhost:3142/acng-report.html?doCount=Count+Data#stats"])
        .stream((data) => html += data)
        .then(() => { output.innerHTML = html });
}

cockpit.transport.wait(function () { });
load_report();