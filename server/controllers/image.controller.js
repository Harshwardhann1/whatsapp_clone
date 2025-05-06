const url = 'http://localhost:3002';
import mongoose from 'mongoose';
import path from 'path';
import fs from 'fs';

import grid from 'gridfs-stream';
import { request } from 'express';

let gfs, gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
  gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
    bucketName: 'fs',
  });
  gfs = grid(conn.db, mongoose.mongo);
  gfs.collection('fs');
});

export const uploadFile = async (request, response) => {
  if (!request.file) {
    return response.status(404).json('File not found.');
  }

  const imageUrl = `${request.protocol}://${request.get('host')}/uploads/${
    request.file.filename
  }`;

  return response.status(200).json({ imageUrl });
};

export const getImage = async (req, res) => {
  try {
    const filePath = path.join('uploads', req.params.filename);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'File not found' });
    }

    res.sendFile(path.resolve(filePath));
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};