	var complete = '<button id="complete" class="complete btn-xs" style="float: right">Complete</button>';
	var remove = '<button id="remove" class="remove btn-xs" style="float: right">Remove</button>';
	var priority = '<button id="priority" class="priority btn-xs" style="float: right">Make Priority</button>';

    // ensure document is ready for manipulation
    $( document ).ready(function() {
    	$("button").click(function(event){
			event.preventDefault();
			// declare jQuery objects
			var value = $("#usertext").val();
			var completebtn = $(complete);
			var removebtn = $(remove);
			var prioritybtn = $(priority);
			
			// append user text to "active" table
			$("#active").append($('<tr>').append( $('<td>').append(value, completebtn, prioritybtn, removebtn)));
			$("#usertext").val("");

			// remove task from table
			$(removebtn).click(function(event){
				$(this).parent().parent().remove();
			});

			// hightlight row when priority clicked
			$(prioritybtn).click(function(){
				$(this).parent().parent().css("background-color", "red");
			});

			// move to completed table.  Remove from active table.
			$(completebtn).click(function(){
				$(this).parent().parent().remove();
				$("#completed").append( $('<tr>').append( $('<td>').append(value, removebtn)));
				
				// remove task from table
				$(removebtn).click(function(event){
					$(this).parent().parent().remove();
				});
			});
		});		
    });


    
