const surveyUrl = "http://127.0.0.1:5005/"

// const surveyUrl = "http://18.216.33.98:5002/"

export async function hello() {

    const requestOptions = {
        method: 'GET',
    };
    const response = await fetch(surveyUrl + "hello", requestOptions);
    const responseJson = handleResponse(response);
    console.log(responseJson);
    return responseJson;
}

export async function getMetric() {

    const requestOptions = {
        method: 'GET',
    };
    const response = await fetch(surveyUrl + "getMetric", requestOptions);
    const responseJson = handleResponse(response);
    console.log(responseJson);
    return responseJson;
}

export async function saveMetric(data: any) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "data": data }),
    };
    const response = await fetch(surveyUrl + "saveMetric", requestOptions);
    const responseJson = handleResponse(response);
    console.log(responseJson);
    return responseJson;
}

export async function getUser(userName: any) {

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "userName": userName }),
    };
    const response = await fetch(surveyUrl + "getUser", requestOptions);
    const responseJson = handleResponse(response);
    console.log(responseJson);
    return responseJson;
}

function handleResponse(response: any) {
    return response.text().then((text: any) => {
        console.log(text)
        const data = text && JSON.parse(text);
        data.ok = response.ok
        data.status = response.status
        return data;
    });
}

// export default { hello(), getMetric() };