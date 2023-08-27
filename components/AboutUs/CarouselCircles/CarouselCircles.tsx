const CarouselCircles = ({ count, currentItem }:any) => {
    return (
      <div className="flex justify-center mt-12 relative bottom-[-1px]">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full mx-1 ${
              index === currentItem ? 'bg-white' : 'bg-[#7A7A7A]'
            }`}
          />
        ))}
      </div>
    );
  };

export default CarouselCircles