"use client";

import { Button, Editor, Input } from "@/components/common";
import { Controller, useForm } from "react-hook-form";
import { ArticleFormItem } from "./Item";
import { useRouter } from "next/navigation";

interface IArticleFormType {
  title: string;
  contents: string;
}
export function ArticleForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = useForm<IArticleFormType>({});

  const router = useRouter();

  return (
    <div className="flex flex-col gap-4 p-4">
      <ArticleFormItem label="제목">
        <Controller
          name="title"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Input
              value={value}
              onChange={({ target: { value } }) => onChange(value)}
              placeholder="제목을 입력하세요."
            />
          )}
        />
      </ArticleFormItem>

      <ArticleFormItem label="본문">
        <Controller
          name="contents"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Editor value={value} onChange={(value) => onChange(value)} />
          )}
        />
      </ArticleFormItem>

      <div className="flex justify-end">
        <Button type="border" onClick={() => router.back()}>
          작성
        </Button>
      </div>
    </div>
  );
}
