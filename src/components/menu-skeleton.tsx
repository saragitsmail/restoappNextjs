'use client'

export default function MenuSkeleton() {
  return (
    <div className="py-12 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((idx) => (
          <div
            key={idx}
            className="glass-panel rounded-xs overflow-hidden border border-gold/10 animate-pulse flex flex-col justify-between"
          >
            {/* Image Placeholder */}
            <div className="aspect-[4/3] w-full bg-[#1A1A1A] relative">
              <div className="absolute top-4 left-4 w-20 h-6 bg-[#262626] rounded-xs" />
            </div>

            {/* Content Placeholder */}
            <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="h-6 w-3/5 bg-[#262626] rounded" />
                  <div className="h-6 w-1/4 bg-gold/20 rounded" />
                </div>
                <div className="h-3 w-full bg-[#222222] rounded" />
                <div className="h-3 w-4/5 bg-[#222222] rounded" />
              </div>

              <div className="pt-4 border-t border-gold/10 flex justify-between items-center">
                <div className="h-4 w-1/3 bg-[#262626] rounded" />
                <div className="h-8 w-24 bg-gold/15 rounded" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
