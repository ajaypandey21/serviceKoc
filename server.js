const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const port = 3001;
app.use(cors());

// Route 1: Send JSON response

// Route 2: Get image blob from file based on image name
app.get("/get-image/:imageName", (req, res) => {
  const imageName = req.params.imageName;
  const imagePath = path.join(__dirname, "images", imageName);
  console.log("imahepath", imagePath);

  // Check if the requested image exists in the directory
  fs.stat(imagePath, (err) => {
    if (err) {
      return res.status(404).send("Image not found");
    }

    // Send the image file as a blob
    res.sendFile(imagePath);
  });
});

// Route 3: Return 5 objects with names koc1, koc2, koc3, koc4, koc5
app.get("/get-koc-objects", (req, res) => {
  const kocObjects = [
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc1.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
    },
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2 copy.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800008}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      ecmNo: "1122334455",
      verNo: "3.0",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
    },
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc3 copy.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
    },
    {
      name: "koc2",
      addOn: "17/09/2024 11:10 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      modOn: "17/09/2024 11:10 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",

      vsid: "{C24174C1-D765-C3F0-8619-5FF715000002}",
    },
    {
      name: "koc3",
      addOn: "17/09/2024 11:11 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc3.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800003}",
      modOn: "17/09/2024 11:11 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000003}",
    },
    {
      name: "koc4",
      addOn: "17/09/2024 11:12 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc4.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800004}",
      modOn: "17/09/2024 11:12 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000004}",
    },
    {
      name: "koc5",
      addOn: "17/09/2024 11:13 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc5.jpeg",
      format: "image/jpeg",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800005}",
      modOn: "17/09/2024 11:13 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000005}",
    },
  ];

  res.json(kocObjects);
});
app.get("/get-video-docs", (req, res) => {
  const videoDocs = [
    {
      name: "koc1",
      addOn: "17/09/2024 11:09 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc1.mp4",
      format: "video/mp4",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800001}",
      modOn: "17/09/2024 11:09 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000001}",
    },
    {
      name: "koc2",
      addOn: "17/09/2024 11:10 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc2.mp4",
      format: "video/mp4",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800002}",
      modOn: "17/09/2024 11:10 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000002}",
    },
    {
      name: "koc3",
      addOn: "17/09/2024 11:11 AM",
      creator: "P8Admin",
      docclass: "KOC Document",
      fileName: "koc3.mp4",
      format: "video/mp4",
      id: "{1E0E8125-E0CC-CE8F-9C89-91FF07800003}",
      modOn: "17/09/2024 11:11 AM",
      modifier: "P8Admin",
      size: "4778448.0",
      verNo: "3.0",
      ecmNo: "1122334455",
      vsid: "{C24174C1-D765-C3F0-8619-5FF715000003}",
    },
  ];

  res.json(videoDocs);
});

// Route 4: Get video blob from file based on video name
app.get("/get-video/:videoName", (req, res) => {
  const videoName = req.params.videoName;
  const videoPath = path.join(__dirname, "videos", videoName);

  // Check if the requested video exists in the directory
  fs.stat(videoPath, (err) => {
    if (err) {
      return res.status(404).send("Video not found");
    }

    // Send the video file as a blob
    res.sendFile(videoPath);
  });
});
const data = {
  searchList: [
    {
      name: "Correspondence",
      symName: "Correspondence",
      id: "{E140E493-17EB-C79B-8481-705730F00000}",
      type: "TEMPLATE",
      vsid: "{9C871B5E-919B-C1C1-8785-5E12E3200000}",
    },
    {
      name: "My New Entry Template",
      symName: "My New Entry Template",
      id: "{8ABE0E7A-67D3-C4B7-86DA-5DA29C200000}",
      type: "TEMPLATE",
      vsid: "{D7A4D5A3-2620-C81E-844B-5DA291A00000}",
    },
    {
      name: "TestFormEntryTemplate",
      symName: "TestFormEntryTemplate",
      id: "{95CC79E0-8A9A-401F-A8A6-A064FD59D921}",
      type: "TEMPLATE",
      vsid: "{BC9326E2-59E6-475E-8F7B-13FD15D9331F}",
    },
  ],
  addList: [
    {
      name: "Correspondence",
      symName: "Correspondence",
      id: "{E140E493-17EB-C79B-8481-705730F00000}",
      type: "TEMPLATE",
      vsid: "{9C871B5E-919B-C1C1-8785-5E12E3200000}",
    },
    {
      name: "My New Entry Template",
      symName: "My New Entry Template",
      id: "{8ABE0E7A-67D3-C4B7-86DA-5DA29C200000}",
      type: "TEMPLATE",
      vsid: "{D7A4D5A3-2620-C81E-844B-5DA291A00000}",
    },
    {
      name: "TestFormEntryTemplate",
      symName: "TestFormEntryTemplate",
      id: "{95CC79E0-8A9A-401F-A8A6-A064FD59D921}",
      type: "TEMPLATE",
      vsid: "{BC9326E2-59E6-475E-8F7B-13FD15D9331F}",
    },
  ],
};

// GET route to send the data
app.get("/api/data", (req, res) => {
  res.json(data);
});
app.get("/api/koc-fold", (req, res) => {
  const data = [
    {
      path: "/KOC Documents/KOC Level",
      name: "KOC Level",
      id: "{8682BC8C-0255-4D7C-8418-7C1D6CC3B859}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media Library",
      name: "KOC Media Library",
      id: "{F06CA2A4-5AA9-4611-8396-0152E19EC571}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/Saved Searches",
      name: "Saved Searches",
      id: "{2A176821-529F-46EB-88E5-FC877F437C8D}",
      type: "Folder",
    },
  ];

  res.json(data); // Send the JSON response with the objects
});

app.get("/api/getSub/:id", (req, res) => {
  const data = [
    {
      path: "/KOC Documents/KOC Media Library/Images",
      name: "Images",
      id: "{DEAA7479-70EB-469F-82A6-C2D9A5C6DE2F}",
      type: "Folder",
    },
    {
      path: "/KOC Documents/KOC Media Library/Videos",
      name: "Videos",
      id: "{AFDD319D-489C-4ACF-8F95-2AF1B3005EC8}",
      type: "Folder",
    },
  ];
  res.json(data); // Send the JSON response with the objects
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
