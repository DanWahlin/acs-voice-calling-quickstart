## Azure Communication Service Calling QuickStart

Azure Communication Service allows you to add real-time multimedia capabilities into your app such as voice, video, chat, and SMS. This example is based on the QuickStart located at:

https://aka.ms/acs-calling-quickstart

For an overview of ACS view the following resources:

* Blog: [Add Real-Time Video, Voice, and Chat to Your App with Azure Communication Services](https://blog.codewithdan.com/add-real-time-video-voice-and-chat-to-your-app-with-azure-communication-services/)
* Video: [What is Azure Communication Services?](https://www.youtube.com/watch?v=SM2Rgyi_0XU)

View the video associated with this sample repo here.

# Running the Sample

1. Create a new Azure Communication Resource in the [Azure Portal](https://portal.azure.com). Once it's created go to `Tools --> Keys`  and copy the first connection string value shown into your clipboard. 
1. Create an `.env` file at the root of this project and add the following into it:

    `CONNECTION_STRING=<your_acs_connection_string_goes_here>`

    Ensure that you replace `<your_acs_connection_string_goes_here>` with the ACS connection string in your clipboard.

1. Run `npm install`
1. Get an access token by running:

    `node issue-access-token.js`

1. Open `client.js` and replace `<USER ACCESS TOKEN>` with the access token value shown in the previous step.

    **NOTE:** The access token is a one-time use token. Once you run the demo and hang up you'll need to create a new access token and replace it in `client.js` again if you want to run the demo again.

1. Start the webpack dev server to run the app:

    `npx webpack-dev-server`

1. Enter  `8:echo123` to call a bot that will answer and allow you to record and playback your voice.
1. Click the `Start Call` button to begin and then follow the voice prompts provided by the bot. Note that this simple demo doesn't allow you to select a microphone.

    **NOTE:** As mentioned earlier, the access token is a one-time use token. Once you run the demo and hang up you'll need to create a new access token as shown earlier and replace it in `client.js` if you want to run the demo again.