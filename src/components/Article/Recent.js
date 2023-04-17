import React from 'react';
import ArticleCard from './ArticleCard';
import { useRecentArticles } from '../../hooks/useRecentArticles';

export default function Recent() {
  const posts = useRecentArticles();

  return (
    <div className='grid grid-cols-1 gap-6 md:grid-cols-3 xl:grid-cols-4'>
      {posts && posts.map((item, i) => <ArticleCard key={i} data={item} />)}
    </div>
  );
}
