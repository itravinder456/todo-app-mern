import React, { useEffect, useState } from "react";
import socketIOClient from "socket.io-client";
const ENDPOINT = "http://localhost:5000";
const socket = socketIOClient(ENDPOINT);

export function getSocketIOInstance(source) {
  console.log("source", source);
  return socket;
}
