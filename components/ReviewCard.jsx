export default function ReviewCard({ review }) {
  const { name, rating, date, comment, verified } = review || {}

  return (
    <div className="border rounded-lg p-4">
      <div className="flex flex-col items-center text-center gap-3 mb-3 md:flex-row md:items-start md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center font-semibold text-green-700">
            {name ? name.charAt(0).toUpperCase() : 'U'}
          </div>
          <div>
            <p className="font-semibold">{name || 'Anonymous'}</p>
            {verified && (
              <span className="text-xs text-green-600 flex items-center gap-1 justify-center md:justify-start">
                <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Verified Purchase
              </span>
            )}
          </div>
        </div>
        <span className="text-sm text-gray-500">{date || 'Recent'}</span>
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-2 justify-center md:justify-start">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${
              i < (rating || 0) ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      <p className="text-gray-700">{comment || 'Great product! Really happy with the results.'}</p>
    </div>
  )
}
