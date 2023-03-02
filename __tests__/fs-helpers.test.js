import fs from "node:fs/promises";
import path from "node:path";
import { checkFolderExistsAsync, writeDataToFileAsync } from "../src/fs-helpers";

jest.mock("node:fs/promises");
jest.mock("node:path");

beforeEach(() => {
  jest.resetAllMocks();
});

describe("checkFolderExistsAsync", () => {
  it("when folder exists, nothing happens", async () => {
    // Arrange
    const dir = "./test";
    const mockClose = jest.fn().mockResolvedValue();
    fs.opendir = jest.fn().mockResolvedValue({ close: mockClose });

    // Act
    await checkFolderExistsAsync(dir);

    // Assert
    expect(fs.opendir).toHaveBeenCalledTimes(1);
    expect(fs.opendir).toHaveBeenCalledWith(dir);
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(fs.mkdir).not.toHaveBeenCalled();
  });

  it("when folder does not exist, folder is created", async () => {
    // Arrange
    const dir = "./test";
    fs.opendir = jest.fn().mockRejectedValue(new Error("mock error"));

    // Act
    await checkFolderExistsAsync(dir);

    // Assert
    expect(fs.opendir).toHaveBeenCalledTimes(1);
    expect(fs.opendir).toHaveBeenCalledWith(dir);
    expect(fs.mkdir).toHaveBeenCalledTimes(1);
    expect(fs.mkdir).toHaveBeenCalledWith(dir);
  });
});

describe("writeDataToFileAsync", () => {
  it("when dir exists, dir is not created, join is called and writeFile called", async () => {
    // Arrange
    const dir = "./test";
    const file = "test.txt";
    const data = "test";
    const joinPath = "join path";
    const mockClose = jest.fn().mockResolvedValue();
    fs.opendir = jest.fn().mockResolvedValue({ close: mockClose });
    path.join = jest.fn().mockReturnValue(joinPath);

    // Act
    await writeDataToFileAsync(dir, file, data);
    
    // Assert
    expect(fs.opendir).toHaveBeenCalledTimes(1);
    expect(fs.opendir).toHaveBeenCalledWith(dir);
    expect(mockClose).toHaveBeenCalledTimes(1);
    expect(fs.mkdir).not.toHaveBeenCalled();

    expect(path.join).toHaveBeenCalledTimes(1);
    expect(path.join).toHaveBeenCalledWith(dir, file);

    expect(fs.writeFile).toHaveBeenCalledTimes(1);
    expect(fs.writeFile).toHaveBeenCalledWith(joinPath, data, { encoding: "utf8" });
  });

  it("when dir does not exists, dir is created, join is called and writeFile called", async () => {
    // Arrange
    const dir = "./test";
    const file = "test.txt";
    const data = "test";
    const joinPath = "join path";
    fs.opendir = jest.fn().mockResolvedValue(new Error("mock error"));
    path.join = jest.fn().mockReturnValue(joinPath);

    // Act
    await writeDataToFileAsync(dir, file, data);
    
    // Assert
    expect(fs.opendir).toHaveBeenCalledTimes(1);
    expect(fs.opendir).toHaveBeenCalledWith(dir);
    expect(fs.mkdir).toHaveBeenCalledTimes(1);
    expect(fs.mkdir).toHaveBeenCalledWith(dir);

    expect(path.join).toHaveBeenCalledTimes(1);
    expect(path.join).toHaveBeenCalledWith(dir, file);

    expect(fs.writeFile).toHaveBeenCalledTimes(1);
    expect(fs.writeFile).toHaveBeenCalledWith(joinPath, data, { encoding: "utf8" });
  });
});