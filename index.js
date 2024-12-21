$(".show-nav").click(function(){
    $(".nav-list ").slideDown("slow"); 
    $(".show-nav").css("display", "none"); 
    $(".close-nav").css("display",  "block"); 
});

$(".close-nav").click(function(){
    $(".nav-list ").slideUp("slow");  
    $(".show-nav").css("display", "block"); 
    $(".close-nav").css("display", "none");
})

$(".bookmark-btn").click(function(){
    $(".bookmark-icon1").css("display", "none");
    $(".bookmark-icon2").css("display", "inline");
    $(".bookmark-btn").css("color", "hsl(176, 72%, 28%)");
})


$(".reward-btn").click(function(){
    $(".section-modal").css("display", "flex");
})

$(".close-modal").click(function(){
    $(".section-modal").css("display", "none");
    $(".bamboo-pledge-checkbox").prop("checked", false);
    $(".total-reward-modal").css("display", "none");
    $(".horizontal").css("display", "none");
    $(".pledg-container").removeClass("active");
})

var content = document.querySelector(".about-section-modal")

content.addEventListener("click", (event)=>{
    let positionClick = event.target
    if(positionClick.classList.contains("make-selection")){
		let selection = positionClick.parentElement.parentElement.parentElement.parentElement.parentElement.id;
		$(`#${selection}`).find(".pledg-container").addClass("active");
        $(`#${selection}`).find(".bamboo-pledge-checkbox").prop("checked", true);
        $(`#${selection}`).find(".total-reward-modal").css("display", "flex");
        $(`#${selection}`).find(".horizontal").css("display", "block");
        
        console.log(selection)
	}
})

$(".reward-btn-modal").click(function(){
    $(".completed-box").css("display", "flex")
    $(".section-modal").css("display", "none")
})

$(".got-it-btn").click(function(){
    $(".completed-box").css("display", "none")
})