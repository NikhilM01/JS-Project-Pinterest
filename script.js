var arr = [
    { name: "lisa", image: "https://i.pinimg.com/564x/cc/eb/dc/ccebdcfbf20712a20c22e04f23d9ff72.jpg" },
    { name: "Sunflower", image: "https://i.pinimg.com/236x/45/05/7e/45057ed279f2a434470447cdf83ef2f0.jpg" },
    { name: "3d", image: "https://i.pinimg.com/564x/64/5f/2b/645f2b73128182f6754fc19fbf1034d6.jpg" },
    { name: "art", image: "https://i.pinimg.com/564x/32/92/f2/3292f2f930c3ad32f2445b7a6f98e2b3.jpg" },
    { name: "Sigma", image: "https://i.pinimg.com/originals/5f/a8/82/5fa8827650fb35816b76f1d499d83ae5.gif" },
    { name: "do epic shit", image: "https://i.pinimg.com/236x/50/46/33/50463333a130db659bb0c88ae10fbc85.jpg" },
    { name: "black art", image: "https://i.pinimg.com/originals/cb/b7/5e/cbb75ec8b3ca1822ad385f59f5fefc86.gif" },
    { name: "art", image: "https://i.pinimg.com/564x/6f/02/c9/6f02c9afa88f3bb93935c361b5393e1e.jpg" },
    { name: "eyes girl", image: "https://i.pinimg.com/564x/28/1c/1e/281c1e3c003299d0fc015122f0ad412c.jpg" },
    { name: "art", image: "https://i.pinimg.com/736x/5f/49/c6/5f49c63d1995633dd8bef0c881aac27c.jpg" },
    { name: "meme", image: "https://i.pinimg.com/564x/d5/e2/29/d5e22939a1a2fbe9995a7a6539503125.jpg" },
    { name: "anime", image: "https://i.pinimg.com/564x/86/c9/4e/86c94e28554736f94a23debb5088f433.jpg" },
    { name: "web desgin", image: "https://i.pinimg.com/564x/7a/64/22/7a64224c07ec2c423699c1a23cab0879.jpg" },
    { name: "art", image: "https://i.pinimg.com/236x/ac/43/59/ac435905d100de23390a67d029d1b0ce.jpg" },
    { name: "love", image: "https://i.pinimg.com/originals/3c/7a/77/3c7a770da649c31628f60696962cefca.gif" },
    { name: "lisa love", image: "https://i.pinimg.com/564x/98/95/5f/98955fe1555f98a25316354516386f5b.jpg" },
    { name: "cat", image: "https://i.pinimg.com/564x/16/ca/b1/16cab153397fc070d5369635ba891e8d.jpg" },


]

function showTheCards() {
    var clutter = "";
    arr.forEach(function (obj) {
        clutter += `<div class="box">
            <div class="image-container">
                <img class="cursor-pointer" src="${obj.image}" alt="image">
                <div class="overlay">
                    <p class="caption">${obj.name}</p>
                </div>
            </div>
        </div>`;
    });

    document.querySelector(".container")
        .innerHTML = clutter;

}



function handleHomeButtonClick() {
    var homeButton = document.querySelector("#home");

    homeButton.addEventListener("click", function () {
        // Reset the search input
        document.querySelector("#searchinput").value = "";

        // Show all cards in the container
    showTheCards();

        // Hide search suggestions and overlay
        document.querySelector(".searchdata").style.display = "none";
        document.querySelector(".overlay").style.display = "none";
    });
}

function handleSearchFunctionality() {
    var input = document.querySelector("#searchinput");

    input.addEventListener("focus", function () {
        document.querySelector(".overlay").style.display = "block";
    });

    input.addEventListener("blur", function () {
        document.querySelector(".overlay").style.display = "none";
    });

    input.addEventListener("input", function () {
        const filteredArray = arr.filter(obj =>
            obj.name.toLowerCase().startsWith(input.value)
        );
        var clutter = "";
        filteredArray.forEach(function (obj) {
            clutter += `<div class="res flex px-8 py-3">
                <i class="ri-search-line font-semibold mr-5"></i>
                <h3 class="font-semibold">${obj.name}</h3>
            </div>`;
        });
        document.querySelector(".searchdata").style.display = "block";
        document.querySelector(".searchdata").innerHTML = clutter;
    });

    input.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            document.querySelector(".searchdata").style.display = "none";
            document.querySelector(".overlay").style.display = "none";

            // Handle the "Enter" key press, you can update the display here.
            const filteredArray = arr.filter(obj =>
                obj.name.toLowerCase().startsWith(input.value)
            );
            var clutter = "";
            filteredArray.forEach(function (obj) {
                clutter += `<div class="box">
            <div class="image-container">
                <img class="cursor-pointer" src="${obj.image}" alt="image">
                <div class="overlay">
                    <p class="caption">${obj.name}</p>
                </div>
            </div>
        </div>`;
    });
            document.querySelector(".container").innerHTML = clutter;

            // Clear input value and refocus
            input.value = "";
            input.focus();
        }
    });
}

handleSearchFunctionality();
handleHomeButtonClick();
showTheCards();