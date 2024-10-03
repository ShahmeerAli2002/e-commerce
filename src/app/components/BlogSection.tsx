import React from 'react';
import BlogCard from './BlogCard';  

const BlogSection = () => {
  const data = [
    {
      id: 67,
      date: "Sep 30, 2024",
      img: "/image/updates1.jfif",
      title: "Latest Trends in Educational Toys",
      description: "Discover the newest educational toys that are both fun and beneficial for child development."
    },
    {
      date: "Sep 28, 2024",
      img: "/image/updates2.jpg",
      title: "Top 10 STEM Toys for 2024",
      description: "Explore the best STEM toys that are inspiring young minds and fostering creativity."
    },
   {
      date: "Sep 25, 2024",
      img: "/image/updates3.jfif",
      title: "Eco-Friendly Toys: A Growing Trend",
      description: "Learn about the rise of sustainable and environmentally friendly toys in the market."
    }
  ];

  return (
    <div className="container pt-32">
      <h2 className="font-bold text-2xl">Latest Toy News</h2>
      <p className="text-gray-500">
        Discover the most exciting and innovative developments in the world of toys.
      </p>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 pt-8">
        {data.map((item) => (
          <BlogCard
            key={item.date}
            img={item.img}
            title={item.title}
            date={item.date}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default BlogSection;