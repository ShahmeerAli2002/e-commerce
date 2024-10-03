import React from 'react';
import Image from 'next/image';

type BlogCardProps = {
  img: string;
  title: string;
  date: string;
  description: string;
};

const BlogCard: React.FC<BlogCardProps> = ({ img, title, date, description }) => {
  return (
    <div className="space-y-4">
      <Image
        className="rounded-lg hover:scale-105 transition-transform w-full h-48 object-cover"
        src={img}
        alt={title}
        width={500}
        height={300}
      />
      <div className="text-accent font-medium">
        <span>{date}</span>
      </div>
      <h3 className="font-bold text-lg pt-4">{title}</h3>
      <p className="text-gray-500 pt-2">{description}</p>
    </div>
  );
};

export default BlogCard;