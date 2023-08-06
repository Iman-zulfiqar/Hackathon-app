export const genericInstance = ({Method,payload})=>{
    fetch('data.json', {  
    
        method: Method, 
        mode: 'cors', 
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
           if(Method === 'POST')
           { 
            body: JSON.stringify(payload) 
          }
    
      })
}