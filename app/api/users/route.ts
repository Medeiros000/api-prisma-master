import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json({ data: users, total: users.length }, { status: 200 });
}