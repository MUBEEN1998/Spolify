import express from 'express';
import dbconnect from '../config/db.js';

export const user = async (req, res) => {
  return res.json({ name: 'mohd Mubeen' });
};

export const createuser = async (req, res) => {
  try {
    const { name, mobile, email, password } = req.body;

    // Check if the email already exists
    const checkQuery = 'SELECT * FROM user WHERE email = ?';
    const [checkResults] = await dbconnect.promise().query(checkQuery, [email]);

    if (checkResults.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // If email is not found, insert the new user
    const insertQuery =
      'INSERT INTO user (name, mobile, email, password, status, role) VALUES (?, ?, ?, ?, ?, ?)';
    const [insertResults] = await dbconnect.promise().query(insertQuery, [
      name,
      mobile,
      email,
      password,
      'false', // assuming status is a string, adjust if it's a boolean
      'user',
    ]);

    return res.status(200).json({
      message: 'Successfully registered',
      query: insertQuery,
      insertedId: insertResults.insertId,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
