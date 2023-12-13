# QrXpress

## Overview

**QrXpress** is a React project that leverages the `html5-qrcode` library (version 2.1.5) for QR code generation and scanning. This web application provides a solution for scanning QR codes using your device's camera, scanning from local file selection, and generating personalized QR codes.

- **Live Link:** [QrXpress](https://qr-xpress.vercel.app)

## Features

### 1. QR Code Scanning

QrXpress allows users to scan QR codes using their device's camera, utilizing the capabilities of the `html5-qrcode` library for seamless and efficient scanning.

### 2. Local File Scanning

The application provides the ability to scan QR codes from locally selected files. This feature, powered by `html5-qrcode`, enables users to import QR code images and decode the information within them.

### 3. Personalized QR Code Generation

QrXpress uses the `html5-qrcode` library for generating personalized QR codes. Users can input custom data, and the application dynamically generates QR codes based on this input.

## Technologies Used

- **ReactJS:** The core library for building the user interface.
- **React Router:** Used for declarative routing to enable navigation between different views of the application.
- **ViteJS:** A fast development server and build tool that enhances the React development experience. It provides features like hot module replacement (HMR) for faster development.
- **Tailwind CSS:** A utility-first CSS framework used for styling. It allows for rapid development and easy customization.
- **html5-qrcode (v2.1.5):** A library for QR code generation and scanning.

## Inspiration

The inspiration behind QrXpress came from real-life situations where the lack of a QR code scanning feature on a mobile device proved inconvenient for me. I was prompted to find a solution after encountering scenarios where QR code scanning was necessary but not readily available especially because unlike more mordern phones, my phone does not have a QR code scanning functionality/feature. A key motivation was attending a developers' festival (DevFest Lagos in November 2023), where the need to quickly scan QR codes became apparent.

## Motivation

The motivation behind QrXpress was to create a versatile QR code solution that not only addresses my personal need for scanning but also empowers users to generate personalized QR codes. The integration of `html5-qrcode` helped facilitate both scanning and generation functionalities within the application.

## Getting Started

To run QrXpress locally, follow these steps:

1. Clone the repository: `git clone https://github.com/Augustine-edeh/QrXpress.git`
2. Navigate to the project folder: `cd QrXpress`
3. Install dependencies: `npm install` or `yarn install`
4. Start the development server: `npm run dev` or `yarn dev`
5. Open your browser and visit `http://localhost:4000`

## Conclusion

QrXpress, with the integration of the `html5-qrcode` library, provides a comprehensive solution for QR code scanning and personalized QR code generation. This project showcases the seamless collaboration of React, ViteJS, Tailwind CSS, and the `html5-qrcode` library in delivering a modern and user-friendly web application.

For more details, issues, or contributions, visit the [QrXpress GitHub repository](https://github.com/Augustine-edeh/QrXpress).

Enjoy exploring the world of QR codes with QrXpress!
