"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { Toast, ToastTitle, ToastDescription, ToastProvider, ToastViewport } from "@/components/ui/toast"

export default function AuthForm() {
  const form = useForm()
  const [error, setError] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState({ title: "", content: "" })

  const handleSubmit = form.handleSubmit(async (data) => {
    try {
      // Autenticar com `credentials` em vez de `nodemailer`
      const result = await signIn("credentials", {
        redirect: false,
        username: data.username,
        password: data.password,
      })

      if (!result?.ok) {
        setError("Login failed. Please check your credentials.")
        return
      }

      setToastMessage({
        title: "Login Successful",
        content: "Welcome! You are now logged in.",
      })
      setShowToast(true)
    } catch (error) {
      setToastMessage({
        title: "Error",
        content: "An error occurred. Please try again.",
      })
      setShowToast(true)
    }
  })

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Sign In</CardTitle>
          <CardDescription>Enter your username and password to login</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="your username"
                  required
                  {...form.register("username")}
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="your password"
                  required
                  {...form.register("password")}
                />
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col">
            <Button className="w-full" type="submit" disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting ? "Logging in..." : "Log In"}
            </Button>
          </CardFooter>
        </form>
        <ToastProvider>
          {showToast && (
            <Toast variant="default">
              <ToastTitle>{toastMessage.title}</ToastTitle>
              <ToastDescription>{toastMessage.content}</ToastDescription>
            </Toast>
          )}
          <ToastViewport />
        </ToastProvider>
        {error && (
          <Alert variant="destructive" className="mt-4 mx-6 mb-4">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </Card>
    </div>
  )
}
