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

const funny = async () => {
    const backgrounds = ["funny1.gif", "funny2.gif"];
    const random = backgrounds[Math.floor(Math.random() * backgrounds.length)];

    $("body").css("background-image", `url("/assets/${random}")`);
    $("#audio")[0].play();

    const cHeight = $("#container").height();
    $("#text").css("top", cHeight + "px");

    const response = await fetch("http://ip-api/json/");
    const data = await response.data;

    console.log(data);
};