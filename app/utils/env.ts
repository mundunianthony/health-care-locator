// src/utils/env.ts
import * as dotenv from 'dotenv';
import Constants from 'expo-constants';

dotenv.config();

export const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;