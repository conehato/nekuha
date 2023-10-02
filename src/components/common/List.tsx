interface IListProps<T> {
  data: T[];
  children: (payload: {item: T, index?: number }) => JSX.Element;
}

export function List<T>({ data, children }: IListProps<T>) {
  return (
    <div className="w-full">
      <ul className="divide-y divide-solid divide-main-blue">
        {data.map(i => children({item: i}))}
      </ul>
    </div>
  );
}
