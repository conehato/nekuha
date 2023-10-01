interface IArticleFormItemProps {
  children: React.ReactNode;
  label: string;
}
export function ArticleFormItem({ children, label }: IArticleFormItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-2xl font-bold">{label}</div>
      {children}
    </div>
  );
}
