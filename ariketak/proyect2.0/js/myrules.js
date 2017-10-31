$(document).ready(function(){
	$('#nireforma').validate({
		rules: {
            name:{
                required: true,
                min: 2  
            },
            surname:{
                required: true,
                min: 4  
            },
            user:{
                required: true,
                min: 2  
            },
			email: {
				required: true,
				email:true
				},
			password: {
				required: true,
				rangelength:[8,16]  
				},
			password2: {equalTo:'#password'},
            
            gender:{
                
                required:true
                
            },
        age:{
            required: true,
            min:18
        },
        creditcard:{
            required: true,
            creditcard: true,
            rangelength:[20,20]
        },
			
        },
        
        
        
        
        //rules-en bukaera
		messages: {
			email: {
				required: "Write your email here",
				email: "This is not a email"
				},
			password:{
				required: 'Write a valid password',
				rangelength:'This must be 8 letters min and 16 letters max'
				},
			password2: {
				equalTo: 'The password is not the same'
				},
            gender:{
            required: 'type your genre'
                },
            age: {
                required: 'you must be 18 minimun'
            },
            creditcard:{
                required: '20 digits'
            },
            
            
            //mezu bukaera
        
        
                          }
	});
});