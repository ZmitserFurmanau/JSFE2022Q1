import React from 'react';
import styles from './Home.module.scss';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setFilters, setSortDescending } from '../../redux/filter/slice';
import { setCurPage } from '../../redux/pagination/slice';
import { fetchPizzas } from '../../redux/pizza/thunk';

import {
  Categories,
  Pagination,
  PizzaBlock,
  Skeleton as PizzaBlockSkeleton,
  Sort,
  Search,
} from '../../components';

import { pizzaCategories, pizzaSorts } from '../../utils/constans/pizzaOptions';

const Home: React.FC = () => {
  const { category, search, sort, sortDescending } = useAppSelector((state) => state.filter);
  const { items, status } = useAppSelector((state) => state.pizza);
  const { curPage, pageSize } = useAppSelector((state) => state.pagination);

  const location = useLocation();
  const dispatch = useAppDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const [mountSearchParams, setMountFirstSearchParams] = React.useState<boolean>(true);

  // set filters at the first rendering
  React.useLayoutEffect(() => {
    const options = { category: pizzaCategories[0], sort: pizzaSorts[0], search: '' };

    if (location.search) {
      const categoryParam = searchParams.get('category');
      const sortParam = searchParams.get('sort');
      const searchParam = searchParams.get('search');

      const category = pizzaCategories.find((item) => item.name === categoryParam);
      const sort = pizzaSorts.find((item) => item.name === sortParam);

      if (category) options.category = category;
      if (sort) options.sort = sort;
      if (searchParam) options.search = searchParam;
    }

    if (mountSearchParams || !location.search) dispatch(setFilters(options));

    setMountFirstSearchParams(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.search]);

  React.useEffect(() => {
    if (!mountSearchParams) {
      setSearchParams({
        category: category.id !== 0 ? category.name : [],
        search: search || [],
        sort: sort.id !== 0 ? sort.name : [],
      });
      sortDescending && dispatch(setSortDescending(false));
      curPage !== 1 && dispatch(setCurPage(1));

      dispatch(fetchPizzas({ category, sort, search }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, search, sort, mountSearchParams]);

  const renderItems = () => {
    switch (status) {
      case 'success':
        if (items.length !== 0) {
          const sortItems = [...items];

          if (sortDescending) sortItems.reverse();

          return (
            <>
              <div className={styles.items}>
                {sortItems.slice((curPage - 1) * pageSize, curPage * pageSize).map((item) => (
                  <PizzaBlock key={item.id} {...item} />
                ))}
              </div>
              <Pagination total={sortItems?.length} />
            </>
          );
        }

        const options = { category: pizzaCategories[0], sort: pizzaSorts[0], search: '' };

        return (
          <div className={styles.notFound}>
            <span>Sorry, no matches found 😢</span>
            <button className="button" onClick={() => dispatch(setFilters(options))}>
              Reset filters
            </button>
          </div>
        );

      case 'loading':
        return (
          <div className={styles.items}>
            {Array.from({ length: pageSize }, (_, i) => (
              <PizzaBlockSkeleton key={i} />
            ))}
          </div>
        );

      case 'error':
        return (
          <div className={styles.notFound}>
            <span>An error occurred while getting pizzas 😢</span>
            <Link to="/">
              <button className="button button--black">Try again</button>
            </Link>
          </div>
        );
    }
  };

  return (
    <div className="container">
      <div className={styles.top}>
        <h2 className={styles.title}>
          {category.name} pizzas
          <img
            className={`${styles.sortSvg} ${sortDescending ? styles.descending : ''}`}
            src="/img/sort.svg"
            alt="sort"
            onClick={() => dispatch(setSortDescending(!sortDescending))}
          />
        </h2>
        <Search />
      </div>
      <div className={styles.middle}>
        <Categories />
        <Sort />
      </div>
      {renderItems()}
    </div>
  );
};

export default Home;
