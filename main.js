console.log("Good Morning, Afternoon, & Eventing! - Polling App");

/* lit-html snippet - Begin
   Add to the top of your code. Works with html or jsx!
   Formats html in a template literal  using the lit-html library 
   Syntax: html`<div> html or jsx here! ${variable} </div>`
   */
let html = (strings, ...values) => {
  let str = "";
  strings.forEach((string, i) => {
    str += string + (values[i] || "");
  });
  return str;
};
//lit-html snippet - End

let body = document.getElementById("body"); //Page Body
let officeHoursRateBody = document.getElementById("officeHoursRate"); //Office Hours Rate Selection
let pollingContentBody = document.getElementById("pollingContent"); //Content Body

let displayMoreHours = null;

//only allow one radio button to be selected in officeHoursRateBody
let officeHoursRadioButton = document.querySelectorAll(".officeHoursRateBtn");

for (let i = 0; i < officeHoursRadioButton.length; i++) {
  // console.log("officeHoursRateBtn:", officeHoursRadioButton[i]);
  officeHoursRadioButton[i].onclick = function () {
    for (let j = 0; j < officeHoursRadioButton.length; j++) {
      // console.log("officeHoursRateBtn:", officeHoursRadioButton[j]);

      //'this' is a reference to the object (radioButton) that is executing the current function
      if (officeHoursRadioButton[j] != this) {
        // console.clear();
        // console.log("officeHoursRateBtn:", this);
        officeHoursRadioButton[j].checked = false;

        let moreHours = document.getElementById("moreHours");
        let longerHours = document.getElementById("longerHours");

        if (moreHours.checked) {
          displayMoreHours = true;
          console.log("displayMoreHours:", displayMoreHours);
          displayPage();
          window.location.hash = "#pollBody";
        } else if (longerHours.checked) {
          displayMoreHours = false;
          console.log("displayMoreHours:", displayMoreHours);
          displayPage();
        }
      }
    }
  };

  window.scrollTo(0, document.body.scrollHeight);
}

