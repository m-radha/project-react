import { useParams } from 'react-router-dom';
import Article from './Article';
import { data } from '../../assets/local-storage/local-storage';

const Similar = () => {
  let { id } = useParams();
  const currentArticle = data.find(article => article.id === parseInt(id));
  const similarArticles = data.filter(article => article.category === currentArticle.category && article.id !== currentArticle.id);

  return (
    <div>
      <h1>Similar Articles in {currentArticle.category}</h1>
      {similarArticles.map(article => (
        <Article key={article.id} {...article} />
      ))}
    </div>
  );
};

export default Similar;