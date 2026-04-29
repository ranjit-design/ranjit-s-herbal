export default function IngredientCard({ ingredient }) {
  const { name, description, benefits, image } = ingredient || {}

  return (
    <div className="border rounded-lg p-4 hover:shadow-md transition">
      <div className="flex flex-col items-center text-center gap-4 md:flex-row md:items-start md:text-left">
        <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center text-2xl shrink-0">
          {image || '🌿'}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{name || 'Ingredient Name'}</h3>
          <p className="text-sm text-gray-600 mt-1">
            {description || 'Natural ingredient description'}
          </p>
          {benefits && benefits.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2 justify-center md:justify-start">
              {benefits.map((benefit, index) => (
                <span
                  key={index}
                  className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"
                >
                  {benefit}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
