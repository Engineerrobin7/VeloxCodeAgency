
import React from 'react';

export const SkeletonCard = () => (
  <div className="w-full bg-surface border border-white/5 rounded-3xl overflow-hidden p-0 animate-pulse">
    <div className="w-full aspect-[4/3] bg-white/5" />
    <div className="p-8 space-y-3">
      <div className="h-3 w-20 bg-primary/20 rounded-full" />
      <div className="h-6 w-3/4 bg-white/10 rounded-lg" />
    </div>
  </div>
);

export const SkeletonPost = () => (
  <div className="w-full space-y-6 py-4 animate-pulse">
    <div className="flex justify-between">
      <div className="flex space-x-4">
        <div className="h-6 w-24 bg-primary/10 rounded-full" />
        <div className="h-6 w-20 bg-white/5 rounded-full" />
      </div>
      <div className="h-6 w-16 bg-white/5 rounded-full" />
    </div>
    <div className="h-8 w-3/4 bg-white/10 rounded-lg" />
    <div className="space-y-2">
      <div className="h-4 w-full bg-white/5 rounded-md" />
      <div className="h-4 w-2/3 bg-white/5 rounded-md" />
    </div>
    <div className="h-px w-full bg-white/5" />
  </div>
);
