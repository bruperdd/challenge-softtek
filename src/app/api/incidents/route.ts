import { NextRequest } from 'next/server';

import { prisma } from '@/lib/prisma';

const PER_PAGE = 10;

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  const page = searchParams.get('page');
  const status = searchParams.get('status');
  const id = searchParams.get('incidentId');

  const incidents = await prisma.incident.findMany({
    where: {
      id: id ? id : undefined,
      status: status ? status : undefined,
    },
    skip: page ? (parseInt(page) - 1) * PER_PAGE : 0,
    take: PER_PAGE,
  });

  const totalCount = await prisma.incident.count({
    where: {
      id: id ? id : undefined,
      status: status ? status : undefined,
    },
  });

  const totalPages = Math.ceil(totalCount / PER_PAGE) || 1;

  return Response.json({
    incidents,
    meta: {
      totalCount,
      totalPages,
      pageIndex: page ? parseInt(page) - 1 : 0,
      perPage: PER_PAGE,
    },
  });
}
