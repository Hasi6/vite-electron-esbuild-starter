import { app, BrowserWindow } from "electron";
import { add } from "@common/utils";
import cors from "cors";
import { join } from "path";
import { pathToFileURL, format as formatUrl } from "url";
import express from "express";
import writeJsonFile from "write-json-file";

const isDevelopment = process.env.NODE_ENV === "development";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
    show: false,
  }).once("ready-to-show", () => {
    win.show();
  });
  if (isDevelopment) {
    win.loadURL("http://localhost:3000");
    win.webContents.toggleDevTools();
  } else {
    win.loadURL(
      pathToFileURL(join(__dirname, "../renderer/index.html")).toString()
    );
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const expressApp = express();
expressApp.use(cors());

expressApp.use(express.json());

expressApp.get("/", async (req, res) => {
  await writeJsonFile("foo.json", { foo: true });
  return res.json("Hasi");
});

expressApp.listen(5000);
