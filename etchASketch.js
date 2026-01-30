

const getMainDiv = document.getElementById("mainDiv")
const createButton = document.querySelector("button");





function userInput() {
    createButton.addEventListener('click', () => {
        let personGrid = prompt("Please enter how many number of grids would you like");
        
        const grids = personGrid;
        const sixtenBySixteen = grids * grids;

        for (let index = 0; index < sixtenBySixteen; index++) {
            const div = document.createElement("div");
            div.id = "flex-item";

            div.addEventListener('mousemove', () => {
                div.style.backgroundColor = "black";

            })
            getMainDiv.appendChild(div);
        }

    })
}

userInput();