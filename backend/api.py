import os
import time

from fastapi import FastAPI, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from prediction import Prediction

app = FastAPI()

origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.post("/predict")
async def predict(image: UploadFile = File(...)):
    image_bytes = await image.read()

    with open(image.filename, "wb") as f:
        f.write(image_bytes)
    image_path = image.filename

    prediction = Prediction()
    prediction.generate_embeddings(image_path)
    result = prediction.predict()
    os.remove(image_path)

    return {"result": result}


def getLicnceInformation():

    userData = Liences.get_object_404(cnic=request.GET.get("cninc"),name=request.GET.get("name"),)

    if userData:
        verify_flag = userData.verify

        if verify_flag:
            return userData

        return "User Application Under progress"

    return "User Application not found"


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("api:app", host="0.0.0.0", port=8000, reload=False, log_level="debug")
