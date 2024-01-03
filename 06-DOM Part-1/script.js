// let button = document.getElementById("myId"); //h1
// console.dir(button);

// let headings = document.getElementsByClassName("heading-class");
// console.dir(headings);
// console.log(headings);

// console.dir(document.body.firstChild)


// let firstEl = document.querySelector("p"); //1st element
// console.dir(firstEl);

// let allEl = document.querySelectorAll("p"); //1st element
// console.dir(allEl);

// let div = document.querySelector("div");
// console.log(div);

// let heading = document.querySelector("h1");

// let h2 = document.querySelector("h2");

// console.dir(h2.innerText);

// h2.innerText = h2.innerText + " from Sugyan Lama"




let divs = document.querySelectorAll(".box");

for(div of divs) {
    div.innerText = `new unique value${idx}`;
    idx++;
}

// divs[0].innerText = "new unique value 1";
// divs[0].innerText = "new unique value 2";
// divs[0].innerText = "new unique value 3";