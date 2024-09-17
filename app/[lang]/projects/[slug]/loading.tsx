export default function Loading() {
    
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
                <div className=' rounded-lg h-80 bg-stone-100 dark:bg-stone-900 shadow border border-stone-300 dark:border-stone-700 animate-pulse' key={i}/>
            ))}
        </div>
    )
  }