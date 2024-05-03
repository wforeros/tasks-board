<p align="center">
  <img src="https://www.stanleyblackanddecker.com/themes/custom/stanley_default/logo.svg" width="200" alt="Express logo" />
</p>

# Italy Pro+ Tool Loan

Application that allows SBD employees to register loan tools and assign them to dealers. Also, allows dealers to loan tools to end users who have regular tools on repair and keep the track of all the loan tools.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/3pilab/stan-pro-loan-tool-program-backend.git
   cd stan-pro-loan-tool-program-backend
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create the .env file and populate it with the required environment variables.
   ```bash
   touch .env
   ```

#### Example .env File

Please create a `.env` file in the root directory and populate it with the following variables:
DB_HOST=localhost
DB_PORT=27017
SECRET_KEY=mysecretkey

## Locally running

    npm run dev

By default, the service will be running on port 3000. If you want to use a different port, specify it in the .env file.

## Building and deploy

You can use docker-compose to deploy a service to testing in local environment

- `docker-compose up -d`

## License

This project is licensed under the 3PI Medios Agency Digital 2023 license.
