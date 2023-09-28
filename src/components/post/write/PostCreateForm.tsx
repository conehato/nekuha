"use client";

import { Editor } from "@/components/Editor";
import { Controller, useForm } from "react-hook-form";

interface PostCreateFormType {
  title: string;
  contents: string;
}
export function PostCreateForm() {
  const {
    handleSubmit,
    control,
    formState: { isValid, isDirty },
  } = useForm<PostCreateFormType>({});

  return (
    <div>
      <div>
        <div>제목</div>
        <Controller
          name="title"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <input
              value={value}
              onChange={({ target: { value } }) => onChange(value)}
              placeholder="제목을 입력하세요."
            />
          )}
        />
      </div>

      <div>
        <div>본문</div>
        <Controller
          name="contents"
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, value } }) => (
            <Editor value={value} onChange={(value) => onChange(value)} />
          )}
        />
      </div>
    </div>
  );
}
