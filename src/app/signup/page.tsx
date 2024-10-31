"use client";
import { Button } from "@/components/ui/button";
import InputBox from "@/components/InputBox";
import { Backend_URL } from "@/lib/Constants";
import Link from "next/link";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
type FormInputs = {
  name: string;
  email: string;
  password: string;
};

const SignupPage = () => {
  const register = async () => {
    const res = await fetch(Backend_URL + "/auth/register", {
      method: "POST",
      body: JSON.stringify({
        name: data.current.name,
        email: data.current.email,
        password: data.current.password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      alert(res.statusText);
      return;
    }
    const response = await res.json();
    alert("Usuario Registrado!");
    console.log({ response });
  };
  const data = useRef<FormInputs>({
    name: "",
    email: "",
    password: "",
  });
  return (
    <div className="w-80 mx-auto m-2 border rounded overflow-hidden shadow">
      <div className="p-2 bg-gradient-to-b from-white to-slate-200 text-gray-800 text-center">
        Sign up
      </div>
      <div className="p-2 flex flex-col gap-6">
        <Input
          autoComplete="off" 
          placeholder="Nome"
          name="name"
          required
          onChange={(e) => (data.current.name = e.target.value)}
        />

        <Input
          autoComplete="off" 
          placeholder="Email"
          name="email"
          required
          onChange={(e) => (data.current.email = e.target.value)}
        />

        <Input
          autoComplete="off" 
          placeholder="password"
          name="password"
          type="password"
          required
          onChange={(e) => (data.current.password = e.target.value)}
        />
        <div className="flex justify-center items-center gap-2">
          <Button className="bg-black text-white" onClick={register}>Enviar</Button>
          <Link className="className='flex gap-4 ml-auto'" href={"/"}>
            <Button className="bg-white text-black hover:bg-gray-400 transition-colors">Cancel</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;