function MovieCard({ image, title, audioOptions }) {
    return (
      <div className="w-64 bg-black text-white rounded-lg overflow-hidden shadow-lg mx-2">
        <div className="h-96 overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="p-4">
          <h2 className="text-sm font-bold mb-2 text-start">{title}</h2>
          <p className="text-xs text-start text-gray-300">{audioOptions}</p>
        </div>
      </div>
    );
  }
  
  export default MovieCard;