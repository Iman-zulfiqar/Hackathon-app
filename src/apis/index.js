const base_url='https://63aaa3b8fdc006ba6047ae79.mockapi.io/todos';

export const getData = ({setSortedData,customSort})=>{
    fetch(`${base_url}`
    ,{
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    }
    )
      .then(function(response){
        return response.json();
      })
      .then(function(myJson) {
        setSortedData(myJson.sort(customSort))
      });
}

export const postData = ({clickHanddler,item,setSortedData,customSort})=>{
    fetch(`${base_url}`, {  
        method: 'POST', 
        headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           },
        mode: 'cors', 
        body: JSON.stringify(item) 
    }).then(()=>{
        getData({setSortedData,customSort});
    }
    ).then(()=>{
        clickHanddler();
    }
    )
}