function displayPage() {
  let pollBody = document.getElementById("pollBody");
  pollBody.style.opacity = 0;

  // If the user selects "More Hours" then display the poll
  if (displayMoreHours === true) {
    pollBody.innerHTML = ""; //Refreshes the poll body section

    //Poll Body - Begin
    pollBody.innerHTML = html` <form>
      <h3 id="pollQuestion">What time of day do you prefer?</h3>
      <!-- Poll Item 1 - Begin -->
      <div class="pollitem">
        <input type="radio" id="morning" name="poll" value="morning" hidden />
        <label for="morning"
          ><img id="morningImg" src="./images/morning.png" alt="morning"
        /></label>
      </div>
      <br />
      <div class="pollItemContainer">
        <!-- Poll Item  1 - End -->
        <!-- Poll Item 2 - Begin -->
        <div class="pollitem">
          <input
            type="radio"
            id="afternoon"
            name="poll"
            value="afternoon"
            hidden
          />
          <label for="afternoon"
            ><img
              id="afternoonImg"
              src="./images/afternoon.png"
              alt="afternoon"
            />
          </label>
        </div>
        <br />
        <div class="pollitem">
          <input type="radio" id="evening" name="poll" value="evening" hidden />
          <label for="evening"
            ><img id="eveningImg" src="./images/evening.png" alt="evening" />
          </label>
        </div>
        <!-- Poll Item 2 - End -->
        <!-- Poll Item 3 - Begin -->
        <div class="pollitem">
          <!-- type of input should be a text area -->
        </div>
        <h3>
          Within each day of the week, select one or more times you would like
          to see office hours.
        </h3>
        <div>
          <!-- Office Proposed Times - End -->

          <!-- display multiple checkbox containing times throughout the day -->
          <!-- include EST CST MST PST -->

          <div id="pollBodyTimes"></div>
        </div>
        <!-- Office Proposed Times - End -->
      </div>
      <!-- Poll Item 3 - End -->

      <br />
      <input id="submit" type="button" value="Submit" />
    </form>`;
    //Poll Body - Begin

    setTimeout(function () {
      pollBody.style.transition = "opacity 1s ease-in-out";
      pollBody.style.opacity = 1;
    }, 0);
    displayPollBodyTimes();
  }

  // If the user selects "Longer Hours" then display the poll
  else if (displayMoreHours === false) {
    pollBody.innerHTML = ""; //Refreshes the poll body section
    setTimeout(function () {
      alert("You want longer office hours, so click on that for now ;)");
    }, 0);
  }

  function displayPollBodyTimes() {
    let pollBodyTimes = document.getElementById("pollBodyTimes"); //this is the div that will hold the times
    // console.log("pollBodyTimes:", pollBodyTimes);

    //NOTE Morning Event Listener - Begin
    let morning = document.getElementById("morning");
    morning.addEventListener("click", function () {
      // console.log("morning clicked");
      // console.log("pollBodyTimes:", pollBodyTimes);

      pollBodyTimes.innerHTML = ""; //this clears the div adding new data to it each time
      pollBodyTimes.style.transition = "opacity 0.5s ease-in-out";
      pollBodyTimes.style.opacity = 0;

      setTimeout(function () {
        pollBodyTimes.style.border = "none";
        pollBodyTimes.style.opacity = 1;
        pollBodyTimes.style.textShadow = "none";
        pollBodyTimes.innerHTML = html`<!-- Morning Times - Begin -->
          <!-- Monday - Begin -->
          <div class="date expand-animation" id="Monday">
            <h4>Monday:</h4>

            <div class="officeDateTimes" id="morning-times">
              <p>
                <label>10pm (EST) 9am (CST) 8am (MST) 7am (PST)</label>
                <input
                  type="checkbox"
                  id="monday1"
                  name="monday"
                  value="10pm (EST) 9am (CST) 8am (MST) 7am (PST)"
                />
              </p>
              <p>
                <label>11pm (EST) 10am (CST) 9am (MST) 8am (PST)</label>
                <input
                  type="checkbox"
                  id="monday2"
                  name="monday"
                  value="11pm (EST) 10am (CST) 9am (MST) 8am (PST)"
                />
              </p>
              <p>
                <label>12pm (EST) 11am (CST) 10am (MST) 9am (PST)</label>
                <input
                  type="checkbox"
                  id="monday3"
                  name="monday"
                  value="12pm (EST) 11am (CST) 10am (MST) 9am (PST)"
                />
              </p>
            </div>
          </div>
          <!-- Monday - End -->
          <!-- Tuesday - Begin -->
          <div class="date" id="Tuesday">
            <h4>Tuesday:</h4>

            <div class="officeDateTimes" id="morning-times">
              <p>
                <label>10pm (EST) 9am (CST) 8am (MST) 7am (PST)</label>
                <input
                  type="checkbox"
                  id="tuesday1"
                  name="tuesday"
                  value="10pm (EST) 9am (CST) 8am (MST) 7am (PST)"
                />
              </p>
              <p>
                <label>11pm (EST) 10am (CST) 9am (MST) 8am (PST)</label>
                <input
                  type="checkbox"
                  id="tuesday2"
                  name="tuesday"
                  value="11pm (EST) 10am (CST) 9am (MST) 8am (PST)"
                />
              </p>
              <p>
                <label>12pm (EST) 11am (CST) 10am (MST) 9am (PST)</label>
                <input
                  type="checkbox"
                  id="tuesday3"
                  name="tuesday"
                  value="12pm (EST) 11am (CST) 10am (MST) 9am (PST)"
                />
              </p>
            </div>
            <!-- Tuesday - End -->
          </div>
          <!-- Morning Times - End -->`;
        pollBodyTimes.style.transition =
          "opacity 1s ease-in-out, border 0s ease-in-out";
        pollBodyTimes.style.border = "1px solid white";
        pollBodyTimes.style.borderRadius = "20px";
      }, 500);

      body.classList.add("yellow");
      //   fade in background to yellow over 3 seconds
      if (
        body.classList.contains("orange") ||
        body.classList.contains("blue")
      ) {
        body.classList.remove("orange", "blue");
      }
      //   fade in background to yellow over 3 seconds
      body.style.transition = "color background-color 3s ease-in-out";
      body.style.backgroundColor = "#CBBD9B";
      body.style.color = "black";

      window.scrollTo(-1, document.body.scrollHeight); //Scrolls to the bottom of the page
    });
    //Morning Event Listener - End

    //NOTE Afternoon Event Listener - Begin
    let afternoon = document.getElementById("afternoon");
    afternoon.addEventListener("click", function () {
      // console.log("afternoon clicked");
      // console.log("pollBodyTimes:", pollBodyTimes);

      pollBodyTimes.innerHTML = ""; //this clears the div adding new data to it each time
      pollBodyTimes.style.transition =
        "opacity 0.5s ease-in-out text-shadow 0.5s";
      pollBodyTimes.style.opacity = 0;

      setTimeout(function () {
        pollBodyTimes.style.border = "none";
        pollBodyTimes.style.opacity = 1;
        pollBodyTimes.style.textShadow = "none";
        pollBodyTimes.innerHTML = html` <!-- Afternoon Times - Begin -->
          <!-- Monday - Begin -->
          <div class="date expand-animation" id="Monday">
            <h4>Monday:</h4>
            <div class="officeDateTimes" id="afternoon-times">
              <p>
                <label>2pm (EST) 1pm (CST) 12pm (MST) 11pm (PST)</label>
                <input
                  type="checkbox"
                  id="monday1"
                  name="monday"
                  value="2pm (EST) 1pm (CST) 12pm (MST) 11pm (PST)"
                />
              </p>
              <p>
                <label>3pm (EST) 2pm (CST) 1pm (MST) 12pm (PST)</label>
                <input
                  type="checkbox"
                  id="monday2"
                  name="monday"
                  value="3pm (EST) 2pm (CST) 1pm (MST) 12pm (PST)"
                />
              </p>
              <p>
                <label>4pm (EST) 3pm (CST) 2pm (MST) 1pm (PST)</label>
                <input
                  type="checkbox"
                  id="monday3"
                  name="monday"
                  value="4pm (EST) 3pm (CST) 2pm (MST) 1pm (PST)"
                />
              </p>
            </div>
          </div>
          <!-- Monday - End -->
          <!-- Tuesday - Begin -->
          <div class="date" id="Tuesday">
            <h4>Tuesday:</h4>
            <div class="officeDateTimes" id="afternoon-times">
              <p>
                <label>2pm (EST) 1pm (CST) 12pm (MST) 11pm (PST)</label>
                <input
                  type="checkbox"
                  id="tuesday1"
                  name="tuesday"
                  value="2pm (EST) 1pm (CST) 12pm (MST) 11pm (PST)"
                />
              </p>
              <p>
                <label>3pm (EST) 2pm (CST) 1pm (MST) 12pm (PST)</label>
                <input
                  type="checkbox"
                  id="tuesday2"
                  name="tuesday"
                  value="3pm (EST) 2pm (CST) 1pm (MST) 12pm (PST)"
                />
              </p>
              <p>
                <label>4pm (EST) 3pm (CST) 2pm (MST) 1pm (PST)</label>
                <input
                  type="checkbox"
                  id="tuesday3"
                  name="tuesday"
                  value="4pm (EST) 3pm (CST) 2pm (MST) 1pm (PST)"
                />
              </p>
            </div>
            <!-- Monday - End -->
          </div>
          <!-- Afternoon Times - End -->`;
        pollBodyTimes.style.transition =
          "opacity 1s ease-in-out, border 0s ease-in-out";
        pollBodyTimes.style.border = "1px solid black";
        pollBodyTimes.style.borderRadius = "20px";
      }, 500);

      body.classList.add("orange");
      //   fade in background to orange over 3 seconds
      if (
        body.classList.contains("yellow") ||
        body.classList.contains("blue")
      ) {
        body.classList.remove("yellow", "blue");
      }
      //   fade in background to orange over 3 seconds
      body.style.transition = "color background-color 3s ease-in-out";
      body.style.backgroundColor = "#b17869";
      body.style.color = "black";

      window.scrollTo(-1, document.body.scrollHeight); //Scrolls to the bottom of the page
    });
    //Afternoon Event Listener - End

    //NOTE Evening Event Listener - Begin
    let evening = document.getElementById("evening");
    evening.addEventListener("click", function () {
      // console.log("evening clicked");
      // console.log("pollBodyTimes:", pollBodyTimes);

      pollBodyTimes.innerHTML = ""; //this clears the div adding new data to it each time
      pollBodyTimes.style.transition =
        "opacity 0.5s ease-in-out text-shadow 0.5s ease-in-out";
      pollBodyTimes.style.opacity = 0;

      setTimeout(function () {
        pollBodyTimes.style.border = "none";
        pollBodyTimes.style.opacity = 1;
        pollBodyTimes.style.textShadow = "2px 2px 4px #000000";
        pollBodyTimes.innerHTML = html` <!-- Evening Times - Begin -->
        <!-- Monday - Begin -->
        <div class="date expand-animation" id="Monday">
          <h4>Monday:</h4>
          <div class="officeDateTimes" id="evening-times">
            <h5>Evening</h5>
            <p>
              <label>5pm (EST) 4pm (CST) 3pm (MST) 2pm (PST)</label>
              <input
                type="checkbox"
                id="monday1"
                name="monday"
                value="5pm (EST) 4pm (CST) 3pm (MST) 2pm (PST)"
              />
            </p>
            <p>
              <label>6pm (EST) 5pm (CST) 4pm (MST) 3pm (PST)</label>
              <input
                type="checkbox"
                id="monday2"
                name="monday"
                value="6pm (EST) 5pm (CST) 4pm (MST) 3pm (PST)"
              />
            </p>
            <p>
              <label>7pm (EST) 6pm (CST) 5pm (MST) 4pm (PST)</label>
              <input
                type="checkbox"
                id="monday3"
                name="monday"
                value="7pm (EST) 6pm (CST) 5pm (MST) 4pm (PST)"
              />
            </p>
          </div>
          </div>
   <!-- Monday - End -->
        </div>
        
        <!-- Evening Times - End -->`;
        pollBodyTimes.style.transition =
          "opacity 1s ease-in-out, border 0s ease-in-out";
        pollBodyTimes.style.border = "1px solid white";
        pollBodyTimes.style.borderRadius = "20px";
      }, 500);

      body.classList.add("blue");
      //   fade in background to blue over 3 seconds
      if (
        body.classList.contains("yellow") ||
        body.classList.contains("orange")
      ) {
        body.classList.remove("yellow", "orange");
      }
      //   fade in background to blue over 3 seconds
      body.style.transition = "color background-color 3s ease-in-out";
      body.style.backgroundColor = "#5970a9";
      body.style.color = "white";

      window.scrollTo(-1, document.body.scrollHeight); //Scrolls to the bottom of the page
    });
    //Evening Event Listener - End

    getData();
  }
}

