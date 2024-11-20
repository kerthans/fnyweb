// src/components/ui/loading.tsx
export default function Loading() {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="relative w-24 h-24">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-primary rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute top-2 left-2 w-20 h-20 border-4 border-secondary rounded-full animate-spin border-t-transparent animation-delay-150"></div>
          <div className="absolute top-4 left-4 w-16 h-16 border-4 border-accent rounded-full animate-spin border-t-transparent animation-delay-300"></div>
        </div>
      </div>
    )
  }