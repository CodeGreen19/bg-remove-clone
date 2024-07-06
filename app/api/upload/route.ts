"use server";

import { writeFile, mkdir } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  /// uploading feature

  const dateFolder = new Date().toISOString().split("T")[0];
  const random = Math.random();
  let ImageName = `image-${random}.${file.type.slice(6)}`;

  const folderPath = join(
    `/portfolio-site/bg-gone/public/uploads/${dateFolder}`,
  );
  const filePath = join(folderPath, ImageName);

  // Create the directory if it doesn't exist
  await mkdir(folderPath, { recursive: true });

  await writeFile(filePath, buffer);
  console.log(`open ${filePath} to see the uploaded file`);

  let createdFile = {
    folder: dateFolder,
    ImageName,
  };

  return NextResponse.json({ success: true, createdFile });
}
