		
jQuery(document).ready(function() {
		     //隐藏
		     
		    $(".nav2_hide").hide();
		    $(".hidebtn").mouseover(function(){
		        $(".nav2_hide").show();
		        $(".hidebtn").hide();
		    });
		    $(".nav2_hide").mouseover(function(){
		           
		        $(this).show(); 
		        $(".hidebtn").hide();
		    });
		    $(".nav2_hide").mouseout(function(){
		         
		            $(this).hide(); 
		            $(".hidebtn").show();
		    });
		   
		   $(".speak").hide();
		    //置顶 
		    $(function(){
			var elm = $('.nav2');
			var startPos = $(elm).offset().top;
			$.event.add(window, "scroll", function () {
			var p = $(window).scrollTop();
			$(elm).css('position', ((p) > startPos) ? 'fixed' : 'static');
			$(elm).css('top', ((p) > startPos) ? '0px' : '');
			});
			});   
		
			
			//点击图片
			$(".nav1_img").click(function(){
				$(".back").css("display","block");
				$(".tanchu").css("display","block");
			});
			
			//返回
			 	$("button.tanchu_btn").click(function(){  
			 		$(".back").css("display","none");
					$(".tanchu").css("display","none");
			 	});
			//切换账号
				$("button.tanchu_qhbtn").click(function(){
					window.location.href="login.html";
				});
				
			$("[data-toggle='popover']").bind('click',function(e){
				
            	$("[data-toggle='popover']").popover({html : true });
            	
            });

		});
			
		

		