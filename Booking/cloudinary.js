let uploadedImageUrl = '';
const imagePreview = document.getElementById('wizardPicturePreview');
const imageUploader = document.getElementById('wizard-picture');
const imageUploadbar = document.getElementById('img-upload-bar');

const CLOUDINARY_URL = `https://api.cloudinary.com/v1_1/dqcc58pzd/upload`
const CLOUDINARY_UPLOAD_PRESET = 'max9u5dj';

imageUploader.addEventListener('change', async (e) => {
    // console.log(e);
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);

    // Send to cloudianry
    const res = await axios.post(
        CLOUDINARY_URL,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            onUploadProgress (e) {
                let progress = Math.round((e.loaded * 100.0) / e.total);
                console.log(progress);
                imageUploadbar.setAttribute('value', progress);
            }
        }
    );
    console.log(res);
    imagePreview.src = res.data.secure_url;
    uploadedImageUrl = res.data.secure_url;
});