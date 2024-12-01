# Image WebP Converter

This project is a simple **Node.js** server that allows users to upload images via a web form, converts them to the **WebP** format, and then provides the converted image for download. The server uses **Express**, **Multer**, and **Sharp** for handling uploads, processing images, and serving responses.

---

## Features

- Upload any supported image format (e.g., JPG, PNG, etc.).
- Convert the image to WebP format with optimized quality.
- Automatically download the converted image.
- Simple and clean web interface for users.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Lightweight web framework for handling routes and requests.
- **Sharp**: High-performance image processing library.
- **Multer**: Middleware for handling file uploads.
- **HTML**: Basic frontend for the upload form.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/image-webp-converter.git
   cd image-webp-converter
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the server:
   ```bash
   node index.js
   ```

4. Open a web browser and navigate to:
   ```
   http://localhost:3000
   ```

---

## Project Structure

```
image-webp-server/
├── index.js        # Main server file
├── public/         # Static files for the frontend
│   ├── index.html  # HTML form for uploading images
└── uploads/        # Temporary storage for uploaded files
```

---

## Usage

1. Open the app in your browser at [http://localhost:3000](http://localhost:3000).
2. Use the form to upload an image from your device.
3. The server will convert the image to WebP format.
4. The converted image will automatically be downloaded.

---

## Example Output

- Input: `image.jpg` (or any supported image format)
- Output: `image-convertie.webp`

---

## Customization

- **Quality Settings**: The WebP conversion quality is set to 80 by default. You can modify this in the `index.js` file:
  ```javascript
  .webp({ quality: 80 })
  ```
- **Static Files**: You can update the HTML in the `public/index.html` file to enhance the frontend.

---

## Future Improvements

- Add support for multiple image uploads.
- Validate file types and size limits on both client and server side.
- Improve the user interface with CSS frameworks like Bootstrap or Tailwind CSS.
- Add a preview of the uploaded image before conversion.

---

## License

This project is licensed under the MIT License. Feel free to use, modify, and distribute it as needed.