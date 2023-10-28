import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "app.js", 
  output: {
    file: "dist/bundle.js", 
    format: "cjs", 
  },
  plugins: [commonjs()],
  external: [
    "express",
    "cors",
    "morgan",
    "cookie-parser",
    "jsonwebtoken",
    "express-validator",
    "bcrypt",
    "mongoose",
  ],
};
