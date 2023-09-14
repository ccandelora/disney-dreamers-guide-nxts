'use client';
import { FC } from 'react'
import React from "react";
import Link from "next/link";


import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationControlsProps {
  end: number
  start: number
  total: number
  total_pages: number
}

const PaginationControls: FC<PaginationControlsProps> = (
  {
    end,
    start,
    total,
    total_pages,
  }
) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const per_page = searchParams.get('per_page') ?? '5'

  const next_page = `/?page=${Number(page) + 1}`;
  const prev_page = `/?page=${Number(page) - 1}`;
  const showPrev = Number(page) > 1;
  const showNext = Number(page) < total_pages;
  return (
    <nav
      className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
      aria-label="Pagination"
    >
      <div className="hidden sm:block">
        <p className="text-sm text-gray-700">
          Showing <span className="font-medium">{start}</span> to{" "}
          <span className="font-medium">{end}</span> of{" "}
          <span className="font-medium">{total}</span> results
        </p>
      </div>
      <div className="flex flex-1 justify-between sm:justify-end">
        {showPrev === true ? (
          <Link
            href={prev_page}
            className="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Previous
          </Link>
        ) : null}
        {showNext === true ? (
          <Link
            href={next_page}
            className="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0"
          >
            Next
          </Link>
        ) : null}
      </div>
    </nav>
  );
}

export default PaginationControls;
