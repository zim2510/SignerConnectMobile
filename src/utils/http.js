const apiUrl = import.meta.env.VITE_API_URL;

export async function login({username, password}) {
    if(username == "admin" && password == "alohomora"){
        return "fake-token lol!";
    }

    // const resp = await fetch(`${apiUrl}/authorize`, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({username, password})
    // });

    // if(resp.ok){
    //     const data = await resp.json();
    //     return data;
    // }
    else{
        throw Error("Uh-oh! That didn't work!")
    }
}
