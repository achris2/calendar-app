const currentDate = dayjs().format('dddd, MMMM D, YYYY');
const currentHour = dayjs().hour();
document.getElementById("currentDay").textContent = currentDate;
const timeBlocksContainer = document.querySelector('.container');
var userEntry = JSON.parse(localStorage.getItem("workSchedule"));  

// initialise local storage var 

var workSchedule = [
    {
        time: "9:00",
        entry: "",
        id: 9, 
    },
    {
        time: "10:00",
        entry: "",
        id: 10, 
    },
    {
        time: "11:00",
        entry: "",
        id: 11, 
    },
    {
        time: "12:00",
        entry: "",
        id: 12,
    },
    {
        time: "13:00",
        entry: "",
        id: 13,
    },
    {
        time: "14:00",
        entry: "",
        id: 14, 
    },
    {
        time: "15:00",
        entry: "",
        id: 15, 
    },
    {
        time: "16:00",
        entry: "",
        id: 16, 
    },
    {
        time: "17:00",
        entry: "",
        id: 17, 
    },

]

// // generate rows 

workSchedule.forEach((timeEntry) => {
    const timeBlock = document.createElement('div');
    timeBlock.classList.add ('time-block','row');
    timeBlock.id = `${timeEntry.id}`;
    timeBlock.innerHTML = `
    <div class="hour col-sm-1">${timeEntry.time}</div>
    <textarea id="${timeEntry.id}" class="col-sm-10">${timeEntry.entry}</textarea>
    <button class="saveBtn col-sm-1" data-hour="${timeEntry.time}">
        <i class="far fa-save"></i>
    </button>`;
    document.querySelector(".container").appendChild(timeBlock);
});;



// colour rows based on current hour 

function updateColours() {
    document.querySelectorAll(".time-block").forEach(function(timeBlock) {
        timeBlock.classList.remove("past", "present", "future");
        const blockHour = parseInt(timeBlock.id);
        if (currentHour === blockHour) {
            timeBlock.classList.add("present");
        } else if (currentHour < blockHour) {
            timeBlock.classList.add("future");
        } else {
            timeBlock.classList.add("past");
        }
    });
}

// updates colours 

updateColours();


// event listeners for local storage 

