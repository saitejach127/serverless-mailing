# serverless-mailing
MaaS - Mailing as a service using Serverless firebase functions

This is a Mailing Service which uses firebase functions to run as a serverless functions on cloud

Just send a POST request to <a href="https://us-central1-serverless-mailing.cloudfunctions.net/sendmail"> Here </a>

In format JSON 
{
  "subject": "Subject to send",
  "recievers" : array of recievers list,
  "info" : "Text to be send "
}
