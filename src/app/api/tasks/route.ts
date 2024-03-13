import prisma from "@/app/utils/connect";
import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized", status: 401 });
    }

    const { title, description, date, completed, important } = await req.json();

    if (!title || !description || !date) {
      return NextResponse.json({
        error: "Missing required fields",
        status: 400,
      });
    }

    if (title.length < 3) {
      return NextResponse.json({
        error: "Title must be at least 3 characters long",
        status: 400,
      });
    }

    const task = await prisma.task.create({
      data: {
        title,
        description,
        date,
        isCompleted: completed,
        isImportant: important,
        userId,
      },
    });

    console.log("Task Created: ", task);

    return NextResponse.json(task);
  } catch (error) {
    console.log("Error in creating task: ", error);
    return NextResponse.json({ error: "Error creating task", status: 500 });
  }
}

export async function GET(req: Request) {
  try {
  } catch (err) {
    console.log("Error getting tasks: ", err);
    return NextResponse.json({ error: "Error getting tasks", status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
  } catch (err) {
    console.log("Error updating task: ", err);
    return NextResponse.json({ error: "Error updating task", status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
  } catch (err) {
    console.log("Error deleting tasks: ", err);
    return NextResponse.json({ error: "Error deleting tasks", status: 500 });
  }
}
