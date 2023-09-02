"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const { push } = useRouter();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    push(`/prediction/${value}`);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className="md:border-solid"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="enter name"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
