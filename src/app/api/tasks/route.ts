import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const tasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(tasks);
}

export async function POST(request: Request) {
  const body = await request.json();

  const task = await prisma.task.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(task);
}

export async function PUT(request: Request) {
  const body = await request.json();

  const task = await prisma.task.update({
    where: {
      id: body.id,
    },
    data: {
      title: body.title,
      description: body.description,
      completed: body.completed,
    },
  });

  return NextResponse.json(task);
}

export async function DELETE(request: Request) {
  const body = await request.json();

  await prisma.task.delete({
    where: {
      id: body.id,
    },
  });

  return NextResponse.json({
    message: "Task deleted",
  });
}