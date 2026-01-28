export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="animate-pulse space-y-8">
          <div className="h-12 bg-muted rounded-lg w-1/3 mx-auto" />
          <div className="h-6 bg-muted rounded-lg w-1/2 mx-auto" />
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="bg-muted rounded-lg h-64" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