// on click of submit button get values from form, and ip address and post to api
function getData() {
  console.log("Getting data...");

  // API Section - Begin
  let apiEndPoint =
    "https://62c85d578c90491c2cb47da3.mockapi.io/Promineo_Tech_API/mae_app_polling"; // api endpoint

  let submit = document.getElementById("submit"); //Submit Button
  // let ip = "https://api.ipify.org?format=json"; // gets ip address from browser

  // async await function to check if ip address exists in api then prevent from posting to api and clicking on submit button
  //checkIp - Begin
  async function checkIp() {
    console.log("checkIp function called");
    let response = await fetch(apiEndPoint);
    let data = await response.json();
    //   console.log(data);
    let ip = await fetch("https://api.ipify.org?format=json"); // gets ip address from browser
    let ipData = await ip.json();

    let ipExists = false;
    for (let i = 0; i < data.length; i++) {
      // console.log(data[i].ipAddress);
      if (data[i].ipAddress === ipData.ip) {
        ipExists = true;
      }
    }
    if (ipExists) {
      // alert("You have already voted");
      submit.disabled = true;
    } else {
      submit.disabled = false;
      return;
    }
  }
  //checkIp - End

  //  if checkIp an error occurs the user is alerted.
  checkIp().catch((error) => {
    console.log(error);
    alert(
      "It appears you have ad/tracker blocking enable in your browser, please disable for this site and try again"
    );
    submit.disabled = true;
  });

  //if adblocker is on disable submit button
  if (typeof ip === "undefined") {
    // alert("You have already submitted!");
    // console.log("undefined submit:", submit);
    submit.disabled = true;
  }

  // on submit button click get values from form and ip address and post to api
  submit.addEventListener("click", function () {
    getIp();
    // async await getIp function
    async function getIp() {
      let ip = await fetch("https://api.ipify.org?format=json"); // gets ip address from browser
      let ipData = await ip.json();
      ip = ipData.ip;
      //turn the ip into a hashvalue

      let dataForAPI = [];

      //MORNING
      // preferred time of day values
      let morningValue = document.getElementById("morning").value;
      let afternoonValue = document.getElementById("afternoon").value;
      let eveningValue = document.getElementById("evening").value;

      //selected days of week values
      let monday1Value = document.getElementById("monday1");
      let monday2Value = document.getElementById("monday2");
      let monday3Value = document.getElementById("monday3");

      //check which values are selected and push to array

      if (monday1Value.checked) {
        dataForAPI.push(monday1Value.value);
      }
      if (monday2Value.checked) {
        dataForAPI.push(monday2Value.value);
      }
      if (monday3Value.checked) {
        dataForAPI.push(monday3Value.value);
      }
      console.log("dataForAPI:", dataForAPI);

      if (
        !document.getElementById("morning").checked &&
        !document.getElementById("afternoon").checked &&
        !document.getElementById("evening").checked
      ) {
        alert("Please select a time of day");
      }

      //MORNING
      else if (document.getElementById("morning").checked) {
        // if morning is selected post to api
        console.log("morning ip", ip);
        fetch(apiEndPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timeOfDay: morningValue,
            ipAddress: ip,
            dataForAPI,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Thank you for voting");
            checkIp();
            // console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }

      //AFTERNOON
      else if (document.getElementById("afternoon").checked) {
        // if afternoon is selected post to api
        // console.log("afternoon ip:", ip);
        fetch(apiEndPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timeOfDay: afternoonValue,
            ipAddress: ip,
            dataForAPI,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Thank you for voting");
            checkIp();
            // console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
      //EVENING
      else if (document.getElementById("evening").checked) {
        // if evening is selected post to api
        console.log("evening ip:", ip);
        fetch(apiEndPoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timeOfDay: eveningValue,
            ipAddress: ip,
            dataForAPI,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
            alert("Thank you for voting");
            checkIp();
            // console.log("Success:", data);
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    }
  });
  // API Section - End
}
