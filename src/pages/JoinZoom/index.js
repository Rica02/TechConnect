// import React from 'react';
// import { ZoomMtg } from '@zoomus/websdk';
// import { Button } from './JoinZoomStyle';

// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.5.0/lib', '/av');

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

// // ZOOM FUNCTION

// function JoinZoom(props) {

//   const meetingConfig = {
//     // setup your signature endpoint here: https://github.com/zoom/meetingsdk-sample-signature-node.js
//     signatureEndpoint: 'https://techconnect-web.herokuapp.com/',
//     // This Sample App has been updated to use SDK App type credentials https://marketplace.zoom.us/docs/guides/build/sdk-app
//     sdkKey: 'mh9S4ciMuTay3vgAGq24F32lcupgCbpPeVxd',
//     meetingNumber: '81973198552',
//     // 1 is host (tutor), 0 is participant (student). Must be 1 to start meeting.
//     //var role = (props.isTutor ? 1 : 0)
//     role: 0,
//     // leaveUrl is the page the user will be redirected to when meeting is over. I set it to homepage for now.
//     // TODO: replace link after web app has been deployed
//     leaveUrl: 'http://localhost:3000',
//     userName: 'user test',    // TODO: get username of currently logged in user
//     userEmail: '',
//     passWord: '1PpbJv',

//     // pass in the registrant's token if your meeting or webinar requires registration. More info here:
//     // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/meetings#join-registered
//     // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/client-view/webinars#join-registered
//     registrantToken: '',

//     // zakToken needed if user the host who's starting the meeting
//     zakToken: '',
//   }


// // function getZakToken() {
// //   try {
// //     await axios.post('https://api.zoom.us/v2/users/{userId}/token', {

// //   })
// //     .then((response) => {

// //     }, (error) => {
// //       alert('error')
// //       console.log(error);
// //       alert("error")

// //     });
// //   } catch (error) {
// //     console.log(error);
// //   }
// // }

//   function getSignature(e) {
//     e.preventDefault();

//     fetch(meetingConfig.signatureEndpoint, {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         meetingNumber: meetingConfig.meetingNumber,
//         role: meetingConfig.role
//       })
//     }).then(res => res.json())
//     .then(response => {
//       startMeeting(response.signature)
//     }).catch(error => {
//       console.error(error)
//     })
//   }

//   function startMeeting(signature) {
//     document.getElementById('zmmtg-root').style.display = 'block'

//     ZoomMtg.init({
//       leaveUrl: meetingConfig.leaveUrl,
//       success: (success) => {
//         console.log(success)

//         ZoomMtg.join({
//           signature: signature,
//           meetingNumber: meetingConfig.meetingNumber,
//           userName: meetingConfig.userName,
//           sdkKey: meetingConfig.sdkKey,
//           userEmail: meetingConfig.userEmail,
//           passWord: meetingConfig.passWord,
//           tk: meetingConfig.registrantToken,
//           zak: (props.isTutor ? meetingConfig.zakToken : ''),

//           success: (success) => {
//             console.log(success)
//           },
//           error: (error) => {
//             console.log(error)
//           }
//         })

//       },
//       error: (error) => {
//         console.log(error)
//       }
//     })
//   }

//   return (
//     <Button onClick={getSignature}>CLICK HERE TO START YOUR LESSON</Button>
//   );
// }

// export default JoinZoom;
