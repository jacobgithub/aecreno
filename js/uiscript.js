/*jQuery time*/
$(document).ready(function() {

    // Main Content	
    $("#home a").click(function() {
        $("#content-a").hide();
        $("#content-d").hide();
        $("#content-c").hide();
        $("#content-e").hide();
        $("#content-f").hide();
		$("#content-r").hide();
        $("#content-t").hide();
        $("#content").show();
    })

    // About Content
    $("#about a").click(function() {
        $("#content").hide();
        $("#content-c").hide();
        $("#content-d").hide();
        $("#content-e").hide();
        $("#content-f").hide();
		$("#content-r").hide();
        $("#content-t").hide();
        $("#content-a").show();
    })

    // Cases Content
    $("#cases a").click(function() {
        $("#content").hide();
        $("#content-a").hide();
        $("#content-d").hide();
        $("#content-e").hide();
        $("#content-f").hide();
		$("#content-r").hide();
        $("#content-t").hide();
        $("#content-c").show();
    })

    // Doctors Content
    $("#doctor a").click(function() {
        $("#content").hide();
        $("#content-a").hide();
        $("#content-c").hide();
        $("#content-e").hide();
        $("#content-f").hide();
		$("#content-r").hide();
        $("#content-t").hide();
        $("#content-d").show();
    })

    // Doctors Equipment
    $("#equipment a").click(function() {
        $("#content").hide();
        $("#content-a").hide();
        $("#content-c").hide();
        $("#content-d").hide();
        $("#content-f").hide();
		$("#content-r").hide();
        $("#content-t").hide();
        $("#content-e").show();
    })

    // FAQ
    $("#faq a").click(function() {
        $("#content").hide();
        $("#content-a").hide();
        $("#content-c").hide();
        $("#content-d").hide();
        $("#content-e").hide();
		$("#content-r").hide();
        $("#content-t").hide();
        $("#content-f").show();
    })

    // RDVM
    $("#rdvm a").click(function() {
        $("#content").hide();
        $("#content-a").hide();
        $("#content-c").hide();
        $("#content-d").hide();
        $("#content-e").hide();
        $("#content-f").hide();
		$("#content-t").hide();
        $("#content-r").show();
    })	
	
    // Tour
    $("#tour a").click(function() {
        $("#content").hide();
        $("#content-a").hide();
        $("#content-c").hide();
        $("#content-d").hide();
        $("#content-e").hide();
        $("#content-f").hide();
		$("#content-r").hide();
        $("#content-t").show();
    })

    // Image Size
    $(".telemetry-photo a").click(function() {
        $("#telemetry-photo").toggleClass("telemetry-photo-big");
    })

    $(".radiology-photo a").click(function() {
        $("#radiology-photo").toggleClass("radiology-photo-big");
    })
})