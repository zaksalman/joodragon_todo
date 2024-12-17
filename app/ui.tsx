"use client";

import { Button, Input } from "@material-tailwind/react";
import Todo from "./components/todo";
import { useState } from "react";

export default function UI() {
  return (
    <div className="w-2/3 mx-auto flex flex-col items-center py-10 gap-2">
      <h1 className="text-xl">하주용의 해야할 일</h1>
      <Input
        label="해야할 일 검색"
        placeholder="해야할 일 검색"
        icon={<i className="fas fa-search" />}
      />
      <Todo />
      <Button>
        <i className="fas fa-plus mr-2" />
        Add TODO
      </Button>
    </div>
  );
}
