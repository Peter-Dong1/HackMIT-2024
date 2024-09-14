import base64
import numpy as np
from flask import Flask, request, Response
from flask_cors import CORS
import pyaudio
import queue
# from keras.models import load_model  # Commented out model import
# import librosa  # Commented out librosa import
# import librosa.display  # Commented out librosa import

app = Flask(__name__)
CORS(app)

# Commenting out the model loading and emotion label definitions
# model = load_model("emotion_detection_model.h5")
# emotion_labels = ['neutral', 'calm', 'happy', 'sad', 'angry', 'fearful', 'disgust', 'surprised']

# PyAudio parameters
CHUNK = 1024
FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
SECONDS = 2  # Duration to accumulate data for each prediction

# Queue for audio data
audio_queue = queue.Queue()

# Audio callback function
def audio_callback(in_data, frame_count, time_info, status):
    audio_queue.put(in_data)
    return (None, pyaudio.paContinue)

# Commenting out the preprocess_input function
# def preprocess_input(data):
#     # Convert to floating-point and normalize
#     data_float = data.astype(np.float32) / np.iinfo(data.dtype).max
#     # Extract MFCC features
#     mfcc = np.mean(librosa.feature.mfcc(y=data_float, sr=RATE, n_mfcc=40).T, axis=0)
#     return np.expand_dims(mfcc, axis=0)

# Create PyAudio object
p = pyaudio.PyAudio()

# Open microphone stream
stream = p.open(format=FORMAT,
                channels=CHANNELS,
                rate=RATE,
                input=True,
                frames_per_buffer=CHUNK,
                stream_callback=audio_callback)

@app.route("/")
def index():
    return "Hello world!"

@app.post('/stream')
def stream_audio():
    accumulated_data = np.array([], dtype=np.int16)
    
    def generate():
        nonlocal accumulated_data
        try:
            while True:
                # Get audio data from queue
                audio_data = audio_queue.get()
                # Convert bytes to numpy array
                audio_np = np.frombuffer(audio_data, dtype=np.int16)
                # Accumulate audio data
                accumulated_data = np.concatenate((accumulated_data, audio_np))
                
                # Commenting out the emotion recognition part
                # if len(accumulated_data) >= RATE * SECONDS:
                #     input_data = preprocess_input(accumulated_data[:RATE * SECONDS])
                #     prediction = model.predict(input_data)
                #     predicted_label = emotion_labels[np.argmax(prediction)]
                #     print("Predicted emotion:", predicted_label)
                #     accumulated_data = np.array([], dtype=np.int16)
                
                # Yield the audio data chunk for streaming
                yield audio_data
        except GeneratorExit:
            stream.stop_stream()
            stream.close()
            p.terminate()

    return Response(generate(), mimetype="audio/wav")

@app.post("/img-rec")
def img_rec():
    img = base64.b64decode(request.data)

    with open("image.jpg", "wb") as f:
        f.write(img)

    # Commenting out the analyze_img function call as it was not provided
    # return analyze_img()

    # Placeholder response
    return {"status": "success", "message": "Image received!"}

if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True)
