const ApiClient = async function (access_token, url, method, contentType, body)
{
    const response = await fetch(url,
        {
            method: method,
            headers: {
                'Content-Type': contentType,
                'Authorization': `Bearer ${access_token}`
            },
            body: body,
        }
    );
    const json = await response.json();

    console.log(json);

    return json;
}

export default ApiClient