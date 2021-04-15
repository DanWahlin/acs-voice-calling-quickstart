const path = require('path'),
      { CommunicationIdentityClient } = require('@azure/communication-identity');

const ENV_FILE = path.join(__dirname, '.env');
require('dotenv').config({ path: ENV_FILE });

const main = async () => {
  console.log("Azure Communication Services - Access Tokens Quickstart")

  // This code demonstrates how to fetch your connection string
  // from an environment variable.
  const connectionString = process.env['CONNECTION_STRING'];

  // Instantiate the identity client
  const identityClient = new CommunicationIdentityClient(connectionString);

  // Issue an identity and an access token with the "voip" scope for the new identity
  let identityTokenResponse = await identityClient.createUserAndToken(["voip"]);
  const { token, expiresOn, user } = identityTokenResponse;
  console.log(`\nCreated an identity with ID: ${user.communicationUserId}`);
  console.log(`\nIssued an access token with 'voip' scope that expires at ${expiresOn}:`);
  console.log(token);

};

main().catch((error) => {
  console.log("Encountered an error");
  console.log(error);
})