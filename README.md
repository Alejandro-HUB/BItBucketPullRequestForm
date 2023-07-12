# BitBucket Pull Request Form

This repository contains a React application that allows users to create pull requests using the Bitbucket API. The app retrieves repositories and branches from Bitbucket and provides a form to fill in the required details for creating a pull request.

## Prerequisites

To run this application, you need to have the following installed:

- React
- Bitbucket account with appropriate access and authentication

## Installation

1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run the following command to install the dependencies:

npm install


## Configuration

1. Open the `App.js` file in your preferred code editor.
2. Replace the value of the `workspace` constant with your Bitbucket workspace name.
3. Configure the access tokens for the repositories in the `handleSubmit` function based on your Bitbucket setup.

## Usage

1. Start the application by running the following command in your terminal:

npm start


2. Open your web browser and navigate to `http://localhost:3000` to access the application.
3. Fill in the form with the required details:
   - Select the repository from the dropdown menu.
   - Select the branch from the dropdown menu.
   - Enter the necessary information in the remaining input fields.
4. Click the "Submit" button to create the pull request on Bitbucket.

## Notes

- The application uses the Bitbucket API to retrieve repositories and branches, and to create pull requests.
- You need to have the necessary access and authentication to perform these actions on Bitbucket.
- Make sure to configure the access tokens for the repositories in the `handleSubmit` function before using the application.

## Contributing

Contributions to the Create Pull Request App are welcome! If you encounter any issues or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the [GNU License](https://github.com/Alejandro-HUB/BItBucketPullRequestForm/blob/master/LICENSE).
