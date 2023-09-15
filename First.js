



document.addEventListener('DOMContentLoaded', function () {
    const fileInput = document.getElementById('file-input');
    const uploadButton = document.getElementById('upload-button');
    const imageContainer = document.getElementById('uploaded-image');
    const imageList = document.querySelector('.image-list');

    // Function to get the current date and time in a formatted string
    function getCurrentDateTime() {
        const now = new Date();
        const formattedDate = now.toLocaleDateString();
        const formattedTime = now.toLocaleTimeString();
        return formattedDate + " " + formattedTime;
    }

    // Add an event listener to the file input to handle image selection
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];

        if (file) {
            const imageURL = URL.createObjectURL(file);
            imageContainer.src = imageURL;

            // Create a new list item for the image with date and file path
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <img src="${imageURL}" ">
                <p>Date: ${getCurrentDateTime()}</p>
                <p>File Path: ${file.name}</p>
            `;

            //this is a list of images, and appendchild to make sure previous image does not go away
            imageList.appendChild(listItem);
        }
    });

    // Add an event listener to the upload button to append the uploaded image to the image list
    uploadButton.addEventListener('click', function () {
        const clonedImage = imageContainer.cloneNode(true);
        clonedImage.removeAttribute('id');
        imageList.appendChild(clonedImage);
    });
});
