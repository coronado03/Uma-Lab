
const CarouselCircles = ({ count, currentItem }:any) => {
    return (
      <div className="flex justify-center mt-12 relative bottom-[-70px]">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentItem ? 'bg-sky-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    );
  };

export default CarouselCircles