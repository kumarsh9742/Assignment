let counter=()=>{
    setTimeout( ()=>{
        let count=10;
        
        document.getElementById("number").innerText = count;
        setTimeout( (count1)=>{
          let count=count1-1;
         
         document.getElementById("number").innerText = count;
           setTimeout( (count1)=>{
             let count=count1-1;
           
             document.getElementById("number").innerText = count;
               setTimeout( (count1)=>{
                 let count=count1-1;
               
                 document.getElementById("number").innerText = count;
                    setTimeout( (count1)=>{
                      let count=count1-1;
                    
                      document.getElementById("number").innerText = count;
                         setTimeout( (count1)=>{
                          let count=count1-1;
                        
                         document.getElementById("number").innerText = count;      
                            setTimeout( (count1)=>{
                              let count=count1-1;
                             
                             document.getElementById("number").innerText = count;                
                                setTimeout( (count1)=>{
                                let count=count1-1;
                                 
                                 document.getElementById("number").innerText = count;                
                                   setTimeout( (count1)=>{
                                     let count=count1-1;
                                     
                                      document.getElementById("number").innerText = count;         
                                          setTimeout( (count1)=>{
                                          let count=count1-1;
                                          
                                          document.getElementById("number").innerText = count;    
                                              setTimeout( (count1)=>{
                                              let count="HELLO WORLD !!!!!";
                                           
                                              document.getElementById("number").innerText = count;
                                                  },1000,count)
                 
                                          },1000,count)
                 
                                      },1000,count)
                 
                                 },1000,count)
                  
                             },1000,count)
                 
                       },1000,count)
                  
                   },1000,count)
                
               },1000,count)
                
            },1000,count)
               
        },1000,count)
    },1000)
 
 }
 
 counter();