// Your task 

// Display the current day at the top of the calender when a user opens the planner.


// Present timeblocks for standard business hours when the user scrolls down.


// Color-code each timeblock based on past, present, and future when the timeblock is viewed.


// Allow a user to enter an event when they click a timeblock


// Save the event in local storage when the save button is clicked in that timeblock.


// Persist events between refreshes of a page



// acceptance criteria 
// should have an hourly block from 9-5
// each hour should have a block, with a save button 
// 1. Display the current day at the top of the calender when a user opens the planner.


// 2. Present timeblocks for standard business hours when the user scrolls down.


// 3. Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// unavailable times are grey (e.g. past times), current hour is orange, future times are green 


// 4. Allow a user to enter an event when they click a timeblock


// 5. Save the event in local storage when the save button is clicked in that timeblock.


// 6. Persist events between refreshes of a page

// 9 hourly blocks 


// local storage of data 

// const localStorageData = [
//     {
//     date: '08-12-2023',
//     data: {
//         9: '9am item',
//         9: '9am item',
//         10: '9am item',
//         15: '9am item',
//         16: '9am item',
//         17: '9am item',
//     }, 
//     {
//         date: '08-12-2023',
//         data: {
//             9: '9am item',
//             9: '9am item',
//             10: '9am item',
//             15: '9am item',
//             16: '9am item',
//             17: '9am item',
//         }
//     } 
// }]


// const today = dayjs().format('DD-MM-YYY');

// const todayData = localStorageData.findIndex(function(element){
//     return element.date === today; 
// }); 
// // populating today data from local storage for different dates 
// if (todayDataIndex <0){
//     const todayData = localStorageData[todayDataIndex];

// // show data9ama - data5pm to the text area of each time

// for (let i=9; i<18; i++){
//     $('#time-block-9').val(data9am);

// document.getElementById('time-block-9').value = data9am; 


// }


//     // const data 9am = todayData.data[9];
//     // const data 9am = todayData.data[9];
//     // const data 9am = todayData.data[9];
//     // const data 9am = todayData.data[9];
//     // const data 9am = todayData.data[17];

//     // show data9am till data5pm to the text area of each time
    
// }

// how to set the textarea of an item 

// if I name my textarea "time-block-9"


// save data to local storage 
// add click to event listener 
// in click event listener 
// get the value of the textarea that correspondes with the button that the user has clicked 
// iff todayDataIndex exists 
// ......     const todayData = localStorageData[todayDataIndex];
//............todayData.data[time] = value of the textarea
// localstorageData[todayDataIndex] = todayData
// localstorage.setItem('data', localStorageData);
// else 
// // const todayData = {
//     date:'10-12-2023',
//     data ()
// }




///

// 1. 
// make timeblocks for each hour
        // div consisting of textarea and save btn
        // can either hardcode in html or generate with js/jquery
        // Important: each time block has a unique id or data attribute corresponding to the hour number it is for
        // ideally that attribute can correspond to the key you use to store the text in local storage
// 2. 
// have timeblock colors correspond to past,     present, future
    // get current time hour via dayjs
    // loop over all the timeblocks, conditionally assign past present or future class (see css) by comparing that timeblock's hour to the current hour
//  3. 
 //saving timeblock text in local storage
    // loop over all the timeblocks and get the current value of the textarea
    // decide how you want to store the text for each hour in local storage
    // potential options:
        // can either store each individual hour as its own key 
        // (e.g. in local storage, hour-9: "something") 
        // or store an array objects for each timeblock 
        // (e.g. [{hour-9: "foo", hour-10: "bar"}])
// 4. 
// // retrieve the save values from local storage and display them inside each timeblock whenever the page reloads 
//     // method depends on how you stored in local storage:
//         // if you stored as individual keys, get each hour value from local storage and display in the corresponding textarea
//         // if you stored as an array, loop over that array, get the text for each hour and render it in the corresponding time block






// insert current day using js.days 
/* <p id="currentDay" class="lead"></p> */

const currentDate = dayjs().format('dddd, MMMM D, YYYY');
const currentHour = dayjs().hour()
console.log (currentDate);
document.getElementById("currentDay").textContent = currentDate;
const timeBlocks = document.querySelectorAll('.time-block');

// const availableHours = (9,10,11,12,13,14,15,16,17)

// have timeblock colors correspond to past,     present, future
// get current time hour via dayjs
// loop over all the timeblocks, conditionally assign past present or future class (see css) by comparing that timeblock's hour to the current hour

document.addEventListener('DOMContentLoaded', function(){
    const timeBlocks = document.querySelectorAll('.time-block');

    timeBlocks.forEach(block=> {
        const blockHour = parseInt(block.dataset.hour);

        if (blockHour < currentHour) {
          block.classList.add('past');
        } else if (blockHour === currentHour) {
          block.classList.add('present');
        } else {
          block.classList.add('future');
        }
    })
})


// for (let i=9; i <= 17; i++){
//     if (currentHour === i) {
//         document.getElementById(i.toString()).classList.add("present");
//     } else if (currentHour < i) {
//         document.getElementById(i.toString()).classList.add("past");
//     } else {
//         document.getElementById(i.toString()).classList.add("future");
//     }
// };