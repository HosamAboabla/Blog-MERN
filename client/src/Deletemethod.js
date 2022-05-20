async function Deletemethod(url,data) {

    let response = await fetch(url,
    {
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    var err = true
    if (response.ok){
        err = false;
    }
    let resJson = await response.json();
    var mess = resJson.Message;      
    return {err, mess}

}

export default Deletemethod ;