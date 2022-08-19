// import React from 'react';
// import { ZoomMtg } from '@zoomus/websdk';

// ZoomMtg.setZoomJSLib('https://source.zoom.us/2.5.0/lib', '/av');

// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareWebSDK();
// // loads language files, also passes any error messages to the ui
// ZoomMtg.i18n.load('en-US');
// ZoomMtg.i18n.reload('en-US');

// // JOIN ZOOM FUNCTION
// // NOTE: currently non-functional due to issue with Zoom SDK's CSS overriding our custom CSS

// function JoinZoom(props) {

//   TODO: get this info from DB
//   const meetingConfig = {
//     signatureEndpoint: 'https://techconnect-web.herokuapp.com/',
//     sdkKey: '[SDK KEY]',
//     meetingNumber: '[MEETING ID]',
//     role = (props.isTutor ? 1 : 0),          // 1 is host (tutor), 0 is participant (student). Must be 1 to start meeting.
//     //role: 0,
//     leaveUrl: 'http://localhost:3000',       // page the user will be redirected to when meeting is over
//     userName: '[USER FIRST NAME]',
//     userEmail: '',                           // not required
//     passWord: '[MEETING PASSWORD]',
//     registrantToken: '',                     // not required (only required if registration is required)
//     zakToken: '[ZAK TOKEN]',                 // zakToken needed if user the host who's starting the meeting
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
//     <button className="styled-button" onClick={getSignature}>CLICK HERE TO START YOUR LESSON</button>
//   );
// }

// export default JoinZoom;
