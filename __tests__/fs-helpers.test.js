import fs from "node:fs/promises";
import { checkFolderExistsAsync } from "../src/fs-helpers";

jest.mock("node:fs/promises");

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