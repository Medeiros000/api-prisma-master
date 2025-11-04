import prisma from '@/lib/prisma';
import { NextRequest, NextResponse } from 'next/server';

// Manipulador para o método GET em /api/users
export async function GET(request: NextRequest) {
  // Simula a busca de uma lista de usuários
  // const users = [
  //   { id: 1, name: 'João Silva', email: 'joao@exemplo.com' },
  //   { id: 2, name: 'Maria Souza', email: 'maria@exemplo.com' },
  // ];
  const users = await prisma.user.findMany();

  return NextResponse.json({ data: users, total: users.length }, { status: 200 });
}