import { useState } from "react";

const useAudioRecorder = () => {
  const [audioURL, setAudioURL] = useState("");
  const [audioChunks, setAudioChunks] = useState([]);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [streamCaptured, setStreamCaptured] = useState(null);
  const [isRecording, setIsRecording] = useState(false);

  const startRecording = () => {
    if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia)) {
      return Promise.reject(new Error("mediaDevices API or getUserMedia method is not supported in this browser."));
    } else {
      clearVariables();

      navigator.mediaDevices.getUserMedia({ audio: true })
        .then((stream) => {
          setIsRecording(true);
          setStreamCaptured(stream);

          const recorder = new MediaRecorder(stream);
          setMediaRecorder(recorder);

          recorder.addEventListener("dataavailable", (event) => {
            setAudioChunks((chunk) => [...chunk, event.data]);
          });

          recorder.start();
        })
        .catch((error) => console.error(error));
    }
  };

  const stopRecording = () => {
    mediaRecorder.stop();

    const audioBlob = new Blob(audioChunks);

    setAudioURL(URL.createObjectURL(audioBlob));

    streamCaptured.getTracks()
      .forEach(track => track.stop());

    setIsRecording(false);
  };

  const showRecording = () => {
    const audioBlob = new Blob(audioChunks);

    setAudioURL(URL.createObjectURL(audioBlob));

    streamCaptured.getTracks()
      .forEach(track => track.stop());

    setIsRecording(false);
  };

  const clearVariables = () => {
    setAudioChunks([]);
    setMediaRecorder(null);
    setAudioURL(null);
    setStreamCaptured(null);
    setIsRecording(false);
  }

  return {
    startRecording,
    stopRecording,
    showRecording,
    audioURL,
    isRecording
  };
};

export default useAudioRecorder;