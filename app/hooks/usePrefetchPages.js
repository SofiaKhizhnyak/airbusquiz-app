"use client";
import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";

const usePrefetchPages = (pages) => {
  const router = useRouter();

  const prefetchPages = useCallback(() => {
    pages.forEach((page) => router.prefetch(page));
  }, [pages]);

  useEffect(() => {
    prefetchPages();
  }, [prefetchPages]);
};

export { usePrefetchPages };

/*
The usePrefetchPages is a custom hook that prefetches specified pages to enable smoother navigation and faster loading. 
It uses useCallback to memoize the prefetch function, ensuring stability and preventing unnecessary re-creation or re-renders unless its dependencies (router or pages) change.

Benefits:
- Improved Performance: Reduces page load times by fetching resources in advance.
- Stability: Avoids unnecessary function re-creation, ensuring cleaner and more efficient re-renders.
- Reusability: Can be used across multiple components to prefetch different pages.
*/
