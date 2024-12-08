
import SuccessContainer from '@/components/SuccessContainer';
import { redirect } from 'next/navigation';
import React from 'react';

interface Props {
  searchParams: Promise<{ session_id: string | null }>;  // Make searchParams a Promise
}

const SuccessPage = async ({ searchParams }: Props) => {
  const resolvedSearchParams = await searchParams;  // Resolve the Promise
  const { session_id } = resolvedSearchParams;  // Extract session_id

  if (!session_id) {
    redirect("/");
  }

  return (
    <div>
      <SuccessContainer id={session_id} />
    </div>
  );
};

export default SuccessPage;
