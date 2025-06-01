const express = require("express");
const mongoose = require("mongose");
const cors = require("cors");

mongoose.connect("mongodb://localhost:27017/escuelaDB");