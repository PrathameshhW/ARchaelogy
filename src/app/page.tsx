"use client";
import { Button, Form, Input } from "@nextui-org/react";
import React from "react";

export default function Home() {
  return (
    <Form className="h-screen" validationBehavior="native">
      <Input isRequired label="Email" type="email" name="email" />
      <Button color="primary" type="submit">
        Hello world
      </Button>
    </Form>
  );
}
