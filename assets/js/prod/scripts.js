$(document).ready(function(){Modernizr.mq("only all")?$("html").addClass("mq"):$("html").addClass("no-mq"),$(".menu-btn").on("click touch",function(){$(".menu").toggleClass("show")}),$("#nav-icon").click(function(){$(this).toggleClass("open")})});