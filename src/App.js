import React, { useEffect, useState } from "react";
import './App.css';
import FormInput from './Components/FormInput';
import { inputs } from './ComponentAttributes/formInput'
import ApiClient from './Components/ApiClient'

const App = () => {

    const workspace = 'alopezprojects';

    const [values, setValues] = useState({
        repository: "",
        branch: "",
        databasechanges: "",
        qainstructions: "",
    });

    const [apiResponse, setApiResponse] = useState({
        repositories: [],
        branches: [],
        isError: false,
        errorMessage: ""
    });

    const fetchData = async (access_token, url, contentType, dataType) => {

        //Get Repositories from BitBucket
        var data = await ApiClient(access_token, url, "GET", contentType, null);

        if (data != null) {
            if (dataType === "branches") {
                for (var i = 0; i < data.values.length; i++) {
                    if (!apiResponse.branches.includes(data.values[i].name.toString())) {
                        apiResponse.branches.push(data.values[i].name.toString());
                    }
                }
                //values.branch = apiResponse.branches[0];
            }
            else
            {
                for (var i = 0; i < data.values.length; i++) {
                    if (!apiResponse.repositories.includes(data.values[i].slug.toString())) {
                        apiResponse.repositories.push(data.values[i].slug.toString());
                    }
                }
                //values.branch = apiResponse.repositories[0];
            }
        }
        else {
            apiResponse.isError = true;
            apiResponse.errorMessage = "Something went wrong";
        }
    }


    useEffect(() => {
        
        fetchData(
            "",
            `https://api.bitbucket.org/2.0/repositories/${workspace}`,
            'application/json',
            'repository');

        if (values.repository) {
            fetchData(
                "",
                `https://api.bitbucket.org/2.0/repositories/${workspace}/${values.repository}/refs/branches`,
                'application/json',
                'branches');
        }
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(values);

        //Create pull request - body
        const createBody =
        {
            title: `${values.branch} - Pull Request`,
            source:
            {
                branch:
                {
                    name: values.branch
                }
            },
            destination:
            {
                branch:
                {
                    name: 'main'
                }
            }
        };

        const body = JSON.stringify(createBody);

        //Access Token
        var access_token = "";
        if (values.repository == "isalejandro") {
            access_token = "tewCArThAd5dFNlJn30G";
        }
        else if (values.repository == "myname")
        {
            access_token = "IIdcQS5JaDflXh44j9wG";
        }

        console.log(body);


        var url = `https://api.bitbucket.org/2.0/repositories/${workspace}/${values.repository}/pullrequests`;

        var data = ApiClient(access_token, url, "POST", 'application/json', body);

        console.log(data);
    }

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });

        if (e.target.name == "repository" && values.repository)
        {
            fetchData(
                "",
                `https://api.bitbucket.org/2.0/repositories/${workspace}/${values.repository}/refs/branches`,
                'application/json',
                'branches');
        }
    }

    if (apiResponse.isError) {
        return <div>{apiResponse.errorMessage}</div>;
    }

    return <div className="app">
        <form onSubmit={handleSubmit}>
            <h1>Create Pull Request</h1>
            {inputs.map((input) => (
                <FormInput
                    key={input.id} {...input}
                    value={values[input.name]}
                    onChange={onChange}
                    valuesRepo={apiResponse.repositories}
                    valuesBranch={apiResponse.branches} ></FormInput>
            ))}
            <button>Submit</button>
        </form>
    </div>;
};

export default App;



