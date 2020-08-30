document.querySelector(".container-questions").onclick = function (event) {
    if (event.target.tagName == "LABEL") {
        const clickedDetails = event.target.closest(".question").querySelector("details"); 
        this.querySelectorAll("[open]")?.forEach( details => {
            if (details != clickedDetails) {
                details.open = false;
            }
        })
        this.querySelectorAll("input")?.forEach( checkbox =>  {
            if (checkbox.closest(".question").querySelector("details")!= clickedDetails) {
                checkbox.checked = false;
            }
        })
        clickedDetails.open = !clickedDetails.open;
    } else if (event.target.tagName == "SUMMARY") {
        event.preventDefault();
    }
};
     