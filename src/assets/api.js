const surveyUrl = "http://127.0.0.1:5005/"

// const surveyUrl = "http://18.216.33.98:5002/"

export default async function hello() {

    const requestOptions = {
        method: 'GET',
    };
    const response = await fetch(surveyUrl + "hello", requestOptions);
    const responseJson = handleResponse(response);
    console.log(responseJson);
    return responseJson;
}

function handleResponse(response) {
    return response.text().then((text) => {
        const data = text && JSON.parse(text);
        data.ok = response.ok
        data.status = response.status
        return data;
    });
}
