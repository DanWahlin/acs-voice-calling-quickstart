import { CallClient, CallAgent } from "@azure/communication-calling";
import { AzureCommunicationTokenCredential } from '@azure/communication-common';

let call;
let callAgent;
const calleeInput = document.getElementById("callee-id-input");
const callButton = document.getElementById("call-button");
const hangUpButton = document.getElementById("hang-up-button");

async function init() {
    const callClient = new CallClient();
    const tokenCredential = new AzureCommunicationTokenCredential("eyJhbGciOiJSUzI1NiIsImtpZCI6IjEwMiIsIng1dCI6IjNNSnZRYzhrWVNLd1hqbEIySmx6NTRQVzNBYyIsInR5cCI6IkpXVCJ9.eyJza3lwZWlkIjoiYWNzOmZmZWNiZmJiLWNjMDUtNDk2YS1iMjc2LTA2NTNkZDkzOWE0Zl8wMDAwMDAwOC1hNDQzLTA2MjUtZjZjNy01OTNhMGQwMDRlNTEiLCJzY3AiOjE3OTIsImNzaSI6IjE2MTQ5ODExOTQiLCJpYXQiOjE2MTQ5ODExOTQsImV4cCI6MTYxNTA2NzU5NCwiYWNzU2NvcGUiOiJ2b2lwIiwicmVzb3VyY2VJZCI6ImZmZWNiZmJiLWNjMDUtNDk2YS1iMjc2LTA2NTNkZDkzOWE0ZiJ9.VN2CYx3gj04m71TykvlHoPuVLUJU0j8yDUCznSdTEmWSUo-m9fRuf51RIl519oScwa8WQkhfNmkxeX3kJw0kLPQQNaGud184utrrEWoV3H8lbIhJkg9Cfp9JO98us8YuWuSFV_X9iCNBER_yHyOpjmHhw7TZt6XYQcVNqi3gP71DIOGB0bM3lpw6XuSeEcEVboRmeBBjP4jFD5FUiYI2AnfEQfnaM90NixulJps-45JiisGIQDLSvTXAuQ7gHPKcaSPoDpCyfR_58v_wLs28NRSMMx3nF2iZT3--hhbrvtk9IxDfY-fhDk94R6HtRP7gehD1X6CczjTzIsaZlV_ddQ");
    callAgent = await callClient.createCallAgent(tokenCredential);
    callButton.disabled = false;
}
init();

callButton.addEventListener("click", () => {
    // start a call
    const userToCall = calleeInput.value;
    call = callAgent.startCall(
        [{ communicationUserId: userToCall }],
        {}
    );
    // toggle button states
    hangUpButton.disabled = false;
    callButton.disabled = true;
});

hangUpButton.addEventListener("click", () => {
    // end the current call
    call.hangUp({ forEveryone: true });
  
    // toggle button states
    hangUpButton.disabled = true;
    callButton.disabled = false;
});