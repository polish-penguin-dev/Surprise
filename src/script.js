$("#start").on("click", async (e) => {
    await confetti({
        particleCount: 60,
        angle: 90,
        spread: 50, 
        startVelocity: 60, 
        decay: 0.9
    }); 

    $(e.currentTarget).hide();
    funny();
});

const list = (obj) => {
    let list = "";
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            list += `${key}: ${obj[key]}<br>`;
        }
    }

    return list;
}

const funny = async () => {
    const backgrounds = ["funny1.gif", "funny2.gif"];
    const random = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    $("body").css("background-image", `url("/assets/${random}")`);
    $("#audio")[0].play();

    const cHeight = $("#container").height();
    $("#text").css("top", cHeight + "px");

    const response = await fetch("https://ipapi.co/json/");
    const data = await response.json();

    $("#text").html(list(data));
};