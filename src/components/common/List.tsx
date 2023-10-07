interface IListProps<T> {
  data: T[];
  itemKey: (item: T) => string
  children: (payload: {item: T, index?: number }) => JSX.Element;
}

export function List<T>({ data, itemKey, children }: IListProps<T>) {
  return (
    <div className="w-full">
      <ul className="">
        {data.map(i => <li key={itemKey(i)}>{children({item: i})}</li>)}
      </ul>
    </div>
  );
}
