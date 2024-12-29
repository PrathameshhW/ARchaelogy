"use client";
import { Button, Input } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="h-screen">
      <Input label="Email" type="email" name="email" />
      <Button color="primary">Hello world</Button>
    </div>
  );
}
