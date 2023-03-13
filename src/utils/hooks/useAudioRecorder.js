import { useState } from "react";

const useAudioRecorder = () => {
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [streamBeingCaptured, setStreamBeingCaptured] = useState(null);
  const [audioURL, setAudioURL] = useState("");

  const [recording, setRecording] = useState(false);

  const start = async () => {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      return Promise.reject(new Error("mediaDevices API or getUserMedia method is not supported in this browser."));
    } else {
      return navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
          setStreamBeingCaptured(stream);

          let medRecorder = new MediaRecorder(stream);
          setMediaRecorder(medRecorder);
          setAudioChunks([]);

          medRecorder.addEventListener("dataavailable", event => {
            setAudioChunks(chunks => [...chunks, event.data]);
          });

          medRecorder.start();
          setRecording(true);
        });
    }
  };

  const stop = async () => {
    return new Promise(resolve => {
      let mimeType = mediaRecorder.mimeType;

      mediaRecorder.addEventListener("stop", () => {
        let audioBlob = new Blob(audioChunks, { type: mimeType });
        let audioUrl = URL.createObjectURL(audioBlob);
        setAudioURL(audioUrl);
        setRecording(false);
        resolve(audioBlob);
      });

      mediaRecorder.stop();
      streamBeingCaptured.getTracks()
        .forEach(track => track.stop());
      // cancel();
    });
  };

  const cancel = () => {
    mediaRecorder.stop();
    stopStream();
    resetRecordingProperties();
    setRecording(false);
  };

  const stopStream = () => {
    streamBeingCaptured.getTracks()
      .forEach(track => track.stop());
    setRecording(false);
  };

  const resetRecordingProperties = () => {
    setMediaRecorder(null);
    setStreamBeingCaptured(null);
    setRecording(false);
  };

  return {
    audioChunks,
    mediaRecorder,
    streamBeingCaptured,
    start,
    stop,
    cancel,
    audioURL,
    recording
  };
}

export default useAudioRecorder;

// import { useState } from "react";

// const useAudioRecorder = () => {
//   const [audioBlobs, setAudioBlobs] = useState([]);
//   const [mediaRecorder, setMediaRecorder] = useState(null);
//   const [streamBeingCaptured, setStreamBeingCaptured] = useState(null);

//   const [recording, setRecording] = useState(false);

//   const start = async () => {
//     if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
//       return Promise.reject(new Error("mediaDevices API or getUserMedia method is not supported in this browser."));
//     } else {
//       return navigator.mediaDevices.getUserMedia({ audio: true })
//         .then(stream => {
//           setRecording(true);
//           setStreamBeingCaptured(stream);

//           let medRecorder = new MediaRecorder(stream);
//           setMediaRecorder(medRecorder);
//           setAudioBlobs([]);

//           medRecorder.addEventListener("dataavailable", event => {
//             setAudioBlobs(audioBlobs => [...audioBlobs, event.data]);
//           });

//           medRecorder.start();
//         });
//     }
//   };

//   const stop = async () => {
//     return new Promise(resolve => {
//       let mimeType = mediaRecorder.mimeType;

//       mediaRecorder.addEventListener("stop", () => {
//         let audioBlob = new Blob(audioBlobs, { type: mimeType });

//         resolve(audioBlob);

//         setRecording(false);
//       });

//       cancel();
//     });
//   };

//   const cancel = () => {
//     mediaRecorder.stop();
//     stopStream();
//     resetRecordingProperties();
//     setRecording(false);
//   };

//   const stopStream = () => {
//     streamBeingCaptured.getTracks()
//       .forEach(track => track.stop());
//     setRecording(false);
//   };

//   const resetRecordingProperties = () => {
//     setMediaRecorder(null);
//     setStreamBeingCaptured(null);
//     setRecording(false);
//   };

//   return {
//     audioBlobs,
//     mediaRecorder,
//     streamBeingCaptured,
//     start,
//     stop,
//     cancel,
//     recording
//   };
// }

// export default useAudioRecorder;